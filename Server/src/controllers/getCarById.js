const axios = require("axios");
//const { response } = require("express");
// const { response } = require("express");




// const getCharById = (res, id) => {

//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then((response) => response.data) //!AXIOS nos da la respuesta en un .data
//         .then((data) => { //A data se le puede hacer destructuring de las propuedades id, gender, ect

//             let character = {
//                 id: data.id,
//                 gender: data.gender,
//                 name: data.name,
//                 species: data.species,
//                 origin: data.origin,
//                 image: data.image,
//                 status: data.status,
//             }


//             res.writeHead(200, { "content-type": "application/json" });
//             return res.end(JSON.stringify(character));

//         }
//         )

//         .catch((error) => {
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             return res.end(error.message);
//         });

// }

// module.exports = { getCharById }


//! Para la Homework de express se nos pide eliminar todo el contenido entonces por eso todo esta comentado 


//! Desde acá para abajo empieza express 

// const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById =  (req, res) => {

//     const { id } = req.params


//     axios.get(`${URL}${id}`)
//         .then((response) => response.data)
//         .then((data) => {
//            if (data.name) {

//             let characters = {

//                 id: data.id,
//                 gender: data.gender,
//                 name: data.name,
//                 species: data.species,
//                 origin: data.origin,
//                 image: data.image,
//                 status: data.status,
//             }
//             return res.status(200).json(characters)

//            } return res.status(400).json("NO HAY PERSONAJES MANIN")
//         }) .catch((error)=>{

//             res.status(500).send(error.message)
//         })

// }

// module.exports = getCharById

//! Para la Homework de ASYNC AWAIT se nos pide eliminar todo el contenido entonces por eso todo esta comentado 


const URL = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res) => {


    try {

        const { id } = req.params
        const { data } = await axios(`${URL}/${id}`)


        let characters = {

            id: data.id,
            gender: data.gender,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status,
        }
        
        return data.name 
        ? res.json(characters).status(200)
        : res.status(400).send("Not found")

    } catch (error) {
        res.status(500).send(error.message)
    }

}



module.exports = getCharById

