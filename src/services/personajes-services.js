import config from "../dbconfig.js";
import sql from "mssql";

class PersonajeService
{
    getAll = async() => {
        let returnArray = null;
        console.log('Estoy en: PersonajeService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query("SELECT * from Personaje");
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    getById = async(id) => {
        let returnEntity = null;
        console.log('Me encuentro en: algo va aca ');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                        .input('pId', sql.Int, id)
                                        .query('SELECT * FROM Personaje WHERE id = @id');
            returnEntity = result.recordset[0][0];
        } catch(error){
            console.log(error);
        }
        return returnEntity;

    }
    insert = async (Personaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: PersonajeService.insert(Personaje)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImagen', sql.VarChar   , Personaje?.imagen ?? '')    
                .input('pNombre'     , sql.VarChar , Personaje?.nombre ?? '')
                .input('pEdad'    , sql.Int , Personaje?.edad ?? 0)
                .input('pPeso', sql.Float , Personaje?.peso ?? '')
                .input('pHistoria', sql.VarChar   , Personaje?.historia ?? '')
                .input('pPeliculasSeries', sql.VarChar   , Personaje?.peliculasSeries ?? '')
                .query(`INSERT INTO Personaje (Imagen, Nombre, Edad, Peso, Historia, PeliculasSeries) VALUES (@pImagen, @pNombre, @pEdad, @pPeso, @pHistoria, @pPeliculasSeries)`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }


    update = async (Personaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: PersonajeService.update(Personaje)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImagen', sql.VarChar   , Personaje?.imagen ?? '')    
                .input('pNombre'     , sql.VarChar , Personaje?.nombre ?? '')
                .input('pEdad'    , sql.Int , Personaje?.edad ?? 0)
                .input('pPeso', sql.Float , Personaje?.peso ?? '')
                .input('pHistoria', sql.VarChar   , Personaje?.historia ?? '')
                .input('pPeliculasSeries', sql.VarChar   , Personaje?.peliculasSeries ?? '')
                .query(`UPDATE Personaje SET Imagen = @pImagen, Nombre = @pNombre, Edad =@pEdad, Peso =@pPeso, Historia=@pHistoria, PeliculasSeries = @pPeliculasSeries WHERE Id=@pId`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    deleteById = async(id) => {
        let rowsAffected = 0;
        console.log
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input('pId', sql.Int, id)
                                    .query('DELETE from Personaje WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch(error){
            console.log(error);
        }
        return rowsAffected;
    }

    buscarNombre = async(nombre) => {
        let returnEntity = null;
        console.log('Me encuentro en: algo va aca ');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                        .input('pNombre', sql.VarChar, nombre)
                                        .query('SELECT * FROM Personaje WHERE nombre = @pNombre ORDER BY Edad asc, Peso asc, PeliculasSeries');
            returnEntity = result.recordset[0][0];
        } catch(error){
            console.log(error);
        }
        return returnEntity;

    }
}

export default PersonajeService;