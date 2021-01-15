var nodemailer = require("nodemailer");
var mg = require("nodemailer-mailgun-transport");
const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env;

var auth = {
  auth: {
    api_key: MAILGUN_API_KEY,
    domain: MAILGUN_DOMAIN,
  },
};

let transporter = nodemailer.createTransport(mg(auth));

const sendMail = async ({ name, email, message }) => {
  try {
    let info = await transporter.sendMail({
      from: `Portfolio <me@sandbox.mgsend.net>`,
      to: "juan.castro.arancibia@gmail.com",
      subject: "New mail from portfolio!",
      text: `New email from portfolio! 
        name: ${name}
        email: ${email},
        message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body
            style="
              font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande',
                sans-serif;
              padding: 2rem;
              background: #e8e8e8;
              font-size: 14px;
            "
          >
            <div
              style="
                margin: 20px auto;
                width: 400px;
                padding: 2rem;
                border-radius: 5px;
                box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
                background: white;
                color: black;
                ">
              <p>Nuevo mensaje desde el portfolio!</p>
              <p>Nombre:  ${name}!</p>
              <p>Email:  ${email}!</p>
              <p>
                Mensaje: ${message}
              </p>
            </div>
          </body>
        </html>`,
    });
    return [true, info];
  } catch (err) {
    return [false, err];
  }
};

module.exports = sendMail;
