const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

// User routes
router.post('/login', (req, res) => {
  // SQL statement for logging in
})

router.get('/user/:token', (req, res) => {
  // SQL statement for getting user by token
})

router.post('/signup', (req, res) => {
  // SQL statement for signing up
})

// Event routes
router.get('/events', (req, res) => {
  // SQL statement for getting events
})

router.post('/events', (req, res) => {
  // SQL statement for adding event
})

router.delete('/events/:id', (req, res) => {
  // SQL statement for deleting event
})

router.put('/events/:id', (req, res) => {
  // SQL statement for updating event
})

router.get('/events/:id', (req, res) => {
  // SQL statement for getting event by id
})

// RSO routes
router.get('/rso', (req, res) => {
  const db = req.app.get('db')
  db.query('SELECT * FROM rso', (err, rows) => {
    if (err) throw err
    res.json(rows)
  })
})

router.get('/rso/university/:id', (req, res) => {
  const db = req.app.get('db')
  db.query(
    'SELECT * FROM rso WHERE university_id = ?',
    [req.params.id],
    (err, rows) => {
      if (err) throw err
      res.json(rows)
    }
  )
})

router.post('/rso', (req, res) => {
  const db = req.app.get('db')
  db.query('INSERT INTO rso SET ?', req.body, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

router.delete('/rso/:id', (req, res) => {
  const db = req.app.get('db')
  db.query('DELETE FROM rso WHERE id = ?', [req.params.id], (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

router.put('/rso/:id', (req, res) => {
  const db = req.app.get('db')
  db.query(
    'UPDATE rso SET ? WHERE id = ?',
    [req.body, req.params.id],
    (err, result) => {
      if (err) throw err
      res.json(result)
    }
  )
})

router.get('/rso/:id', (req, res) => {
  const db = req.app.get('db')
  db.query('SELECT * FROM rso WHERE id = ?', [req.params.id], (err, rows) => {
    if (err) throw err
    res.json(rows)
  })
})

// University routes
router.get('/university', (req, res) => {
  const db = req.app.get('db')
  db.query('SELECT * FROM university', (err, rows) => {
    if (err) throw err
    res.json(rows)
  })
})

router.post('/university', (req, res) => {
  const db = req.app.get('db')
  db.query('INSERT INTO university SET ?', req.body, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

router.delete('/university/:id', (req, res) => {
  const db = req.app.get('db')
  db.query(
    'DELETE FROM university WHERE id = ?',
    [req.params.id],
    (err, result) => {
      if (err) throw err
      res.json(result)
    }
  )
})

router.put('/university/:id', (req, res) => {
  const db = req.app.get('db')
  db.query(
    'UPDATE university SET ? WHERE id = ?',
    [req.body, req.params.id],
    (err, result) => {
      if (err) throw err
      res.json(result)
    }
  )
})

router.get('/university/:id', (req, res) => {
  const db = req.app.get('db')
  db.query(
    'SELECT * FROM university WHERE id = ?',
    [req.params.id],
    (err, rows) => {
      if (err) throw err
      res.json(rows)
    }
  )
})

// Other routes
router.post('/joinrso/:id', (req, res) => {
  // SQL statement for joining RSO
})

router.get('/rso/university/:id', (req, res) => {
  // SQL statement for getting RSO by university
})

router.put('/student/:id', (req, res) => {
  // SQL statement for updating student
})

router.get('/student/:id', (req, res) => {
  // SQL statement for getting student by id
})

router.post('/eventwithoutrso', (req, res) => {
  // SQL statement for adding event without RSO
})

router.get('/eventwithoutrso', (req, res) => {
  // SQL statement for getting event without RSO
})

router.delete('/eventwithoutrso/:id', (req, res) => {
  // SQL statement for deleting event without RSO
})

router.put('/eventwithoutrso/:id', (req, res) => {
  // SQL statement for updating event without RSO
})

router.get('/eventwithoutrso/:id', (req, res) => {
  // SQL statement for getting event without RSO by id
})

router.post('/rateevent/:id', (req, res) => {
  // SQL statement for rating event
})

router.post('/eventreview/:id', (req, res) => {
  // SQL statement for adding event review
})

router.get('/eventreview/:id', (req, res) => {
  // SQL statement for getting event review
})

router.put('/eventreview/:id', (req, res) => {
  // SQL statement for updating event review
})

router.delete('/eventreview/:id', (req, res) => {
  // SQL statement for deleting event review
})

module.exports = router

module.exports = router
