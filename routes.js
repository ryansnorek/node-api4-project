const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {   
            "id": 1,
            "name": "timmy",
            "username": "timmerman31",
            "password": "password1"
        },
        {   
            "id": 2,
            "name": "deuce",
            "username": "bigalow4",
            "password": "password2"
        },
        {   
            "id": 3,
            "name": "sallday",
            "username": "dayjob2",
            "password": "password3"
        }
    ])
});

module.exports = router;
