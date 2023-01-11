const express = require("express")
const bodyParser = require("body-parser")
const { readFileSync, writeFileSync, readdirSync } = require("fs")

const status404 = {
"status": false, 
"code": 404, 
"result": "result not found"
}

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//API RANDOM NSFW
app.get("/api/random/nsfw/:filename", async (req, res) => {
    const fiturName = fs.readdirSync("./database/nsfw/").map((x) => x.split(".json"))
    const filename = req.params.filename
    if (!fiturName.includes(filename)) return res.json(status404)
    const database = JSON.parse(readFileSync("./database/nsfw/" + filename + ".json"))
    const data = database[Math.floor(Math.random() * database.length)]
    res.json({
    "status": true,
    "code": 200,
    "result": data 
    })
    console.log("Success")
})


//API RANDOM KATA
app.get("/api/random/kata/:filename", async (req, res) => {
    const fiturName = fs.readdirSync("./database/kata-kata/").map((x) => x.split(".json"))
    const filename = req.params.filename
    if (!fiturName.includes(filename)) return res.json(status404)
    const database = JSON.parse(readFileSync("./database/kata-kata/" + filename + ".json"))
    const data = database[Math.floor(Math.random() * database.length)]
    res.json({
    "status": true,
    "code": 200,
    "result": data 
    })
    console.log("Success")
})


//API RANDOM STICKER
app.get("/api/random/sticker/:filename", async (req, res) => {
    const fiturName = fs.readdirSync("./database/sticker/").map((x) => x.split(".json"))
    const filename = req.params.filename
    if (!fiturName.includes(filename)) return res.json(status404)
    const database = JSON.parse(readFileSync("./database/sticker/" + filename + ".json"))
    const data = database[Math.floor(Math.random() * database.length)]
    res.json({
    "status": true,
    "code": 200,
    "result": data 
    })
    console.log("Success")
})


//API RANDOM ANIME
app.get("/api/random/anime/:filename", async (req, res) => {
    const fiturName = fs.readdirSync("./database/anime/").map((x) => x.split(".json"))
    const filename = req.params.filename
    if (!fiturName.includes(filename)) return res.json(status404)
    const database = JSON.parse(readFileSync("./database/anime/" + filename + ".json"))
    const data = database[Math.floor(Math.random() * database.length)]
    res.json({
    "status": true,
    "code": 200,
    "result": data 
    })
    console.log("Success")
})


//API RANDOM GAME
app.get("/api/random/game/:filename", async (req, res) => {
    const fiturName = fs.readdirSync("./database/game/").map((x) => x.split(".json"))
    const filename = req.params.filename
    if (!fiturName.includes(filename)) return res.json(status404)
    const database = JSON.parse(readFileSync("./database/game/" + filename + ".json"))
    const data = database[Math.floor(Math.random() * database.length)]
    if (filename == "asahotak") {
    res.json({
    "status": true,
    "code": 200,
    "result": {
        "soal": data.soal,
        "jawaban": data.jawaban
      }
    })
    } else if (filename == "caklontong") {
    res.json({
    "status": true,
    "code": 200,
    "result": {
        "soal": data.soal,
        "deskripsi": data.deskripsi, 
        "jawaban": data.jawaban
      }
    })
    } else if (filename == "siapakahaku") {
    res.json({
    "status": true,
    "code": 200,
    "result": {
        "soal": data.soal,
        "jawaban": data.jawaban
      }
    })
    } else if (filename == "susunkata") {
    res.json({
    "status": true,
    "code": 200,
    "result": {
        "soal": data.soal,
        "jawaban": data.jawaban
      }
    })
    } else if (filename == "tebakbendera") {
    res.json({
    "status": true,
    "code": 200,
    "result": {
        "soal": { "url": data.img },
        "jawaban": data.name
      }
    })
    } else if (filename == "tebakgambar") {
    res.json({
    "status": true,
    "code": 200,
    "result": {
        "soal": { "url": data.img },
        "deskripsi": data.deskripsi, 
        "jawaban": data.jawaban
      }
    })
    } else if (filename == "tebakkabupaten") {
    res.json({
    "status": true,
    "code": 200,
    "result": {
        "soal": { "url": data.url },
        "jawaban": data.title
      }
    })
    } else if (filename == "tebakkalimat") {
    res.json({
    "status": true,
    "code": 200,
    "result": {
        "soal": data.soal,
        "jawaban": data.jawaban
      }
    })
    } else if (filename == "tebakkata") {
    res.json({
    "status": true,
    "code": 200,
    "result": {
        "soal": data.soal,
        "jawaban": data.jawaban
      }
    })
    } else if (filename == "tebakkimia") {
    res.json({
    "status": true,
    "code": 200,
    "result": {
        "soal": data.unsur,
        "jawaban": data.lambang
      }
    })
    } else {
    res.json({
    "status": true,
    "code": 200,
    "result": data
    })
    }
    console.log("Success")
})






process.on("uncaughtException", function (err) {
    console.log("Caught exception: ", err)
})

app.listen(3000, "0.0.0.0", () => {
    console.log(`server running on: localhost:3000`)
})
