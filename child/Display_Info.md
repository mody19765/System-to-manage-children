## Endpoints

### `GET /Courses`

Returns a all data of logged child Courses.

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
    "message": "success",
    "result": [
        {
            "Course_name": "courseName1 "
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
curl -i -H 'Accept: application/json' -H 'token: "token"' -X GET http://localhost:9000/child/Courses
```

Response:

```json
{
    "message": "success",
    "result": [
        {
            "Course_name": "courseName"
        }
    ]
}
```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.