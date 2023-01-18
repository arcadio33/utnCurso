var express = require('express');
var router = express.Router();
var cursosModel = require('../../models/cursosModel');
var usuariosModel = require('../../models/usuariosModel');

//INGRESAR A CURSOS
router.get('/', async function(req, res, next) {
  var cursos = await cursosModel.getCursos();  
    res.render('admin/cursos', { 
      layout: 'admin/layout',
      usuario: req.session.nombre,
      cursos 
    });
  });

//INGRESAR A SECCIÓN DE AGREGAR CURSOS
router.get('/agregarcurso', (req, res, next) => {
  res.render('admin/agregarcurso', {
    layout: 'admin/layout'
  })
});

//AGREGAR CURSO
router.post('/agregarcurso', async (req, res, next) => {
  try {
    console.log(req.body)
      if (req.body.nombre !="" && req.body.detalles != "" && req.body.fecha_inicio != "" && req.body.fecha_hasta != "") {
          await cursosModel.insertCurso(req.body);
          res.redirect('/admin/cursos')
      } else {
          res.render('admin/cursos/agregarcurso', {
              layout: 'admin/layout',
              error: true,
              message: 'Todos los campos son requeridos'
          })
      }
  }   catch (error) {
      console.log(error)
      res.render('admin/agregarcurso', {
          layout: 'admin/layout',
          error: true,
          message: 'No se cargó el curso'
      });
  }
})


//MODIFICAR CURSO
router.post('/modificarcursos', async (req, res, next) => {
  try {
      let obj = {
        nombre: req.body.nombre,
        detalles: req.body.detalles,
        fecha_inicio: req.body.fecha_inicio,
        fecha_hasta: req.body.fecha_hasta,
      }
      await cursosModel.modificarCursoById(obj, req.body.id);
      res.redirect('/admin/cursos');
  } catch (error) {
      console.log(error)
      res.render('admin/modificarcursos', {
        layout: 'admin/layout',
        error: true,
        message: 'No se modifico el curso'
      })
  }
})
    

//ELIMINAR CURSO
router.get('/eliminarcursos/:id', async (req, res, next) => {
  var id = req.params.id;
  await cursosModel.deleteCursoById(id);
  res.redirect('/admin/cursos')
})
;



router.get('/modificarcursos/:id', async (req, res, next) => {
  let id = req.params.id;
  var cursos = await cursosModel.getCursoById(id);
  console.log(cursos)
  // cursos.fecha_inicio = cursos.fecha_inicio.toLocaleDateString("en-US");
  //cursos.fecha_inicio = cursos.fecha_inicio.getUTCFullYear() +"-"+ (cursos.fecha_inicio.getUTCMonth()+1) +"-"+ cursos.fecha_inicio.getUTCDate() + "T" + cursos.fecha_inicio.getUTCHours() + ":" + cursos.fecha_inicio.getUTCMinutes()
  var fechaInicio = new Date(cursos.fecha_inicio).toISOString().split('.000Z')[0];
  cursos.fecha_inicio = fechaInicio
  var fechaHasta = new Date(cursos.fecha_hasta).toISOString().split('.000Z')[0];
  cursos.fecha_hasta = fechaHasta
  
  console.log(cursos)
  res.render('admin/modificarcursos', {
    layout: 'admin/layout',
    cursos
  });
});


// router.get('/modificar/:id', async (req, res, next) => {
//     let id = req.params.id;
//     var novedad = await novedadesModel.getNovedadById(id);
//     res.render('admin/modificar', {
//       layout: 'admin/layout',
//       novedad
//     });
//   });
  
  


module.exports = router;