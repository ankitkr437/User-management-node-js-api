# User-management-node-js-api
this is a user managment api build using  node js
## Main rout
https://user-registration-nodejs.herokuapp.com

### route for registering an user(post method) 
-->  https://user-registration-nodejs.herokuapp.com/api/user
\
eg:-
\
here username ,phoneNumber and password must be unique and password's length must be at least 6 
\
{
\
  "username":"ankit1234",
  "password":"123456",
  "phoneNumber":9123456789,
  "name":"Ankit kumar"
  \
}

### route for updating the credentials for  an user(put method)
-->  https://user-registration-nodejs.herokuapp.com/api/user/username

eg:-\
https://user-registration-nodejs.herokuapp.com/api/user/ankitar

here ankitar is one of the username


### route for deleting an user(delete method)--
-->  https://user-registration-nodejs.herokuapp.com/api/user/username

eg:-\
https://user-registration-nodejs.herokuapp.com/api/user/ankitar


here ankitar is one of the username


### route for getting the data of  an user(get method)--
-->  https://user-registration-nodejs.herokuapp.com/api/user/ankitar

eg:-\
https://user-registration-nodejs.herokuapp.com/api/user/ankitar

here ankitar is one of the username

