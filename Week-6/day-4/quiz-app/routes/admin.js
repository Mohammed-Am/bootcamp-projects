const express = require('express');
const router = express.Router();

// Admin home (manage questions)
router.get('/', (req, res) => {
  res.render('admin');
});

module.exports = router;
