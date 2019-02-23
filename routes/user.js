const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
  const users = adminData.users
  res.render('users', {usersData: users, docTitle: 'User',path:'/'});

});

module.exports = router;