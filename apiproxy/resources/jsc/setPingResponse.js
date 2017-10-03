var pingResponse = {
	environment: context.getVariable("environment.name"),
	api: context.getVariable("apiproxy.name"),
	latency: ((new Date()).getTime() - context.getVariable("client.received.end.timestamp")),
	receivedTimestamp: context.getVariable("client.received.end.timestamp"),
	message: "pong"
};

context.setVariable("response.header.Content-Type", "application/json");
context.setVariable("response.content", JSON.stringify(pingResponse));