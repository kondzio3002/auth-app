const express = require('express');
const router = express.Router();
const passport = require('passport');

const isLogged = (req, res, next) => {
  if (!req.user) {
    res.redirect('/user/no-permission');
  } else {
    next();
  }
};

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', {
    userName: req.user.displayName,
    avatar: req.user.photos[0].value
  });
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('profileSettings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;