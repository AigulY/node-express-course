//check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentification so only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken')
const { BadRequestError } = require ('../errors')


const login = async (req, res) => {
    const { username, password } = req.body
    // mongoose validation
    // Joi
    //check in the controller

    if(!username || !password) {
        throw new BadRequestError('Please provide email and passowrd')
    }
    const id = new Date().getDate();
    //console.log(username, password)
    // just for demo, normally provided by DB
    
    // try to keep payload small, better experience for user
    // just for demo; in production use long, complex and unguessable string value
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {expiresIn: '30d'})
    res.status(200).json({ msg: 'user created', token})
    //res.send('Fake login/Registrer/Signup Route')
}

const dashboard = async (req, res)=> {
    console.log(req.user)
    //console.log(token);   
    const luckyNumber = Math.floor(Math.random()*100)
        res
            .status(200)
            .json ({ 
                msg:`Hello, ${req.user.username}`, 
                secret: `Here is your authorized data, your lucky number is ${luckyNumber}` 
            })
}

module.exports = {
    login,
    dashboard,
}