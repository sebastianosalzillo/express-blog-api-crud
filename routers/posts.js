const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const checkPostExsiste = require('../middlewares/postExsiste');

// router.use(checkPostExsiste);

/// REST api REpresentational state Transfere 

// index

router.get('/', (req, res) => { 
    
    postsController.index(req, res);
});



// show

router.get('/:id', checkPostExsiste, (req, res) => {
    
    postsController.show(req, res);
});




// Store => create

router.post("/", (req, res) => {
    
    postsController.create(req, res);
})


// UPDATE
router.put("/:id",checkPostExsiste, (req, res) => {
    
    postsController.update(req, res);
})


// modify
router.patch("/:id",checkPostExsiste, (req, res) => {
    
    postsController.modify(req, res);
})


// Destroy
router.delete("/:id",checkPostExsiste, (req, res) => {
    
    postsController.destroy(req, res);
});


module.exports = router;
