const express = require('express');
const bcrypt = require('bcrypt');

var cors = require('cors');
const jwt = require('jsonwebtoken')
var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')
var adapter = new FileSync('./database.json')
var db = low(adapter);

var config = require('../config.env');

const app = express();

const jwtSecretKey = config.jwt_secret;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_req, res) => {
  res.send('Auth API.\nPlease use POST /auth & POST /verify for authentication')
})

// AUTHORIZE REQUEST
app.post('/auth', (req, res) => {
  const { firstName, lastName, email, password } = req.body

  // Look up the user entry in the database
  const user = db
    .get('users')
    .value()
    .filter((user) => email === user.email)

  // If found, compare the hashed passwords and generate the JWT token for the user
  if (user.length === 1) {
    bcrypt.compare(password, user[0].password, function (_err, result) {
      if (!result) {
        return res.status(401).json({ message: 'Invalid password' })
      } else {
        let loginData = {
          email,
          firstName: user[0].firstName,
          signInTime: Date.now(),
        }

        const token = jwt.sign(loginData, jwtSecretKey)
        res.status(200).json({ message: 'success', name: user[0].firstName, token })
      }
    })
    // If no user is found, hash the given password and create a new entry in the auth db with the email and hashed password
  } else if (user.length === 0) {
    bcrypt.hash(password, 10, function (_err, hash) {
      db.get('users').push({ firstName: firstName, lastName: lastName, email: email, password: hash }).write()

      let loginData = {
        email,
        signInTime: Date.now(),
      }

      const token = jwt.sign(loginData, jwtSecretKey)
      res.status(200).json({ message: 'success', name: firstName, token })
    })
  }
})

// VERIFY REQUEST
app.post('/verify', (req, res) => {
  const tokenHeaderKey = 'jwt-token'
  const authToken = req.headers[tokenHeaderKey]
  try {
    const verified = jwt.verify(authToken, jwtSecretKey)
    if (verified) {
      return res.status(200).json({ status: 'logged in', message: 'success' })
    } else {
      // Access Denied
      return res.status(401).json({ status: 'invalid auth', message: 'error' })
    }
  } catch (error) {
    // Access Denied
    return res.status(401).json({ status: 'invalid auth', message: 'error' })
  }
})

// An endpoint to see if there's an existing account for a given email address
app.post('/check-account', (req, res) => {
  const { email } = req.body

  console.log(req.body)

  const user = db
    .get('users')
    .value()
    .filter((user) => email === user.email)

  console.log(user)

  res.status(200).json({
    status: user.length === 1 ? 'User exists' : 'User does not exist',
    userExists: user.length === 1,
  })
})

app.listen(3080)