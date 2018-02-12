const Response = require('../components/http/response.js');
const ReserveMessageRequest = require('../requests/ReserveMessageRequest.js');
const SendMessageRequest = require('../requests/SendMessageRequest.js');
const DeleteMessageRequest = require('../requests/DeleteMessageRequest.js');
const Message = require('../components/queue/message.js');
const MessageRepository = require('../repositories/MessageRepository.js');

module.exports = class QueueController
{
	static reserveMessage(req, res)
	{
		req.validate(req.query, ReserveMessageRequest.getRoles());

		if( req.validateError )
			return Response.error(req.validateError);

		try{
			var message = MessageRepository.reserveMessage(req.query.reserver_name, req.query.message_type, req.query.category);
		}
		catch(error){
			return Response.error(error);
		}

		return Response.ok({
			'message': message
		});
	}

	static sendMessage(req, res)
	{
		req.validate(req.body, SendMessageRequest.getRoles());

		if( req.validateError )
			return Response.error(req.validateError);

		var message = Message.buildNew(req.body.message_type, req.body.category, req.body.content);

		MessageRepository.saveMessage(message);

		return Response.ok({
			'message': message
		});
	}

	static deleteMessage(req, res)
	{
		req.validate(req.body, DeleteMessageRequest.getRoles());

		if( req.validateError )
			return Response.error(req.validateError);

		MessageRepository.removeMessage(req.body.message_id);

		return Response.ok();
	}
}
