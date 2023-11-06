const getFilm = async (title) => {
    let response = await fetch(`http://www.omdbapi.com/?apikey=f7eee519&t=${title}`);
    let data = await response.json();
   
    if(data.Response === 'True'){
       return data
    } else{
        return null
    }

    
}

const fetchFilm = async (req, res) => {
    try {
        const title = req.params.title;
        let movie = await getFilm(title); //{}
        res.status(200).json(movie); // Respuesta de la API para 1 producto
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    fetchFilm
}