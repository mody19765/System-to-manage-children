## Endpoints

### `GET /chlid`

Returns a list of all data from parent list .

### Parameters
- ##### Header Parameters
``` Json
 token: "token"
```
- ##### Body Parameters
``` Json
{

}

```

### RESPONSES
  
- ### 200 - Result
- success
``` Json
{
    "message": Parent_ID,
    "result": 
    [
        {
            "User_name": "ChildUserName",
            "Course_name": "ChildCourse_name "
        },
    ]
}
```
- ### 400 - Result
- ERROR
``` Json
{
    "message": "err",
    "result": 
    [
	    
    ]
}
```

### Example

Request:

``` bash
curl -i -H 'Accept: application/json' -H 'token: "token"' -X GET http://localhost:9000/parent/chlid
```

Response:

```json
{
    "message": 1,
    "result": 
    [
        {
            "User_name": "ChildUserName",
            "Course_name": "Course_name "
        },
    ]
}
```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.