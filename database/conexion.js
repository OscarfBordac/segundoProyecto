// archivo config base de datos
const mysql=require('mysql')

const conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'9621',
    database:'hospital'
})

conexion.connect(function(error){
    if(error){
        console.log(`Ocurrio un error en la conexion ${error}`)
    }else{
        console.log('Conexion exitosa')
    }
})
module.exports={conexion}