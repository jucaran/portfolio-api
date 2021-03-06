const { Router } = require("express");
const sendMail = require("./mail.controller");
const router = Router();

router.get("/", (req, res, next) => {
  console.log(req.body);
  return res.send(req.body);
});
router.post("/", (req, res, next) => {
  console.log(req.body);
  return res.send(req.body);
});

router.post("/sendmail", async (req, res, next) => {
  //we try to send the email
  const [isMailSent, err] = await sendMail(req.body);
  //if everything is ok we send a 200
  if (isMailSent) return res.status(200).send("Mail sent!");
  //Sents error to endpoint
  else next(err);
});

module.exports = router;
