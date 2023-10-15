const Users = require('../model/userModel')


const register = async (req, res) => {

    const user = new Users(req.body)
    user.save()
    res.status(200).send({ success: true })


}


const userLogin = async (req, res) => {
    try {
        const data = req.body.data
        const email = data.email
        const password = data.password

        const userExit = await Users.findOne({ email: email })

        if (userExit) {
            if (userExit.password == password) {
                res.status(200).send({ message: "Login successfull.." })
            } else {
                res.status(400).send({ message: 'Incorrect password !!' })
            }

        } else {
            res.status(401).send({ message: "User Not Found.Please register !" })
        }

    } catch (error) {
        console.log(error.message);
        res.status(502).send({ message: "server error" })
    }
}




module.exports = {
    register,
    userLogin
}