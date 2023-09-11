const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");


// server used to send emails
/*const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  auth: {
    user: "shahmir.king100@gmail.com",
    pass: "998014001Sk"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "shahmir.king100@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

//app.get('/getData', (req, res) => {
//});*/


const sgMail = require('@sendgrid/mail')

sgMail.setApiKey('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');

const message = {
  to: 'pickurpage@gmail.com',
  from: 'shahmir.king100@gmail.com',

  subject: 'Hello from sendgrid',
  text: 'Hello from sendgrid',
  html: '<h1>Hello from sendgrid</h1>',
}

sgMail.send(message)
.then(response => console.log('EMail sent...'))
.catch(Error => console.log)