import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_POST,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const MailObject = {
  from: String,
  to: String,
  subject: String,
  text: String,
  html: String,
};

// const nodemailerMailgun = nodemailer.createTransport(mg(auth));
export { transporter, MailObject };
