# hotel-manager-API
Repository of the back-end of hotel-manager by the dreamTeam

# to start
 - clone this repository
 - run `npm install` to install all the dependencies
 - create **.env** file in the project directory (besides entry file `index.js`), with
 ```
DB_NAME=[database_name]
DB_HOST=[database_host]
DB_USER=[database_user]
DB_PASS=[database_password]
DB_PORT=[database_port]
expressPORT=[application_port]
 ```
  - start the server with `node index.js` and check `localhost:[expressPORT]`/hotels, you should see the list of all hotels