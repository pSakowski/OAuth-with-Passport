const express = require('express');
const router = express.Router();

// Middleware to check if user is authenticated
const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/user/no-permission');
};

router.get('/logged', checkAuthenticated, (req, res) => {
  res.render('logged');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', checkAuthenticated, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', checkAuthenticated, (req, res) => {
  res.render('profileSettings');
});

module.exports = router;
