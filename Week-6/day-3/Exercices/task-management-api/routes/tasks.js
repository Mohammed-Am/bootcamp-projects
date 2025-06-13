

const express = require('express');
const fs = require('fs').promises; 
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

const router = express.Router();
const tasksFilePath = path.join(__dirname, '..', 'tasks.json');

const readTasksFromFile = async () => {
  try {
    const data = await fs.readFile(tasksFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
};


const writeTasksToFile = async (tasks) => {
  await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2), 'utf8');
};



router.get('/', async (req, res) => {
  try {
    const tasks = await readTasksFromFile();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error reading tasks from file.' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const tasks = await readTasksFromFile();
    const task = tasks.find(t => t.id === req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found.' });
    }

    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error reading tasks from file.' });
  }
});


router.post('/', async (req, res) => {
  // Basic validation
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Title is a required field.' });
  }

  try {
    const tasks = await readTasksFromFile();
    const newTask = {
      id: uuidv4(),
      title,
      description: description || '', 
      completed: false,
      createdAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    await writeTasksToFile(tasks);

    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating the task.' });
  }
});


router.put('/:id', async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const tasks = await readTasksFromFile();
        const taskIndex = tasks.findIndex(t => t.id === req.params.id);

        if (taskIndex === -1) {
            return res.status(404).json({ message: 'Task not found.' });
        }
        
        const originalTask = tasks[taskIndex];
        const updatedTask = {
            ...originalTask,
            title: title !== undefined ? title : originalTask.title,
            description: description !== undefined ? description : originalTask.description,
            completed: completed !== undefined ? completed : originalTask.completed,
        };

        tasks[taskIndex] = updatedTask;
        await writeTasksToFile(tasks);

        res.json(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating the task.' });
    }
});



router.delete('/:id', async (req, res) => {
  try {
    const tasks = await readTasksFromFile();
    const filteredTasks = tasks.filter(t => t.id !== req.params.id);

    if (tasks.length === filteredTasks.length) {
      return res.status(404).json({ message: 'Task not found.' });
    }

    await writeTasksToFile(filteredTasks);

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting the task.' });
  }
});

module.exports = router;
