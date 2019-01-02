var express = require('express');
var router = express.Router();
/* GET home page. */
var mysql = require('mysql');
var db = mysql.createConnection({
    connectionLimit: 10,
    host: '13.125.182.116',
    user: 'test1',
    password: 'test',
    database: 'test1234',
    multipleStatements: true,
});
db.connect();
router.get('/' , function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', function(req,res) {

  const id = req.params.id;

  // const sql = `select lecture_item_id from lecture_items where lecture_item_id = ${id}`;
  db.query(sql ,function(error, result){

      if( error ) {
        res.json({ success: false});
      } else {
        console.log(' success ' );
        console.log(result[0].lecture_item_id);
        
        // const sql2 = `select * from questions where lecture_item_id = ${result[0].lecture_item_id}`
        db.query(sql2, function(error, result){
          if ( error ) {
            console.log(error);
          } else {
            console.log(' success 2 ');
            console.log(result);
            res.json(result);
          }
        })
      }
  })

});
router.post('/:id', function(req,res) {
  const item_type = req.params.id;
  const { p1,p2,p3} = req.body;
  console.log(`${p1} , ${p2},  ${p3}`);

  // const sql = `insert into geonhos (item_type, p1,p2,p3 ) values (${item_type}, ${p1},${p2},${p3})`
  db.query(sql, function(error,rows, fields){
    if (error ) {
      console.log(error);
    } else {
      console.log('insertion success');
      console.log(rows);
    }
  })
  res.json({ success : true });
})

router.put('/:id', function(req, res) {

  const id = req.params.id;
  const { p1, p2 , p3 } = req.body;
  // const sql = `update geonhos set p1 = ${p1} where pk_id = ${id}`;
  db.query(sql, function(error, rows) {
    if ( error ) {
      console.log(error);
    } else {
      console.log('update success');
      res.json({ success : true });
    }
  })
});

router.delete('/:id', function(req,res){

  const id = req.params.id;
  // const sql = `delete * from geonhos where pk_id = ${id}`;
  db.query(sql, function(error, rows){
    if ( error ) {
      console.log(error);
    } else {
      console.log('delete success');
      res.json({success : true});
    }
  })

module.exports = router;
