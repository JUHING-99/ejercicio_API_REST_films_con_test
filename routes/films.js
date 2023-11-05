const router = require('express').Router()
const fetchFilm = require('../utils/fetchFilms')

router.get('/film/:title', async(req, res, next) => {
    let film = await fetchFilm(req.params.title)
    const newObj = Object.fromEntries(
        Object.entries(film).map(([k, v]) => [k.toLowerCase(), v])
      );
    console.log(newObj);
    res.status(200).json(newObj)
})


module.exports = router

