const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');




/// REST api REpresentational state Transfere 

// index

router.get('/', (req, res) => {
    postsController.index(req, res);
});



// show

router.get('/:id', (req, res) => {
    postsController.show(req, res);
});




// create

router.post("/", (req, res) => {
    postsController.create(req, res);
})


// UPDATE
router.put("/:id", (req, res) => {

    postsController.update(req, res);
})


// modify
router.patch("/:id", (req, res) => {
    postsController.modify(req, res);
})


// Destroy
router.delete("/:id", (req, res) => {
    postsController.destroy(req, res);
});


module.exports = router;
