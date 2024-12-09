const posts = require('../data/postsData');
const express = require('express');



const checkPostExsiste = (req,res, next) => {
    const postsId = req.params.id;
    const resultPost = posts.find(post => String(post.id) === postsId);

    if (resultPost !== undefined) {
        next() ;
    } else {
    return res.status(404).json({ errore: "Post non trovato" });
    }
    
}



module.exports = checkPostExsiste;