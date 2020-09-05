# Assignment #1: gRPC and REST API Implementation

## Members
1. Naravich Chutisilp		    6030319921
2. Navabhorn Pandee 		    6030324021
3. Pornapat Sudjaipraparat 	6030394921
4. Ravipas Aphikulvanich	  6031050121

## 1. Screenshots of Swagger for your APIs in 2.
![all](images/all.png)
![get](images/get.png)
![post](images/post.png)
![getall](images/getall.png)
![delete](images/delete.png)

## 2. Source codes of 2 and 3. 
[gRPC](/grpc)

[REST API](/restAPI)

## 3. Compare how to call the methods based on gRPC and REST API side-by-side, e.g. in a Table format as shown below.

| Functions  | gPRC | REST API | 
| ------------- | ------------- | ------------- | 
| List books  | ```client.list({}, function(error, books) {printResponse(error, books);});``` | ```axios.get(url + "/book");``` | 
| Insert books  | ```client.insert(book, function(error, empty) {printResponse(error, empty);});```  | ```axios.post(url + `/book`, {id, title, author,});```  |
| Get books | ```client.get({ id: parseInt(id) }, function(error, book) {printResponse(error, book);});```|  ```axios.get(url + `/book/${id}`);```| 
| Delete books  | ```client.delete({ id: parseInt(id) }, function(error, empty) {printResponse(error, empty);});``` |  ```axios.delete(url + `/book/${id}`);``` | 
| Stream added books  | ```client.watch({});``` |  ```-``` |

## 4. What are the main differences between REST API and gRPC? 
REST API directly calls HTTP methods (GET, POST, PUT, PATCH, DELETE) while gRPC uses HTTP/2. In HTTP, the addressable entities are data entities (resources) however they are procedures due to gRPC is based on the Remote Procedure Call (RPC) model. Since gRPC makes better use of HTTP/2 then REST API, gRPC can support high performance and scalability.

## 5. What is the benefits of introduceinterface in front of the gRPC and REST API of the book services. 
- The interface helps to define APIs easily.
- Users clearly understand the interface's expected type of input and output.
- The details of the implemented function of the interface are hidden from the users.
- Easy to manage the changes and keep compatibility


## 6. Based on the introduced interface, compare how to call the methods based on gRPC and REST API side-by-side, e.g. in a Table format as shown below. 

| Functions  | gPRC | REST API |
| ------------- | ------------- | ------------- |
| List books  | ```node interface.js grpc list```  | ```node interface.js restapi list```  |
| Insert books  | ```node interface.js grpc insert <id> <title> <author>```  | ```node interface.js restapi insert <id> <title> <author>```  |
| Get books | ```node interface.js grpc get <id>```  | ```node interface.js restapi get <id>```  |
| Delete books  | ```node interface.js grpc delete <id>```  | ```node interface.js restapi delete <id>```  |
| Stream added books  | ```node interface.js grpc watch```  | ```-```  |

## 7. Draw a component diagram representing the book services with and without interfaces. 

