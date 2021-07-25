

const authController ={
    login(req,res){
        res.send( "login controller")
    },

    register(req,res){
        res.send( "Register Controller")
    }, 

    logout(req, res){
        return "Logout Controoler"
    }
}

module.exports=authController;