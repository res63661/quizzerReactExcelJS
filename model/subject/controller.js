const Controller = require('../../lib/controller');
const subjectFacade = require('./facade');

class SubjectController extends Controller {}

module.exports = new SubjectController(subjectFacade);
