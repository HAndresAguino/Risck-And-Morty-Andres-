const validation = (userData) => {
    const errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        errors.email = 'El email ingresado no es válido';
    } else if (userData.email.length === 0) {
        errors.email = 'El email no debe estar vacío';
    } else if (userData.email.length > 35) {
        errors.email = 'No puede tener más de 35 caracteres';
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    } else if (!/\d/.test(userData.password)) {
        errors.password = 'La contraseña debe tener al menos un número';
    }




    return errors;
};

export default validation;
    






