import { useState } from "react";
import validation from "../Validation";
import style from "../Form/Form.module.css"

const Form = ({login}) => {

    const [userData, setUserdata] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({}) //Con este estado encontraremos errores en el formulario




    const handleChange = (event) => {
        setUserdata({
            ...userData,
            [event.target.name]: event.target.value //Control de ingreso del usuario
        })


        setErrors(validation({ //Esta funcion ejecuta las validaciones 
            ...userData,
            [event.target.name]: event.target.value

        }))
    }


    const handleSubmit = (event) => {

        event.preventDefault()
        login(userData)

        if (userData.password != 'Contra1' || userData.email != 'Admin@gmail.com') {
           alert ('Correo o contraseña incorrecto')
        }

    }


    return (
       
        <div className={style.form}>
        <form onSubmit={handleSubmit} className = {style.form2}>
            
            <label htmlFor="email" > Email</label>
            <input type='email' placeholder="Ingresa tu email" name="email" value={userData.email} onChange={handleChange} />

            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}



            <label htmlFor="password"> Password </label>
            <input type='password' placeholder="Contraseña" name="password" value={userData.password} onChange={handleChange} />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            <h6> Admin@gmail.com | Contra1</h6>
            <br />

            <button onClick={handleSubmit} > Entrar </button>
        </form>
        </div>
        
    )
}

export default Form;