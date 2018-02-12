
class SendMessageRequest
{
	constructor()
	{
		this.roles = {
			message_type: {
				type: String,
				required: true
			},
			category: {
				type: String,
				required: true
			},
			content: {
				type: String,
				required: true
			}
		};
	}

	getRoles()
	{
		return this.roles;
	}
}

module.exports = new SendMessageRequest();
