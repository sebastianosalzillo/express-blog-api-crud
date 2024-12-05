const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');


// aggiungo il bodi parser per lea richiesta create
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

app.use("/posts", postsRouter);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
