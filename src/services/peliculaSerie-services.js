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


    updateM = async (PeliculaSerie) => {
        let rowsAffected = 0;
        console.log('Estoy en: PeliculaSerieService.updateM(PeliculaSerie)');

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

    buscarTituloM = async(titulo) => {
        let returnEntity = null;
        console.log('Me encuentro en: PeliculaSerieService.buscarTituloM() ');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                        .input('pTitulo', sql.VarChar, titulo)
                                        .query('SELECT * FROM PeliculaSerie WHERE titulo = @pTitulo ORDER BY FechaCreacion asc');
            returnEntity = result.recordset[0][0];
        } catch(error){
            console.log(error);
        }
        return returnEntity;

    }
}
export default PeliculaSerieService;