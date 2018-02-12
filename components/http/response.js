var expressResponse;

module.exports = class Response
{
	constructor(status)
	{
		this.status = status;
	}

	static ok(data)
	{
		var response = new Response('OK');

		for (var index in data)
		{
			response[index] = data[index];
		}

		return expressResponse.status(200).send(response);
	}

	static error(error)
	{
		var response = new Response('Error');

		if( error )
			response.error = error;

		return expressResponse.status(400).send(response);
	}

	static setResponse(response)
	{
		expressResponse = response
	}
}
