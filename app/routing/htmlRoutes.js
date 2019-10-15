// Pull in required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {
    // console.logl('__ENTER htmlRoutes.js__');

    // Home page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // Survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};