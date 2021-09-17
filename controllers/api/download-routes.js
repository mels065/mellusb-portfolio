const downloadRouter = require('express').Router();
const path = require('path');

downloadRouter.get('/resume', (req, res) => {
    res.download(path.join(__dirname, '../../uploads/BrandonMellusCodingResume.pdf'));
});

module.exports = downloadRouter;
