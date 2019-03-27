const express = require('express')
const knex = require('knex');
const router = express.Router()

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

router.use(express.json())

router.post('/', async (req, res) => {
    try {
      const [id] = await db('cohorts').insert(req.body);
  
      const cohorts = await db('cohorts')
        .where({ id })
        .first();
  
      res.status(201).json(cohorts);
    } catch (error) {
      res.status(500).json(error);
    }
  });

router.get('/', async (req, res) => {
    try {
      const cohorts = await db('cohorts');
      res.status(200).json(cohorts);
    } catch (error) {
      res.status(500).json(error);
    }
  });

router.get('/:id', async (req, res) => {
    try {
      const cohorts = await db('cohorts')
        .where({ id: req.params.id })
        .first();
      res.status(200).json(cohorts);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;