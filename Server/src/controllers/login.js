const users = require ("../utils/users")

const login = (req,res) => {

    const {email, password} = req.query

    const usuarioFiltered = users.find((cbUsuruisfiltered)=> {
        return cbUsuruisfiltered.email === email && cbUsuruisfiltered.password === password
    });
    
    if (usuarioFiltered){

        res.status(200).json({
            access: true,
        })

    } else {
        res.status(400).json({
            access: false,
        })
    }
}

module.exports = login

