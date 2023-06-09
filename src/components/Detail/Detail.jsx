import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

//! Andres revisa el codigo hasta el final

const Detail = () => {

    const { id } = useParams();
    const [Character, setCharacter] = useState ({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return  (
        <div>

            <img src={Character.image && Character.image}/>  
            <h2>{Character.name && Character.name}</h2>
            <h4>{Character.status && Character.status}</h4>
            <h4>{Character.species && Character.species}</h4>
            <h4>{Character.gender && Character.gender}</h4>
            <h4>{Character.origin?.name && Character.origin?.name}</h4>
            
            
        </div>
    )
}
export default Detail;


//! ____________ ¿Por que se renderiza condicionalmente? _______________________

/*Por ejemplo, en la línea <img src={Character.image && Character.image}/> 
se verifica si Character.image existe antes de asignarlo como valor del atributo src del elemento img. 
 Si Character.image es undefined o null, la expresión se evalúa como false y no se renderizará la etiqueta <img>. 
Esto evita errores al intentar cargar una imagen inexistente. */


//! ___________ ¿Por que se usa el ? en la condicio character.origin? ____________________________

/* es conocido como el operador de encadenamiento opcional o "optional chaining operator" en inglés.

En el caso específico de {Character.origin?.name && Character.origin?.name}, el operador ?.
 se utiliza para verificar si la propiedad origin existe en el objeto Character.
  Si la propiedad origin es undefined o null, entonces la expresión se evalúa como undefined y no se renderizará la etiqueta <h4>.

Si origin existe, entonces se intenta acceder a la propiedad name utilizando nuevamente el operador ?. 
para garantizar que también se verifica la existencia de name. Si name no está definido, 
la expresión se evalúa como undefined y nuevamente no se renderizará la etiqueta <h4>



*/