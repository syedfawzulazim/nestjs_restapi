It's a NestJs RestAPI project

 #### Ingredients

* NestJs (NodeJs framework on top of Express)
* Typescript
* JWT Authentication
* MongoDB & Mongoose


## Installation
 
1. Clone the repo
   ```bash
   $ https://github.com/syedfawzulazim/nestjs_restapi.git
   ```

2. Run with Docker Container
   
   ```bash
   $ cd [./directory/]
   ```

   ```bash
   $ docker build -t [image-name] .
   $ docker run -p 5000:5000 [image-name/image-id]
   ```

##  API Endpoints:
 
  BaseURL: http://localhost:5000
  
 | request | resource      | description                       |
|:--------------|:--------------|:----------------------------------|
|GET| `/api/v1/books`      | returns a list of all the books|
|POST|  `/api/v1/books`    | inserts a new book and returns success/error message |
|POST| `/auth/signup` | returns jwt access token if signup is successful |
|POST| `/auth/signin`      | returns jwt access token if signin is successful |
|GET| `/user/orders`  | returns a list of all ordered books by user |
|POST| `/user/purchase` | creates new order and returns newly created order |
|DELETE| `/user/delete-order` | deletes all order of a user|
|PATCH| `/user/orders/update/:orderId` | updates order by order Id |


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
