# ContactListApp
Создать React-проект:
- `npx create-react-app client --template typescript`
- `npm install`
- `npm start`
  


Создать Java-проект:
- перейти на [spring.io](https://start.spring.io)
  - Project: Maven
  - Spring Boot  2.7.15, можно более позднюю
  - Project Metadata: 
    - Group: ~~dev.shopieva~~
    - Artifact: ~~contactapp~~
    - Name: ~~contactapp~~
    - Description: ~~contact list fo react app~~
    - Package name: ~~dev.shopieva.contactapp~~
    - Packaging: Jar
    - Java: 20
  - Dependencies:
    - Spring Data JPA - _сохранение данных в SQL-хранилищах с помощью Java Persistence API с использованием Spring Data и Hibernate_
    - MySQL Driver - _драйвер JDBC для MySQL_
    - Lombok - _создание get,set-методов, конструкторов и многое другое_
    - Rest Repositories - _предоставление доступа к хранилищам данных Spring поверх REST с помощью Spring Data REST_

- Содержимое [application.properties](./backend/src/main/resources/application.properties)

Создание базы данных
- Docker: `docker run --name contact-db -p 8000:3306 -e MYSQL_ROOT_PASSWORD=12345678 -d mysql`

