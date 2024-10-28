module.exports.login = (username,password)=>{
    if(!username && !password) return console.log("Credenciales erroneas, acceso denegado")
    console.log(`Bienvenido ${username}`)
}

module.exports.LIKES = 144