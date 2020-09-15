const express = require('express');
const router = express.Router();

const chatController = require('../controllers/chat.controller');

router.post('/create', chatController.chat_create);
router.get('/findAll', chatController.chat_all);
router.delete('/:id/delete', chatController.chat_delete);
router.get('/', chatController.chat_bot);
router.get('/:id', chatController.chat_details);

module.exports = router;