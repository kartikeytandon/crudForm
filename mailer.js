"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sentMail = async(sentTo, subject, content) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true fo   r 465, false for other ports
    auth: {
      user: "tandonkartikey11", // generated ethereal user
      pass: "nwfrnssebpfesmgs", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Kartikey Tandon👻" <tandonkartikey11@gmail.com>', // sender address
    to: sentTo, // list of receivers
    subject: subject, // Subject line
    attachments: [{
        filename: 'chala ja.jpg',
        path: './chala ja.jpg',
        cid: 'chalaja'
    }],
    html: content, // html body
  });

  return info
}

module.exports = {sentMail}
