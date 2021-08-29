import { transporter } from '../../../../../src/configs/mail.config';
import { verificationTemplate } from '../templates/verification.template';

const sendVericationMail = async data => {
  let info = await transporter.sendMail({
    from: 'admin@ethereal.email',
    to: data.email,
    subject: 'Account Verification',
    html: verificationTemplate(data),
  });
  console.log('Message sent: %s', info.messageId);
};

const sendWelcomeMail = async ({ from, to, subject, html }) => {
  let info = await transporter.sendMail({
    from,
    to,
    subject,
    html,
  });
  console.log('Message sent: %s', info.messageId);
};

const sendTransactionMail = async ({ from, to, subject, html }) => {
  let info = await transporter.sendMail({
    from,
    to,
    subject,
    html,
  });
  console.log('Message sent: %s', info.messageId);
};

const sendResetPasswordMail = async ({ from, to, subject, html }) => {
  let info = await transporter.sendMail({
    from,
    to,
    subject,
    html,
  });
  console.log('Message sent: %s', info.messageId);
};

export { sendVericationMail, sendWelcomeMail, sendTransactionMail, sendResetPasswordMail };
