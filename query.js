const db = require('./db')


// All my query functions
const dataBaseFunctions = {
    'getAllSongs': getAllSongs,
    'getSong': getSpecificSong,
    'getAllAlbums': getAllAlbums,
    'getAlbum': getAlbum,
    'getAllArtist': getAllArtist,
    'getArtist' : getArtist
}
module.exports = dataBaseFunctions





function getAllSongs() {
    return new Promise((resolve, reject) => {
        db.any(`SELECT * FROM song WHERE id >0`)
            .then((res) => {
                resolve(res)
            })
            .catch((er) => {
                reject(er)
            })
    })
}

function getSpecificSong(title) {
    return new Promise((resolve, reject) => {
        db.any(`SELECT * FROM song WHERE name = '${title}'`)
            .then((res) => {

                resolve(res)
            })
            .catch((er) => {
                reject(er)
            })
    })
}


function getAllAlbums() {
    return new Promise((resolve, reject) => {
        db.any('SELECT * FROM albums WHERE id > 0')
            .then((res) => {
                resolve(res)
            })
            .catch((er) => {
                reject(er)
            })
    })
}


function getAlbum(album) {
    return new Promise((resolve, reject) => {
        db.any(`SELECT * FROM albums WHERE name = '${album}'`)
            .then((res) => {
                resolve(res)
            })
            .catch((er) => {
                reject(er)
            })
    })
}


function getAllArtist() {
    return new Promise((resolve, reject) => {
        db.any(`SELECT * FROM artist WHERE id > 0`)
            .then((res) => {
                resolve(res)
            })
            .catch((er) => {
                reject(er)
            })
    })
}

function getArtist(artist) {
    return new Promise((resolve, reject) => {
        db.any(`SELECT * FROM artist WHERE name = '${artist}'`)
            .then((res) => {
                resolve(res)
            })
            .catch((er) => {
                reject(er)
            })
    })
}