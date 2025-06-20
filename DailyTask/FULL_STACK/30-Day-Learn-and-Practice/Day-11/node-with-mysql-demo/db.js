// const mysql = require('mysql2');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Anaya@@@3063',
//     database: 'nodetestdb'
// });

// db.connect((err) => {
// if(err) throw err;
//     console.log('Mysql Connected');
// });

// module.exports = db;

const { Sequelize  } = require('sequelize');

const sequelize = new Sequelize('nodetestdb', 'root', 'Anaya@@@3063', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
.then(() => console.log('Connected to MySQL via Sequelize'))
.catch(err => console.error('Connection error:', err));

module.exports = sequelize;


