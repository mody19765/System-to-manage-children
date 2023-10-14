## Endpoints

### `GET /Endpoint`

Returns a list of all data in the Endpoint.

### Parameters
- ##### Header Parameters
``` Json
 token: "token"
```
- ##### Body Parameters
``` Json
{
    "email":"User@Example.com",
    "password":"1234"
}

```

### RESPONSES
  
- ### 200 - Result
- success
``` Json
{
    "message": "success"
}
```
- ### 400 - Result
- ERROR
``` Json
{
    "message": "ERROR"
}
```

### Example

Request:

``` bash
curl -i -H 'Accept: application/json' -H 'token: "token"' -d 'email=example&password=test' -X POST http://localhost:9000/
```

Response:

```json
{
    "message": "success"
}
```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.