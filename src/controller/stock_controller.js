const db = require('../config/conexion')


//CONSULTAR INFORMACIÓN DE CATALOGO DE REFERENCIA
const getStock = async(req,res)=>{

    console.log("Correcto")

    const response = await db.request().query("Select * from stock");
    console.log(response);
 
        return res.status(200).json({
            status:true,
            response:response.recordset
        });

       



}

module.exports ={
    getStock
}