const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'response from GET "/films" endpoint',
        }
    })
})


module.exports = router