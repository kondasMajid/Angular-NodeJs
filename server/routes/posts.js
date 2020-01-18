const express = require('express');
const router = express('router');

const axios = require('axios');

const postApi = 'https://jsonplaceholder.typicode.com'

// Get Post
router.get('/', (req, res)=>{
    // res.send('POST works');
    axios.get(`${postApi}/posts`).then(posts =>{
        // console.log(posts.data)
        res.status(200).json(posts.data);
    }).catch(error =>{
        res.status(500).send(error)
    })
});


module.exports = router; 