var express = require('express');
var router = express.Router();

var Response = require('../components/http/response.js');
var QueueController = require('../controllers/queueController.js');

router.use(function (req, res, next) {
	Response.setResponse(res);
	next();
});

router.get('/', QueueController.reserveMessage);
router.post('/', QueueController.sendMessage);
router.delete('/', QueueController.deleteMessage);

module.exports = router;
