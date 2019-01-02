var mysql = require('mysql');
var db = mysql.createPool({
    connectionLimit: 10,
    host: '13.125.182.116',
    user: 'root',
    password: 'dnjstjr1234',
    database: 'academy_geonho',
    multipleStatements: true,
});
async function A (id) {
  const sql = `select lecture_item_id from lecture_items where lecture_item_id = ${id}`;

  try{
    const result = await db.query(sql);
    console.log(result.results);

  } catch(err) {
    console.log('error');
  }

  
  // const sql2 = `select * from questions where lecture_item_id = ${result[0].lecture_item_id}`

  // const result2 = await db.query(sql2);

}
A(1);