'use strict';

var nodemailer = require('nodemailer');
var server = require('./server');
server.start();
// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'chareesa.graham@gmail.com',
    pass: 'Justin1@'
  }
});

// setup e-mail data with unicode symbols
var mailOptions = {
// sender address
      from: 'Tester ✔ <chareesagraham@gmail.com>',
// list of receivers
      to: 'chareesaaguilar@gmail.com',
// Subject line
      subject: 'Testing test ✔',
// plaintext body
      text: 'It works! ✔',
// rich text html body
      html: '<p>It works</p>'
    };

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  }else{
    console.log('Message sent: ' + info.response);
  }
});
