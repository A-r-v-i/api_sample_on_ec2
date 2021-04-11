const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.get("/", controller.getIndex);
router.get("/posts", controller.getPosts);
router.get("/posts/:id", controller.getPostById);
router.get("*", controller.invalidRequest);

module.exports = router;
