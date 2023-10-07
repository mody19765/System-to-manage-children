## Endpoints

### `POST /AddCourse`

Add Course to Child using Child user name

### Parameters
- ##### Header Parameters
``` Json
 token: "token"
```
- ##### Body Parameters
``` Json
{
    "User_name":"ChildUserName",
    "Course_name":"course1"
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
- Child not found
``` Json
{
    "message": "Child not found"
}
```
- Course name is null
``` Json
{
    "message": "must enter Course name"
}
```
- Child name is null
``` Json
{
    "message": "must enter User name"
}
```

### Example

Request:

``` bash
curl -i -H 'Accept: application/json' -H 'token: "token"' -d 'User_name=ChildUserName&Course_name=course1' -X POST http://localhost:9000/parent/AddCourse
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