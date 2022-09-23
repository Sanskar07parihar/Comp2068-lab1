// import express
const express = require('express')

// create new instance of an express application object
// 'new' keyword not used in js
const app = express()

// event handler for http requests
let mom = (req, res) => {
    res.writeHead(200)
    res.write('My mom is a housewife. She makes very tasty food specially daal baati which is famous meal in India. She is very punctual.')
    res.end()
}


let dad = (req, res) => {
    res.writeHead(200)
    res.write('My dad is a hero for me. He is my inspiration> I always try gain knowledge when I was with him. He is a philanthropist.')
    res.end()
}

// handler for root (home) page
let me = (req, res) => {
    // if url is not the root, show 404
    if (req.url = '/me') {
        res.writeHead(200)
        res.write('My name is Sanskar Parihar. I am persuing computer programming. I want to become a good programmer. Also I was a powerlifter and I like to do workout regularly.')
        res.end()
    }
    else {
        res.writeHead(404)
        res.write('Error')
        res.end()
    }    
}


// map urls to proper methods.  index is last or it overrides everything else
app.use('/mom', mom)
app.use('/dad', dad)
app.use('/me', me)

// start express server on port 3000
app.listen(3000)
console.log('Express running on port 3000')