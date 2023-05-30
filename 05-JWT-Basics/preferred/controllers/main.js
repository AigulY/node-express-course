const jwt = require('jsonwebtoken')

const logon = async (req, res) => {
    const { name, password } = req.body;
    const token = jwt.sign({ name }, process.env.JWT_SECRET, {expiresIn: '24h'})
    res.status(200).json({ token })
}

const dashboard = async (req, res) => {
    console.log(req.user)
    const luckyNumber = Math.floor(Math.random()*100)
    
    res.status(200).json({ 
        msg: `Hello, ${req.user.name}`, 
        secret: `Your code is ${luckyNumber}`,
    })
}

module.exports = {
    logon,
    dashboard,
}