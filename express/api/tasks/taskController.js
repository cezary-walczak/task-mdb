const express = require('express')
const router = express.Router()
const Task = require('./taskModel')

let taskId = 0
let name = ''

router.get('/api/tasks', (req, res, next) => {
  Task.find()
  .then(result => res.json({ message: "tasks readed", result: result }))
  .catch(error => res.json(error))
})

router.get('/api/tasks/:id', (req, res, next) => {
  Task.findById(req.params.id)
  .then(result => res.json({ message: "task readed", result: result }))
  .catch(error => res.json(error))
})

router.post('/api/tasks', (req, res, next) => {
  taskId += 1
  name = `${req.body.name} #${taskId}`
  Task.create({
    taskId,
    name
  })
  .then(result => res.json({ message: "task created", result: result }))
  .catch(error => res.json(error))
})

router.put('/api/tasks/:id', (req, res, next) => {
  Task.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
  }, {new: true})
  .then(result => res.json({ message: "task updated", result: result }))
  .catch(error => res.json(error))
})

router.delete('/api/tasks/:id', (req, res, next) => {
  Task.findByIdAndDelete(req.params.id)
  .then(result => res.json({ message: "task deleted", result: result }))
  .catch(error => res.json(error))
})

router.delete('/api/tasks', (req, res, next) => {
  Task.deleteMany({})
  .then(result => res.json({ message: "task deleted", result: result }))
  .catch(error => res.json(error))
})

module.exports = router