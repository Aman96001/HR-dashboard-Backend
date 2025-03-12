const express = require("express");
const { grantLeave, getLeaves } = require("../controllers/grantLeaveController");
const router = express.Router();

router.post("/addleave", grantLeave);
router.get("/leaves", getLeaves);

module.exports = router;
