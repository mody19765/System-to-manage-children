
## Introduction

 comprehensive system designed for children. Parents will use this system to manage their children's accounts.

## Description
developing a system that caters to children's needs, such as learning children's programming. The system will have two user modes: parent mode and child mode.

**Parent Mode:**

Parents can perform the following actions:
- Register for a parent account
- Log in to their parent account
- Change their password
- Register a new child
- Remove a child using their ID
- Change a child's password
- Assign new courses to a child
- View information about their children

**Child Mode:**

Children can perform the following actions:
- Log in with the account created by their parent
- View their assigned courses
- Change their password

***Notes:***
- Parent passwords must be strong.
- You do not need to create a "courses" table and foreign keys in the child table; just include a course name.
- Usernames for children with the same parent must be unique, so children must log in with their usernames and their parent's username.
- For added security, implement password encryption using cryptographic algorithms such as bcrypt or Argon2. This will help protect user passwords and demonstrate knowledge of encryption algorithms.

This document provides an overview of the API along with essential information about its endpoints, base URL, and main operations.

## Base URL

The base URL for all API requests is:

`https://localhost`

##  Main Endpoints
|Endpoint|Description|
|-|-|
|[/parent](/Documentation/parent.md)|This endpoint is designed for parent-related operations|
|[/child](/Documentation/child.md)|This endpoint is intended for child-related operations|
