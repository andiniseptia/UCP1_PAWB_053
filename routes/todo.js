//Menambah data 
// Import modul yang diperlukan
const express = require('express');
const router = express.Router();

const todos = [
    {
        id: 1,
        task: "Tugas CRUD",
        completed: false
    },
    {
        id: 2,
        task: "Tugas REST API",
        completed: false
    }
];

router.get('/', (req, res) => { res.json(todos); });

router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

module.exports = router;

//Delete data
router.delete('/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).json({ message: 'Tugas tidak ditemukan' });

    const deteledTodo = todos.splice(todoIndex, 1)[0]
    res.status(200).json({ message: `Tugas dengan ID ${deletedTodo.task}telah dihapus` });
});

//Update data
router.put('/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Tugas tidak ditemukan' });
    todo.task = req.body.task || todo.task;

    res.status(200).json({
        message: `Tugas dengan ID ${todo.id} telah diperbarui`,
        updateTodo: todo
    });
});

