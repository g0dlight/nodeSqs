
class ReserveMessageRequest
{
	constructor()
	{
		this.roles = {
			reserver_name: {
				type: String,
				required: true,
				min: 3
			},
			message_type: {
				type: String,
			},
			category: {
				type: String,
			}
		};
	}

	getRoles()
	{
		return this.roles;
	}
}

module.exports = new ReserveMessageRequest();
