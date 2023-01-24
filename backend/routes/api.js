var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cursosModel = require('./../models/cursosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function(req, res, next) {
    var novedades = await novedadesModel.getNovedades();
  
    novedades = novedades.map(novedades => {
      if (novedades.img_id) {
        const imagen = cloudinary.image(novedades.img_id, {
          width: 960,
          height: 200,
          crop: 'fill'
        });
  
        return {
          ...novedades,
          imagen
        }
    } else {
        return {
            ...novedades,
            imagen: ''
          }
        }
    });

    res.json(novedades);
});

router.get('/cursos', async function(req, res, next) {
  var cursos = await cursosModel.getCursos();
  res.json(cursos);
});

router.post('/contacto', async (req, res) => {
  const mail = {
    to: 'artanescuela@gmail.com',
    subject: '<b> Contacto Artan </b>',
    html: `<b> ${req.body.nombre} </b> se contactó a través de la web de <b>Artan</b>
    <br><b> Mensaje: ${req.body.mensaje} 
    <br><b>Mail de respuesta: ${req.body.email}
    <br><b> Teléfono de contacto </b> ${req.body.telefono}`
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: 'Mensaje enviado'
  });

});

module.exports = router;