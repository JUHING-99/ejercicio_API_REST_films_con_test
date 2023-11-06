const router = require('express').Router()
const filmsController = require('../utils/fetchfilms')

router.get("/:title?", filmsController.fetchFilm);

module.exports = router;
