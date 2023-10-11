# ContactListApp
Create React app:
- `npx create-react-app client --template typescript`
- `npm install`
- `npm start`
  


Create Java project with Spring Boot:
- go to [spring.io](https://start.spring.io)
  - Project: Maven
  - Spring Boot  2.7.15, or later
  - Project Metadata: 
    - Group: ~~dev.shopieva~~
    - Artifact: ~~contactapp~~
    - Name: ~~contactapp~~
    - Description: ~~contact list fo react app~~
    - Package name: ~~dev.shopieva.contactapp~~
    - Packaging: Jar
    - Java: 20
  - Dependencies:
    - Spring Data JPA - _saving data in SQL-stores with Java Persistence API and Spring Data, Hibernate_
    - MySQL Driver - _driver JDBC for MySQL_
    - Lombok - _creating get,set-methods, constructor etc._
    - Rest Repositories - _providing access to data store Spring over REST with Spring Data REST_

- content [application.properties](./backend/src/main/resources/application.properties)

Creating data base:
- Docker: `docker run --name contact-db -p 8000:3306 -e MYSQL_ROOT_PASSWORD=12345678 -d mysql`

