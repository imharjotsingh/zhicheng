/* Mongoose standard model 
 * Date: 7/8/20
 * Author: Jack Burns
 */

var mongoose = require('mongoose');

var StandardSchema = new mongoose.Schema({
    "Grade": {
        type: String,
    },
    "Content Area": {
        type: String,
    },
    "Subject Area": {
        type: String,
    },
    "Big Idea": {
        type: String,
    },
    "Essential Questions": {
        type: String,
    },
    "Concepts": {
        type: String,
    },
    "Competencies": {
        type: String,
    },
    "Vocab": {
        type: String,
    },
    "Standard ID": {
        type: String,
    },
    "Source": {
        type: String,
    },
});

module.exports = mongoose.model('Standard', StandardSchema);