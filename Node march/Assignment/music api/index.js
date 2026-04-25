const express = require('express');
const app = express();
const port = 3000;
const music = [
    {
        name: "the cranberries - zombie",
        artist: "the cranberries",
        album: "no need to argue",
        picture: "https://i.scdn.co/image/ab67616d0000b273",
        url: "https://www.youtube.com/watch?v=6Ejga4kJUts"
    },
    {
        name: "the cranberries - dreams",
        artist: "the cranberries",
        album: "everybody else is doing it, so why can't we?",
        picture: "https://i.scdn.co/image/ab67616d0000b27",
        url: "https://www.youtube.com/watch?v=9YqQXq5aVtI"
    },
    {
        name: "the cranberries - ode to my family",
        artist: "the cranberries",
        album: "no need to argue",
        picture: "https://i.scdn.co/image/ab67616d0000b273",
        url: "https://www.youtube.com/watch?v=I6iYqvXo9p0"
    },
    {
        name: "faded - alan walker",
        artist: "alan walker",
        album: "faded",
        picture: "https://i.scdn.co/image/ab67616d0000b27",
        url: "https://www.youtube.com/watch?v=60ItHLz5WEA"
    },
    {
        name: "alan walker - alone",
        artist: "alan walker",
        album: "alone", 
        url: "https://www.youtube.com/watch?v=1-xGerv5FOk"
    },
    {
        name: "alan walker - sing me to sleep",
        artist: "alan walker",
        album: "sing me to sleep",
        url: "https://www.youtube.com/watch?v=2i2khp_npdE"
    },
    {
        name: "All of me - john legend",
        artist: "john legend",
        album: "love in the future",
        url: "https://www.youtube.com/watch?v=450p7goxZqg"
    },
    {
        name: "john legend - love me now",
        artist: "john legend",
        album: "love in the future",
        url: "https://www.youtube.com/watch?v=ZsJrP5rT9YQ"
    },
    {
        name: "john legend - tonight (best you ever had)",
        artist: "john legend",
        album: "love in the future",
        url: "https://www.youtube.com/watch?v=ZsJrP5rT9YQ"
    },
    {
        name: "lovely - billie eilish",
        artist: "billie eilish",
        album: "lovely",
        url: "https://www.youtube.com/watch?v=ZsJrP5rT9YQ"
    },
    {
        name: "billie eilish - when the party's over",
        artist: "billie eilish",
        album: "when the party's over",
        url: "https://www.youtube.com/watch?v=pbMwTqkKSps"
    },
    {
        name: "beautiful things - benson",
        artist: "benson",
        album: "beautiful things",
        url: "https://www.youtube.com/watch?v=ZsJrP5rT9YQ"
    },
    {
        name: "Righteous - juice wrld",
        artist: "juice wrld",
        album: "Righteous",
        url: "https://www.youtube.com/watch?v=ZsJrP5rT9YQ"
    },
    {
        name: "juice wrld - lucid dreams",
        artist: "juice wrld",
        album: "lucid dreams",  
        url: "https://www.youtube.com/watch?v=mzB1VGEGcSU"
    },
    {
        name: "juice wrld - legends",
        artist: "juice wrld",
        album: "legends",
        url: "https://www.youtube.com/watch?v=ZsJrP5rT9YQ"
    },
    {
        name: "the weeknd - blinding lights",
        artist: "the weeknd",
        album: "after hours",
        url: "https://www.youtube.com/watch?v=ZsJrP5rT9YQ"
    },
    {
        name: "the weeknd - save your tears",
        artist: "the weeknd",
        album: "after hours",
        url: "https://www.youtube.com/watch?v=ZsJrP5rT9YQ"
    },
    {
        name: "the weeknd - starboy",
        artist: "the weeknd",
        album: "after hours",
        url: "https://www.youtube.com/watch?v=ZsJrP5rT9YQ"
    },
    {
        name: "sweet but psycho - Ava Max",
        artist: "Ava Max",
        album: "sweet but psycho",
        url: "https://www.youtube.com/watch?v=ZsJrP5rT9YQ"
    },
    {
        name: "Ava Max - kings & queens",
        artist: "Ava Max", 
        album: "kings & queens",
        url: "https://www.youtube.com/watch?v=ZsJrP5rT9YQ"
    },
    {
        name: "Ava Max - my head & my heart",
        artist: "Ava Max",  
        album: "kings & queens",
        url: "https://www.youtube.com/watch?v=ZsJrP5rT9YQ"
    },

]

app.get("/", (req, res) => {
    res.send(`HELLO, WELCOME TO FAITH TOLU MUSIC API GOTO THIs`)
})

app.get("/api", (req, res) => {
        res.send(music);
    })


app.listen(port, () => {
    console.log("Server is running on port 3000");
})