async function fetchFilm(title){
    let response = await fetch(`http://www.omdbapi.com/?apikey=f7eee519&t=${title}`);
    let data = await response.json();
   
    if(data.Response === 'True'){
       return data
    } else{
        return null
    }

    
}

module.exports = fetchFilm
