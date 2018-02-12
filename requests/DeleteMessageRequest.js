
class DeleteMessageRequest
{
	constructor()
	{
		this.roles = {
			message_id: {
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

module.exports = new DeleteMessageRequest();
