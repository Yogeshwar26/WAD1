const express = require('express')
const router = express.Router()
const mydb = require('../Models/mydb')

router.get('/', async(req,res) => {
    const data = await mydb.find()
    res.json(data)
    
});

router.get('/:name', async(req,res) => {
    const data = await mydb.findOne({name:req.params.name})
    res.json(data)
});

router.post('/', async(req,res) => {
    const newdata = new mydb({
        name: req.body.name,
        addr: req.body.addr
    })

    const r = await newdata.save()
    res.json(r)
    
});

// PUT request to update a data
router.put('/:name', async (req, res) => {
    const updatedData = await mydb.findOneAndUpdate(
      { name: req.params.name },
      req.body,
      { new: true }
    );
    res.json(updatedData);
  });
  
  // DELETE request to delete a data
  router.delete('/:name', async (req, res) => {
    const deletedData = await mydb.findOneAndDelete({ name: req.params.name });
    res.json(deletedData);
  });

module.exports = router