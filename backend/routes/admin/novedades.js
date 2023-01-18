var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var usuariosModel = require('../../models/usuariosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


// GET NOVEDADES
router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 80,
        height: 80,
        crop: 'fill'
      });

      return {
        ...novedad,
        imagen
      }
  } else {
      return {
        ...novedad,
        imagen: ''
        }
      }
  });


    res.render('admin/novedades', { 
      layout: 'admin/layout',
      usuario: req.session.nombre,
      novedades 
    });
  });

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});

//POST AGREGAR NOVEDAD
router.post('/agregar', async (req, res, next) => {
  try {
      var img_id = '';

      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader (imagen.tempFilePath)).url;
      }


      if (req.body.titulo !="" && req.body.subtitulo != "" && req.body.cuerpo != "") {
          await novedadesModel.insertNovedad({
            ...req.body, //trae titulo, subtitulo y cuerpo
            img_id // trae imagen

          });
          res.redirect('/admin/novedades')
      } else {
          res.render('admin/agregar', {
              layout: 'admin/layout',
              error: true,
              message: 'Todos los campos son requeridos'
          })
      }
  }   catch (error) {
      console.log(error)
      res.render('admin/agregar', {
          layout: 'admin/layout',
          error: true,
          message: 'No se cargó la novedad'
      });
  }
})


//POST MODIFICAR NOVEDAD
router.post('/modificar', async (req, res, next) => {
  try {
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
        img_id = null;
        borrar_img_vieja = true;
    } else {
        if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).url;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

      let obj = {
        titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        cuerpo: req.body.cuerpo,
        img_id
      }

      console.log("LOG DE OBJ", obj);
      await novedadesModel.modificarNovedadById(obj, req.body.id);
      res.redirect('/admin/novedades');
  } catch (error) {
      console.log(error)
      res.render('admin/modificar', {
        layout: 'admin/layout',
        error: true,
        message: 'No se modifico la novedad'
      })
  }
})
    


//GET ELIMINAR NOVEDAD
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  let novedad = await novedadesModel.getNovedadById(id);
  if (novedad.img_id) {
    await (destroy(novedad.img_id));
  }
  await novedadesModel.deleteNovedadById(id);
  res.redirect('/admin/novedades')
})
;

//GET MODIFICAR NOVEDAD
router.get('/modificar/:id', async (req, res, next) => {
  let id = req.params.id;
  var novedad = await novedadesModel.getNovedadById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  });
});


module.exports = router;