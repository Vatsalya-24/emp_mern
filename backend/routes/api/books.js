const express = require('express');
const router = express.Router();
const Employee = require('../../models/Books');

// Test books route
router.get('/test', (req, res) => res.send('employee route testing!'));


// Create employee
router.post('/', async (req, res) => {
  Employee.create(req.body)
    .then((book) => res.json({ msg: 'Employee is added sucessfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to add this Employee' })
    );
});

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single book by id
router.get('/:id', (req, res) => {
  Employee.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) =>
      res.status(404).json({ nobookfound: 'No Employee found' })
    );
});

// Add save book
router.post('/', (req, res) => {
  Employee.create(req.body)
    .then((book) => res.json({ msg: 'Employee added successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to add this Employee' })
    );
});

// Update book by id
router.put('/:id', (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// Delete book by id
router.delete('/:id', (req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then((book) =>
      res.json({ mgs: 'Employee entry deleted successfully' })
    )
    .catch((err) =>
      res.status(404).json({ error: 'No such a Employee' })
    );
});

module.exports = router;