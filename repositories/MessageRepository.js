const DataCollection = require('data-collection');
const Message = require('../components/queue/message.js');
const Reservation = require('../components/queue/reservation.js');

var messages = new DataCollection();
var reservations = new DataCollection();

module.exports = class MessageRepository
{
	static reserveMessage(reserverName, type, category)
	{
		var messageQuery = messages.query();

		var reservedMessageIds = reservations.query()
			.filter({'reserver_name':reserverName})
			.values()
			.map(function(row,key){
				return row.message_id;
			});

		messageQuery = messageQuery.filter({'id__not_in':reservedMessageIds});

		if( typeof type != 'undefined' )
			messageQuery = messageQuery.filter({'type':type});

		if( typeof category != 'undefined' )
			messageQuery = messageQuery.filter({'category':category});

		var message = messageQuery.first();

		if( message == null )
			throw 'No more messages for you';

		reservations.insert(new Reservation(reserverName, message.id));

		return message;
	}

	static saveMessage(message)
	{
		if( ! message instanceof Message )
			throw 'Something went worng';

		messages.insert(message);
	}

	static removeMessage(messageID)
	{
		messages.query().filter({id: messageID}).remove();
	}
}
