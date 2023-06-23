import { connect } from "react-redux"
import Card from "../Card/Card"

import { useDispatch } from "react-redux"
import { ordercards, filtercards } from "../../Redux/actions"

import { useState } from "react"

const Favorites = ({ myFavorites }) => {

    const  dispatch = useDispatch ();

    const handleOrder = (event) =>{

        dispatch(ordercards( event.target.value))
        setAux(!aux)

    }

    const handleFilter  = (event) => {

        dispatch(filtercards(event.target.value))

    }

    const [aux, setAux] = useState (false)

    return (
        <div >
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>

            </select>

            {
                myFavorites?.map(({ name, status, species, gender, image, id, origin, onClose }) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            specie={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                            onClose={onClose}
                        />
                    )
                })


            }

        </div>
    )
}

///Dentro de tu componente Favorites crea una función mapStateToProps. Esta función debe traer el estado global myFavorites. Conecta el componente con la función, y recibe el estado global por props.

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);