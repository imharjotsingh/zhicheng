/* MCG browser.
 * 7/8/20
 */

const browser = require('express').Router();
const Standard = require('../models/StandardModel');

browser.get('/browser', async (req, res) => {
    var standards = [];

    standards = await Standard.find({});

    if (!standards) {
        return res.status(400).json('Could not get Standards');
    }
    else {
        return res.status(200).json(standards);
    }
});

module.exports = browser;