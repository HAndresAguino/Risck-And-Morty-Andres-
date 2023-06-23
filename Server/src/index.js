// const http = require("http");
// const PORT = require("../../../../Modulo 3/FT-M3/02-WebServer/homework/01 - Exercises/server");
// const { getCharById } = require("./controllers/getCarById");
// const characters = require('./utils/data')

// http
//   .createServer((req, res) => {

//     const { url } = req

//     res.setHeader('Access-Control-Allow-Origin', '*');

    /*  1. _______________________________________________________________________________________
    Crea un condicional que verfique si la url incluye el string "/rickandmorty/character".
     En el caso de que si lo haga deberás obtener el id del personaje que te llega por la url.
      Luego de obtener el id, búscalo dentro del archivo data.js (deberás importar el archivo). 
      Ten en cuenta que el id de la url es un string, y los id de los personajes son números.
    
    [NOTA]: la url te llegará con la siguiente estructura. Ejemplo: /rickandmorty/character/:id.
     Piensa en una lógica que te permita obtener el id del final.
     __________________________________________________________________________________________*/
    //  if (req.url.includes("/rickandmorty/character")){
    //     let urlID = url.split("/").pop()
    // } 



    // if (req.url.includes("/rickandmorty/character")){
    //     const id = req.url.split('/').at(-1)

    //     const characterFound = characters.find ((charCB)=>{
    //       return  charCB.id === +id
    //     })  

    //     res.writeHead (200, { "Content-type": "application/json" })
    //     return res.end(JSON.stringify(characterFound))

    // } // 1.

    //! Para la homework numero 2 de promises se nos pide eliminar estas condiciones y eliminamos la importación de data.js


  //   const { getCharById } = require('./controllers/getCarById')

  //   if (req.url.includes("/rickandmorty/character")) {
  //     const id = req.url.split('/').at(-1)

  //     getCharById(res, Number(id))
  //   }

  // })
  // .listen(3001, "localhost")

  //! Para la Homework de express se nos pide eliminar todo el contenido entonces por eso todo esta comentado 


  //! Desde acá para abajo empieza express 





  const express = require('express');
  const server = express();
  const PORT = 3001;
  
  server.listen(PORT, () => {
     console.log('Server raised in port: ESTOY A FUEGO ' + PORT);
  });

const router = require ("./routes/index")

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use (express.json())
server.use("/rickandmorty", router)
