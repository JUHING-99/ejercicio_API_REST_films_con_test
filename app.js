const express = require('express')
  const app = express()
  const port = 3000

  const filmsRoutes = require("./routes/films")
  app.use(express.json()); // Habilito recepción de JSON en servidor

  app.use('/film',filmsRoutes);

  app.get('/film', function(req, res){
    res.render('film');
  });

  app.get("*",(req,res)=>{
    res.status(404).send("Gatito triste - 404 not found");
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})