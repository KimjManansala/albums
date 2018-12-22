const express = require('express');
const bodyParser = require('body-parser')


const fs = require('fs')
const db = require('./db')

const query = require('./query')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static(__dirname + '/public'))




//GET ALL SONGS IN DATABASE
app.get('/api/song', (req, res, nextFn) => {
    query.getAllSongs()
        .then((int) => {
            console.log(int)
            res.send(int)
        })
})


//GET A SONG BASED ON THE TITLE
app.get('/api/song/:title', (req, res, nextFn) => {
    let title = req.params.title
    title = title.toLowerCase()
    query.getSong(title)
        .then((elm) => {
            console.log(elm)
            res.send(elm)
        })
})



// GET ALL ALBUMS IN DATABASE
app.get('/api/album', (req, res, nextFn)=>{
    query.getAllAlbums()
        .then((itm)=>{
            res.send(itm)
        })
        .catch((er)=>{
            console.log(er)
        })
})

//GET SPECIFIC ALBUMS IN DATABASE
app.get('/api/album/:album', (req,res,nextFn) =>{
    let album = req.params.album
    album = album.toLowerCase()
    console.log(album)
    query.getAlbum(album)
        .then((elm)=>{
            res.send(elm)
        })
        .catch((elm)=>{
            res.send(elm)
        })
})

//GETS ALL ARTIST IN DATABASE
app.get('/api/artist', (req, res, nextFn)=>{
    query.getAllArtist()
        .then((itm)=>{
            res.send(itm)
        })
        .catch((er)=>{
            console.log(er)
        })
})

// GETS A SPECIFIC ARTIST
app.get('/api/artist/:artist',(req, res, nextFn)=>{
    let artist = req.params.artist
    artist = artist.toLowerCase()
    query.getArtist(artist)
        .then((itm)=>{
            res.send(itm)
        })
        .catch((er)=>{
            console.log(er)
        })
})


app.listen(3000, () => {
    console.log('server is listening...')
})