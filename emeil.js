var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'loubirizeineb@gmail.com',
    pass: 'azerty123'
  }
});

var mailOptions = {
  from: 'loubirizeineb@gmail.com',
  to: 'mohamed.jlassi.355@gmail.com',
  subject: 'hello word',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});