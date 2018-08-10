const Facade = require('../../lib/facade');
const subjectSchema = require('./schema');

class SubjectFacade extends Facade {}

module.exports = new SubjectFacade(subjectSchema);
