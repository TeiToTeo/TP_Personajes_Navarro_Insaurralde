import config from "../../dbconfig.js";
import sql from "mssql";

class PeliculaSerieService{

    getAll = async() => {
        let returnArray = null;
        console.log('Estoy en: PeliculaSerieService.getAll()');
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

    getById = async(id) => {
        let returnEntity = null;
        console.log('Me encuentro en: PeliculaSerieService.getById() ');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                        .input('pId', sql.Int, id)
                                        .query('SELECT * FROM PeliculaSerie WHERE id = @id');
            returnEntity = result.recordset[0][0];
        } catch(error){
            console.log(error);
        }
        return returnEntity;
    }

    insert = async (PeliculaSerie) => {
        let rowsAffected = 0;
        console.log('Estoy en: PeliculaSerieService.insert(PeliculaSerie)');

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


    update = async (PeliculaSerie) => {
        let rowsAffected = 0;
        console.log('Estoy en: PeliculaSerieService.update(PeliculaSerie)');

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

    deleteById = async(id) => {
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

    buscarTitulo = async(titulo) => {
        let returnEntity = null;
        console.log('Me encuentro en: PeliculaSerieService.buscarTitulo() ');
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