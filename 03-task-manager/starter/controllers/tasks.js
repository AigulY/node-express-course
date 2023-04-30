const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')
const getAllTasks = asyncWrapper( async (req, res) => {
    //try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
        //res.status(200).json({ status: 'success', data:{tasks, nbHits:tasks.length} })
        //res.status(200).json({ tasks, amount: tasks.length })
   
    //} catch (error) {
    //    res.status(500).json({ msg:error})
    //}
})

const createTask = asyncWrapper ( async(req, res) => {
    //try {
        const task = await Task.create(req.body)
        res.status(201).json({ task})
    //} catch (error) {
        //res.status(500).json({ msg:error})
    //}
})

const getTask = asyncWrapper (async (req, res, next) => {
    //try {
        const { id:taskID } = req.params
        const task = await Task.findOne({ _id:taskID });
        if(!task) {
            return next(createCustomError(`No Task with an ID: ${taskID}`, 404))
            /*const error = new Error('Not Found');
            error.status = 404;
            return  next(error)
            return res.status(404).json({ msg:`No Task with an ID: ${taskID}`})*/
        }
        res.status(200).json({ task })
    //} catch (error) {
        //res.status(500).json({ msg:error })
    //}
    
})

const deleteTask = asyncWrapper (async (req, res) => {
    //try {
        const { id:taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if(!task) {
            return next(createCustomError(`No Task with an ID: ${taskID}`, 404))
            //return res.status(404).json({ msg:`No Task with an ID: ${ taskID }`})
        }
        res.status(200).json({ task })
        //res.status(200).send()
        //res.status(200).json({ task: null, status: 'success' })
    //} catch (error) {
        //res.status(500).json({ msg:error })
    //}
    
})

const updateTask = async (req, res) => {
    try {
        const { id:taskID } = req.params;

        const task = await Task.findOneAndUpdate({ _id:taskID }, req.body, {
            new: true,
            runValidators: true,
        })

        if(!task) {
            return next(createCustomError(`No Task with an ID: ${taskID}`, 404))
            //return res.status(404).json({ msg:`No Task with an ID: ${ taskID }`})
        }

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg:error })
    }
}

/*const editTask = async (req, res) => {
    try {
        const { id:taskID } = req.params;

        const task = await Task.findOneAndUpdate({ _id:taskID }, req.body, {
            new: true,
            runValidators: true,
            overwrite: true,
        })

        if(!task) {
            return res.status(404).json({ msg:`No Task with an ID: ${ taskID }`})
        }

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg:error })
    }
}*/

module.exports = {
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask,
    //editTask,
}