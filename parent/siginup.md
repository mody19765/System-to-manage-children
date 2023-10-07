## Endpoints

### `POST /siginup`

Returns a list of all books in the library.

### Parameters
- ##### Header Parameters
``` 


```
- ##### Body Parameters
``` Json
{
    "name":"User",
    "email":"User@Example.com",
    "password":"1234"
}
```

### RESPONSES

- ### 200 - Result
``` Json
{
    "message": "success"
}
```
- ### 400 - Result
	- email already exits
``` Json
{
    "message": "email already exits ",
    "result": "mody@gmail.com"
}
```

### Example

Request:

``` bash
curl -i -d 'name=User&email=User@Example.com&password=1234' -X POST http://localhost:9000/parent/siginup
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