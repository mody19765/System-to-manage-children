## Endpoints

### `PUT /Change_Password`

Change User Password.

### Parameters
- ##### Header Parameters
``` Json
 token: "token"
```
- ##### Body Parameters
``` Json
{
    "password":"1234",
    "newpassword":"4321",
}
```

### RESPONSES
  
- ### 200 - Result
- Change Password succeeded
``` Json
{
    "message": "success Update"
}
```
- New password is null
``` Json
{
    "message": "new password is null"
}
```
- password is null
``` Json
{
   "message": "password is null"
}
```
- ### 400 - Result
- Wrong Password
``` Json
{
   "message": "Wrong Password"
}
```
- User not found
``` Json
{
   "message": "User not found"
}
```

### Example

Request:

``` bash
curl -i -H 'Accept: application/json' -H 'token: "token"' -d 'password=1234&newpassword=4321' -X PUT http://localhost:9000/parent/Change_Password
```

Response:

```json
{
    "message": "success Update"
}
```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.