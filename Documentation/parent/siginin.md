## Endpoints

### `POST /siginin`

This endpoint allows users to authenticate and log into the system

### Parameters
- ##### Header Parameters
``` 


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
- loged in
``` Json
{
    "message": "Accepted",
    "token": "token"
}
```

- ### 400 - Result
- Wrong password
``` Json
{
	message: "Wrong password"
}
```
-  email not found
``` Json
{
	message: "email not found"
}
```

### Example

Request:

``` bash
curl -i -d 'email=User@Example.com&password=1234' -X POST http://localhost:9000/parent/siginin
```

Response:

```json
{
    "message": "Accepted",
    "token": "token"
}
```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.