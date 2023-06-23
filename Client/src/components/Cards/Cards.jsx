import Card from "../Card/Card";

// const Cards = ({characters}) => {
//    return (
//       <div>

//          {
//             characters.map ((charactersCB)=>
//             <Card

//             name = {charactersCB.name}
//             status = {charactersCB.status}
//             species = {charactersCB.species}
//             gender= {charactersCB.gender}
//             origin = {charactersCB.origin.name}
//             URL = {charactersCB.origin.url}
//             image = {charactersCB.image}
//             onClose={() => window.alert('Emulamos que se cierra la card')}
   
//             />
//             )
//          }
        
//       </div>
//    )
// }

// export default Cards;

//!     ABAJO ESTA EL CODIGO DESTRUCTURADO 



const Cards = ({characters, onClose}) => {
   return (
      <div>

         {
            characters.map (({name, status, species, gender, origin, url , image, id})=>
            <Card 

            key={id}
            id = {id}
            name = {name}
            status = {status}
            species = {species}
            gender= {gender}
            origin = {origin.name}
            URL = {origin.url}
            image = {image}
            onClose={onClose}
   
            />
            )
         }
        
      </div>
   )
}

export default Cards;

