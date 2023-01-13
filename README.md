# Trippy

req.headers.userid will give access to the userid of the currently logged in user within all API routes
  eventually, if a user is not logged in, the API routes will not be hit and everyone will be redirected to the login page

will need to copy .env.local.example into a file named .env.local on the root directory and you can access those variables through process.env.VAR_NAME

created dev branch