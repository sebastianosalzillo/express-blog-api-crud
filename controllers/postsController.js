
const posts = require('../data/postsData');
const express = require('express');
const router = express.Router();






const index = (req, res) => {
    const queryString = req.query;
    if (queryString.tags !== undefined) {
     const filteredPosts = posts.filter(post => post.tags.includes(queryString.tags));
     res.json(filteredPosts);
     } else {

    res.json({
        conteggio: posts.length,
        posts: posts,
        images: posts.map(post => post.immagine)
    });
}
};


const show = (req, res) => {
    const postsId = req.params.id;
    const resultPost = posts.find(post => String(post.id) === postsId);

    if (!resultPost) {
        return res.status(404).json({ errore: "Post non trovato" });
    }

    res.json({ resultPost });

}




const create = (req, res) => { 
    res.json("creaiamo un nuovo post")
};

const update = (req, res) => {
    res.json("aggiunge i dati di uno specifico elemento")
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
    // res.json({ messaggio: "Post eliminato con successo" });
};






module.exports = {
index,
show,
create,
update,
modify,
destroy
}