const express = require('express')
const knex = require('knex');
const router = express.Router()

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

router.use(express.json())

router.get('/', async (req, res) => {
    try {
        const cohorts = await db('cohorts'); // all the records from the table
        res.status(200).json(cohorts);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;