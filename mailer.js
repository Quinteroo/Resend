import dotenv from 'dotenv';
dotenv.config();
import { Resend } from 'resend';

const resend = new Resend(`${process.env.API_KEY_MAIL_TEST}`);


async function sendEmail(userName, userMail) {
  (async function () {
    const { data, error } = await resend.emails.send({
      from: `${userName} <onboarding@resend.dev>`,
      to: [`${userMail}`],
      subject: 'Hello World',
      html: '<strong>It works!</strong>',
    });

    if (error) {
      return console.error({ error });
    }

    console.log({ data });
  })();

}

export { sendEmail }