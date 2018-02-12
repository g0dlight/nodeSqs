const uuidv4 = require('uuid/v4');

module.exports = class Message
{
	constructor(id, type, category, content)
	{
		this.id = id;
		this.type = type;
		this.category = category;
		this.content = content;
	}

	static buildNew(type, category, content)
	{
		return new Message(uuidv4(), type, category, content);
	}
}
