#Middleware

-> With Node.js middleware, you can run any code and modify the request and response objects. You can also call for the next middleware in the stack when the current one is completed.

-> Middleware is an abstraction layer that works as an intermediate between the software layers. Express middleware is a function that is compiled during the lifecycle of the Express server. There is always a competition between Express and Koa for better middleware.

-> Every middleware can access each HTTP request and respond to every path that it is attached to. Moreover, the middleware can end the HTTP request independently or transfer it to another middleware using the next function. It will allow you to categorize the code and generate reusable middleware, just like chaining.

-> Types of middleware

1. Application-level middleware
2. Router-level middleware
3. Build-in middleware
4. Error-handling middleware
5. Third-party middleware
