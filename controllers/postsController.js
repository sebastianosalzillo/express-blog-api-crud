
const posts = require('../data/postsData');
const express = require('express');
const router = express.Router();






const index = (req, res) => {
    const queryTags = req.query.tags;
    let filteredPosts = posts;

    if (queryTags) {
        filteredPosts = posts.filter(post => post.tags.includes(queryTags));
    }

    res.json({
        conteggio: filteredPosts.length,
        posts: filteredPosts,
        images: filteredPosts.map(post => post.immagine)
    });
};






const show = (req, res) => {
    const postsId = req.params.id;
    const resultPost = posts.find(post => String(post.id) === postsId);

   

    res.json({ resultPost });

}




const create = (req, res) => {
    console.log(req.body)
    const newPost = req.body;
    const lastIndex = posts.length - 1;
    const newId = posts[lastIndex].id + 1;
    newPost.id = newId;
    posts.push(newPost);
    res.statusCode = 201;
    res.json(newPost);

};


const update = (req, res) => {
    const postsId = parseInt(req.params.id);

    const newData = req.body;


  


    newData.id = postsId;
    posts[postsId - 1] = newData;

    console.log(posts);


    res.json(newData);
};



const modify = (req, res) => {
    res.json("modifichiamo solo elementi selezionati")
};


const destroy = (req, res) => {
    const postsId = req.params.id;
    const index = posts.findIndex(post => String(post.id) === postsId);
    if (index === -1) {
        return res.status(404).json({ errore: "Post non trovato" });
    }
    posts.splice(index, 1);
    res.sendStatus(204);
    
};






module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}