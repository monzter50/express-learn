const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];
// /admin/add-product => GET
router.get('/add-users', (req, res, next) => {  
  res.render('add-users', {docTitle: 'Add User',path:'/admin/add-users'});

});

// /admin/add-product => POST
router.post('/add-users', (req, res, next) => {
  users.push({ 
    username:req.body.name,
    lastname:req.body.lastname,
    description:req.body.description 
  });
  res.redirect('/');
});

exports.routes = router;
exports.users = users;

