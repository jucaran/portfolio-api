const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
  res.send("testing");
});

module.exports = router;
