import { useState } from "react";

function SearchBar({ onSearch }) {


   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
   }



   return (
      <div>
         <input type='search' onChange={handleChange} />
         <button onClick={()=> {onSearch(id)}}>Agregar</button> 
      </div>
   );
}
export default SearchBar;

//!Si se hubiera utilizado directamente onClick={onSearch(id)}, 
//! la función onSearch se habría ejecutado inmediatamente al renderizar el componente, en lugar de esperar al evento de clic en el botón.
//!  Al envolverlo dentro de una arrow function, se retrasa la ejecución de onSearch hasta que se hace clic en el botón.

