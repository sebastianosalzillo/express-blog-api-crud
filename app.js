const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');
const handleError = require('./middlewares/handleError')



// aggiungo il bodi parser per lea richiesta create
app.use(express.json());





app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

app.use("/posts", postsRouter);

app.use(express.static('public'));



// handler error 
app.use(handleError);

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
