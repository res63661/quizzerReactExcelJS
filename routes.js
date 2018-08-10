const Router = require('express').Router;
const router = new Router();

const subject = require('./model/subject/router');
const question = require('./model/question/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to qizzer2rest API!' });
});

router.use('/subject', subject);
router.use('/question', question);

module.exports = router;
