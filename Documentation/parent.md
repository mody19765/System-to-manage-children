## Description

This API is designed to facilitate various parent-related operations, providing endpoints for tasks like user signup, login, password change, managing child information, and more.

## Base URL

The base URL for all API requests is:

`http://localhost:9000/parent`

## Endpoints

|Endpoint|Method|Description|Data Type|
|-|-|-|-|
|[/siginup](parent/siginup.md)|POST|Endpoint for user registration.|Json|
|[/siginin](parent/siginin.md)|POST|Endpoint for user login.|Json|
|[/Change_Password](parent/Change_Password.md)|PUT|Endpoint for changing user password.|Json|
|[/AddCourse](parent/Add_Course_to_Child.md)|POST|Endpoint for adding a course to a child's profile|Json|
|[/chlid](parent/Display_Child_info.md)|GET|Endpoint for displaying children's information|Json|
|[/chlid](parent/Add_Child.md)|POST|Endpoint for adding a child's to parent list|Json|
|[/chlid](parent/Update_Child_info.md)|PUT|Endpoint for updating child information from parent list |Json|
|[/chlid](parent/Delete_Child.md)|DELETE|Endpoint for delete a child's from parent list|Json|

