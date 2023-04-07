const consoleLog = (req, res, next) => {
    console.log('consoleLog is running')
    next()
}

module.exports = consoleLog;

