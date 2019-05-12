var nodemailer = require ('nodemailer');

// create reusable transporter object using SMTP transport 
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ujjwalkr05@gmail.com',
    pass: 'ujjwal@uber'
  }
});

var mailOptions = {
  from: 'ujjwar05@gmail.com',
  to: 'ujjwalverma05@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error.message);
  } else {
    console.log('Email sent: ' + info.response);
  }
});