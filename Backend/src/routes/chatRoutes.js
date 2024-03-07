const express = require("express");
const router = express.Router();

const { saveChat, getChat} = require("../controllers/chatController");

router.post("/saveChat", saveChat);
router.get("getChat/:user_id",getChat);