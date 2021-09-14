// const mysql = require('mysql');


// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'marketdb'
// });


// connection.connect((err)=>{
//     if(err){
//         return console.log(`MySQL Connection Failed : ${err}`);
//     }

//     console.log("MySQL Connection Success");

//     const musteriTable = "CREATE TABLE musteriler(id int PRIMARY KEY AUTO_INCREMENT, ad varchar(255), soyad varchar(255), sehir varchar(255))";
//     const sepetTable = "CREATE TABLE sepet(id int PRIMARY KEY AUTO_INCREMENT, musteriId int)";
//     const sepetUrunTable = "CREATE TABLE sepeturun(id int PRIMARY KEY AUTO_INCREMENT, sepetId int, tutar numeric(10,2), aciklama varchar(255))";

//     // connection.query(musteriTable, (err)=>{
//     //   if(err){
//     //     return console.log(`musteriTable Create Error : ${err}`);
//     //   }
//     //   console.log("musteriTable Create Success");
//     // });

//     // connection.query(sepetTable, (err)=>{
//     //   if(err){
//     //     return console.log(`sepetTable Create Error : ${err}`);
//     //   }
//     //   console.log("sepetTable Create Success");
//     // });

//     // connection.query(sepetUrunTable, (err)=>{
//     //   if(err){
//     //     return console.log(`sepetUrunTable Create Error : ${err}`);
//     //   }
//     //   console.log("sepetUrunTable Create Success");
//     // });



// });

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('marketdb', 'root', '', {
  host: 'localhost',
  dialect:'mysql'
});


sequelize.c