## Endpoints

### `POST /chlid`

Add Child to parent list 

### Parameters
- ##### Header Parameters
``` Json
 token: "token"
```
- ##### Body Parameters
``` Json
{
    "User_name":"User@Example.com",
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
- user name already exits
``` Json
{
    "message": "user name already exits",
    "result": "User name"
}
```
-  user name is null
``` Json
{
    "message": "must enter name"
}
```
-  password is null
``` Json
{
    "message": "must enter Password"
}
```

### Example

Request:

``` bash
curl -i -H 'Accept: application/json' -H 'token: "token"' -d 'User_name=example&password=test' -X POST http://localhost:9000/parent/chlid
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