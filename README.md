# WisdomShop
option --request method allowed querying
json - parser

# params

# user regerist
createUser()
post a user to database and create userid by mogonse in mongoDB

# user login
get user info ==>user.checkexsit ()

# user authentication
1.cookie  a string
3.session  store the session info in server side, and send session id by cookie
3.jwt jave web token  
head, payload ,signature  ---- encryption(DES hash)  ===> string(base64)  

# user restful api design
response body 
error message 

# status code  
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
100 Continue 101 Switching Protocols
200 OK 201 Created 202 Accepted
300 Multiple Choices 301 Moved Permanently 302 Found 303 See Other 
304 Not Modified 307 Temporary Redirect 308 Permanent Redirect
400 Bad Request 401 Unauthorized 403 Forbidden 404 Not Found
405 Method Not Allowed 406 Not Acceptable 407 Proxy Authentication Required  
408 Request Timeout 409 Conflict 410 Gone 422 Unprocessable Entity
500 internal error 501 Not Implemented 502 Bad Gateway 503 Service Unavailable

# mongo DB dataScheam design
Schema--- Model --Document
