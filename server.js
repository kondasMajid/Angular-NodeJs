const express = require('express');
const path = require('path');
const app = express();

// geting our routes 
const posts = require('./server/routes/posts')

//Middleware
app.use(express.static(path.join(__dirname, 'dist/blaank-new')))
app.use('/posts', posts);

//catch all other routes and return  to index build
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/ang-node/index.html'))
})



const port = process.env.PORT || 4500;


app.listen(port, (req, res)=>{
    console.log(`server runing on ${port }`)
});