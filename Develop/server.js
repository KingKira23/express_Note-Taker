const express = require("express");
const path = require("path");
const fs = require("fs")
   

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const noteArr = []

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.post("/api/notes", function(req, res) {
    let newNote = req.body
    noteArr.push(newNote);
    res.json(newNote);
    console.log(newNote)
    console.log(newNote.title)
    console.log(newNote.text)
});


app.delete("/api/notes/:item", function(req, res) {
    // console.log(req)
    console.log(req.body)
    console.log("got a delete request.")
})

app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "/public/notes.html"))
}) 

app.get("/api/notes", function(req, res) {
    return res.json(noteArr);
});


app.listen(PORT, function () {
    console.log("I'm alive on port " + PORT)
});