const express = require('express');

const router = express.Router();

const data = require("./data")

router.get("/users", (req, res) => res.json(data.users));

router.post("/register", (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) res.status(400).json({ message: "username and password required" })
    else {
        const newUserID = ++data.users.length;
        data.users = [ ...data.users, { "id": newUserID, ...req.body } ];
        res.json(data.users);
    }
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    data.users.forEach(user => {
        if (user.username === username && user.password === password) {
            res.json({ message: `Velcome, ${username}` });
        } else res.json({ message: "user doesn't exist" });
    })
});

module.exports = router;
