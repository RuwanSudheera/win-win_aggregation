const express = require('express');
const router = express.Router();

router.get('/:userEmail', (req, res, next) => {
    const userMail = req.params.userEmail;
    res.status(200).json({
        message: 'This request is for get user profile',
        mail: userMail
    });
});

module.exports = router;
