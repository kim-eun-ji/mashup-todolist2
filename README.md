# @kim-eun-ji

## /todo-list
---
`typescript` + `nodeJs` + `express` + `typeORM`

* **/todo**
    1. `get /` : todos 조회
    2. `get /:id` : todo 조회
    3. `post /` : todo 추가
    4. `put /:id` : todo done update
    5. `delete /:id` : todo 삭제

* **테이블**  
    ```sql
    CREATE TABLE `todos` (
    `id` int NOT NULL AUTO_INCREMENT,
    `text` varchar(255) NOT NULL,
    `done` tinyint NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8
    ```
    ```
    +-------+--------------+------+-----+---------+----------------+   
    | Field | Type         | Null | Key | Default | Extra          |   
    +-------+--------------+------+-----+---------+----------------+   
    | id    | int          | NO   | PRI | NULL    | auto_increment |   
    | text  | varchar(255) | NO   |     | NULL    |                |   
    | done  | tinyint      | NO   |     | 0       |                |   
    +-------+--------------+------+-----+---------+----------------+   
    ```

* **구성**   

    - 각 컨트롤러는 `BaseController`를 상속한다.   
    - crud는 `BaseController` 의 메소드를 기본적으로 사용하며 필요하다면 해당 컨트롤러에 오버라이딩해서 쓴다   
    - 반드시 `BaseController` - `ResponseController` 내부 메소드를 사용하여 클라이언트 요청에 응답한다.





<!-- * 기록요ㅗㅇ
    ```bash
    npm i -D express typescript ts-node nodemon typeorm @types/node @types/express mysql
    npm init
    tsc --init

    npm install --save dotenv

    npm install --save express-validator

    ``` -->
