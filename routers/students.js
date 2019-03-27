const express = require('express')
const knex = require('knex');
const router = express.Router()

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

router.use(express.json())

router.get('/', async (req, res) => {
    try {
      const students = await db('students')
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json(error);
    }
  });

router.put('/:id', async (req, res) => {
    try {
      const count = await db('students')
        .where({ id: req.params.id })
        .update(req.body);
  
      if (count > 0) {
        const students = await db('students')
          .where({ id: req.params.id })
          .first();

        res.status(200).json(students);
      } else {
        res.status(404).json({ message: 'Records not found' });
      }
    } catch (error) {}
  });

router.delete('/:id', async (req, res) => {
    try {
      const count = await db('students')
        .where({ id: req.params.id })
        .del();
  
      if (count > 0) {
        res.status(204).json(count);
      } else {
        res.status(404).json({ message: 'Records not found' });
      }
    } catch (error) {}
  });

module.exports = router;