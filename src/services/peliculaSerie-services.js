import config from "../../dbconfig.js";
import sql from "mssql";

class PeliculaSerieService{

    getAllM = async() => {
        let returnArray = null;
        console.log('Estoy en: PeliculaSerieService.getAllM()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query("SELECT * from PeliculaSerie");
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    getByIdM = async(id) => {
        let returnEntity = null;
        console.log('Me encuentro en: PeliculaSerieService.getByIdM() ');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                        .input('pId', sql.Int, id)
                                        .query('SELECT * FROM PeliculaSerie WHERE Id = @pId');
            returnEntity = result;
        } catch(error){
            console.log(error);
        }
        return returnEntity;
    }

    insertM = async (PeliculaSerie) => {
        let rowsAffected = 0;
        console.log('Estoy en: PeliculaSerieService.insertM(PeliculaSerie)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImagen', sql.VarChar   , PeliculaSerie?.imagen ?? '')    
                .input('pTitulo'     , sql.VarChar , PeliculaSerie?.titulo ?? '')
                .input('pFechaCreacion'    , sql.Date , PeliculaSerie?.fechaCreacion ?? '')
                .input('pCalificacion', sql.Float , PeliculaSerie?.calificacion ?? '')
                .input('pPersonajesA', sql.VarChar   , PeliculaSerie?.PersonajesA ?? '')
                .query(`INSERT INTO PeliculaSerie (Imagen, Titulo, FechaCreacion, Calificacion, PersonajesA) VALUES (@pImagen, @pTitulo, @pFechaCreacion, @pCalificacion, @pPersonajesA)`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }


    updateM = async (PeliculaSerie,Id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PeliculaSerieService.updateM(PeliculaSerie)');
        console.log(PeliculaSerie);
        
        try {
            let fechaCreacion = PeliculaSerie.fechaCreacion 
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId',sql.Int,Id)
                .input('pImagen', sql.VarChar   , PeliculaSerie?.imagen ?? '')    
                .input('pTitulo'     , sql.VarChar , PeliculaSerie?.titulo ?? '')
                // .input('pFechaCreacion'    , sql.Date , PeliculaSerie?.fechaCreacion ?? 0)
                .input('pCalificacion', sql.Float , PeliculaSerie?.calificacion ?? 0)
                .input('pPersonajesA', sql.VarChar   , PeliculaSerie?.PersonajesA ?? '')
                .query(`UPDATE  PeliculaSerie SET Imagen=@pImagen, Titulo=@pTitulo, FechaCreacion={fechaCreacion}, Calificacion=@pCalificacion, PersonajesA=@pPersonajesA WHERE Id=@pId`);
        rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    deleteByIdM = async(id) => {
        let rowsAffected = 0;
        console.log
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                    .input('pId', sql.Int, id)
                                    .query('DELETE from PeliculaSerie WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch(error){
            console.log(error);
        }
        return rowsAffected;
    }

    buscarTituloM = async(Titulo) => {
        let returnEntity = null;
        console.log('Me encuentro en: PeliculaSerieService.buscarTituloM()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                        .input('pTitulo', sql.VarChar, Titulo)
                                        .query('SELECT * FROM PeliculaSerie WHERE Titulo = @pTitulo ORDER BY FechaCreacion asc');
            returnEntity = result.recordsets[0][0];
        } catch(error){
            console.log(error);
        }
        return returnEntity;

    }
}
export default PeliculaSerieService;