import config from './dbconfig.js';
import  sql from 'mssql';
import PersonajeService from './src/services/personajes-services.js'
import Personaje from './src/models/personajes.js';
import PeliculaSerieService from './src/services/peliculaSerie-services.js'
import PeliculaSerie from './src/models/peliculaSerie.js';
import express  from 'express';

	
var app = express();	


app.get('/', function(req, res) {
    res.send('Soy la Home Page!');
})


app.get('/personajes', async(req, res)   => res.send(index(await test_getAll)) )


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})



//await test_getAllC(); //ANDA
//await test_getByIdC(); // ANDA
//await test_insertC(); //ANDA
//await test_updateC(); //Dice undefined HAY QUE ARREGLARLO ASDASDAS
//await test_deleteByIdC(); //ANDA
//await test_buscarNombreC(); //Dice undefined

//await test_getAllM(); ANDA
//await test_getByIdM(); //ANDA
//await test_insertM(); //ANDA
//await test_updateM(); //Dice undefined
//await test_deleteByIdM(); //ANDA
//await test_buscarTituloM(); //Dice undefined




async function test_getAllC(){
    let svc = new PersonajeService();
    let data;

    data = await svc.getAllC();
    //res.send(data);
    console.log(data);
}

async function test_getByIdC(){
    let svc = new PersonajeService();
    let data;
    data = await svc.getByIdC(1);
    console.log(data);
}

async function test_insertC(){
    let svc = new PersonajeService();
    let data;
    let nuevoPersonaje = new Personaje();
    
    nuevoPersonaje.imagen  = 'https://static.wikia.nocookie.net/doblaje/images/a/ac/Morty_Smith_AS.png/revision/latest?cb=20210716132553&path-prefix=es';
    nuevoPersonaje.nombre  = 'Morty';
    nuevoPersonaje.edad    = 14;
    nuevoPersonaje.peso    = '40';
    nuevoPersonaje.historia= 'El nieto de Rick Sanchez siempre lo acompaña en aventuras locas por todo el universo';
    nuevoPersonaje.peliculasSeries= 'Rick y Morty';
    console.log('\nnuevoPersonaje: ');
    console.log(nuevoPersonaje);

    data = await svc.insertC(nuevoPersonaje);
    console.log(data);
}

async function test_updateC(){
    let svc = new PersonajeService();
    let data;
    let elPerso; // no se que va aca

    elPerso = await svc.getByIdC(1);
    if (elPerso!= null){
        elPerso.edad = 42;

        data = await svc.updateC(elPerso);
        console.log(data);
    } else {
        console.log('\elPerso: ');
        console.log(elPerso);
    }
}

async function test_deleteByIdC(){
    let svc = new PersonajeService();
    let data;

    data = await svc.deleteByIdC(4);
    console.log(data);
}

async function test_buscarNombreC(){
    let svc = new PersonajeService();
    let data;

    data = await svc.buscarNombreC('Rick Sanchez');
    console.log(data);
}


/*--------------------------------------------------*/


async function test_getAllM(){
    let svc = new PeliculaSerieService();
    let data
    data = await svc.getAllM();
    console.log(data);
}

async function test_getByIdM(){
    let svc = new PeliculaSerieService();
    let data;
    data = await svc.getByIdM(1);
    console.log(data);
}

async function test_insertM(){
    let svc = new PeliculaSerieService();
    let data;
    let nuevaPelicula = new PeliculaSerie();
    
    nuevaPelicula.imagen      = 'https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg';
    nuevaPelicula.titulo  = 'Los simpson';
    nuevaPelicula.fechaCreacion = '1987-04-19';  
    nuevaPelicula.calificacion  = 8.7;
    nuevaPelicula.personajesA      = 'Rick Sanchez';
    console.log('\nnuevaPelicula: ');
    console.log(nuevaPelicula);

    data = await svc.insertM(nuevaPelicula);
    console.log(data);
}

async function test_updateM(){
    let svc = new PeliculaSerieService();
    let data;
    let laPeli;

    laPeli = await svc.getByIdM(7);
    if (laPeli!= null){
        laPeli.imagen = 'https://static.wikia.nocookie.net/featteca/images/9/98/Shrek.png/revision/latest?cb=20220713043820&path-prefix=es';
        laPeli.titulo = 'Asdasd';
        laPeli.fechaCreacion = 1997-12-12;
        laPeli.calificacion = 3.2;
        laPeli.personajesA = 'Rick Sanchez';

        data = await svc.updateM(laPeli);
        console.log(data);
    } else {
        console.log('\llaPeli: ');
        console.log(laPeli);
    }
}

async function test_deleteByIdM(){
    let svc = new PeliculaSerieService();
    let data;

    data = await svc.deleteByIdM(7);
    console.log(data);
}

async function test_buscarTituloM(){
    let svc = new PeliculaSerieService();
    let data;

    data = await svc.buscarTituloM('Ben 10');
    console.log(data);
}





/*--------------------------------------------------*/
// let pool= await sql.connect(config);
// let result = await pool.request().query("SELECT top 2 * from Personaje");
// console.log(result.recordset.length)
// console.log(result.recordset[0].length)
// console.log(result.recordset[0])
// console.log(result.recordset)
// console.log(result.returnValue)
// console.log(result.output)
// console.log(result.rowsAffected)



process.exit();
