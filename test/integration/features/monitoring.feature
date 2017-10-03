Feature: As a Ops Engineer I want check if the API is up in Apigee

Scenario: Ping (Success)
	Given I have basic authentication credentials `monitoringClientId` and `monitoringClientSecret`
	When I GET /ping
	Then response code should be 200
	And response body should be valid according to openapi description PingResponse in file swagger.json
	And response body path $.environment should be (.+)
	And response body path $.api should be identity(.*)v1
	And response body path $.latency should be (\d+)
	And response body path $.receivedTimestamp should be (\d+)
	And response body path $.message should be pong
	
Scenario: Ping (Unauthorized)
	When I GET /ping
	Then response code should be 401
	And response body should be valid according to openapi description Error in file swagger.json
	And response body path $.code should be (.+)
	And response body path $.message should be Unauthorized 
