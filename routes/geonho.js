var express = require('express');
var router = express.Router();
const db = require('../module/db');
const wrapper = require('../module/asyncWrapper');

router.get('/:id', wrapper.asyncWrapper( async function(req, res) {
  const id = req.params.id;
  console.log(id);

  const sql = `select * from lecture_items where lecture_item_id = ${id}`;
  const result = await db.getQueryResult(sql);
  
  console.log(result);

  res.json(result);
}));
module.exports = router;
