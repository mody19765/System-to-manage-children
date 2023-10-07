## Endpoints

### `PUT /chlid`

Update Child data from parent list 

### Parameters
- ##### Header Parameters
``` Json
 token: "token"
```
- ##### Body Parameters
- Change User Name only
``` Json
{
    "User_name":"User123",
    "New_User_name":"User1",
}

```
- Change Password only
``` Json
{
    "User_name":"User123",
    "newpassword":"1234"
}

```
- Change User Name and Password
``` Json
{
    "User_name":"User123",
    "New_User_name":"User1",
    "newpassword":"1234"
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
    "message": "Updata not working"
}
```

### Example

Request:

``` bash
curl -i -H 'Accept: application/json' -H 'token: "token"' -d 'User_name=example&newpassword=test' -X PUT http://localhost:9000/parent/chlid
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