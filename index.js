require("dotenv").config();
const express= require('express');

const server = express();

server.get("/api/users", (req, res) => {
    res.json({
        message: "hi"
    })
})
const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});

