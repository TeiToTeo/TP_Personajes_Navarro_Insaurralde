import config from './dbconfig.js';
import PersonajeService from './src/services/personajes-services.js'
import  sql from 'mssql';
import Personaje from './src/models/personajes.js';
import express  from 'express';

	
var app = express();	


app.get('/', function(req, res) {
    res.send('Soy la Home Page!');
})


app.get('/personajes', async(req, res)   => res.send(index(await test_getAll)) )


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})



//await test_getAll(); ANDA
//await test_getById(); NO ANDA
//await test_insert(); ANDA
//await test_update(); NO ANDA
//await test_deleteById(); ANDA PERO NO SE QUE MUESTRA
//await test_buscarNombre(); ANDA PERO CREO QUE MAL





async function test_getAll(){
    let svc = new PersonajeService();
    let data;

    data = await svc.getAll();
    res.send(data);  //muestro todas las pizzas
}

async function test_getById(){
    let svc = new PersonajeService();
    let data;
    data = await svc.getById(2);
    console.log(data);
}

async function test_insert(){
    let svc = new PersonajeService();
    let data;
    let nuevoPersonaje = new Personaje();
    
    nuevoPersonaje.imagen      = 'https://static.wikia.nocookie.net/doblaje/images/a/ac/Morty_Smith_AS.png/revision/latest?cb=20210716132553&path-prefix=es';
    nuevoPersonaje.nombre  = 'Morty';
    nuevoPersonaje.edad      = 14;
    nuevoPersonaje.peso  = '40';
    nuevoPersonaje.historia      = 'El nieto de Rick Sanchez siempre lo acompaña en aventuras locas por todo el universo';
    nuevoPersonaje.peliculasSeries      = 'Rick y Morty';
    console.log('\nnuevoPersonaje: ');
    console.log(nuevoPersonaje);

    data = await svc.insert(nuevoPersonaje);
    console.log(data);
}

async function test_update(){
    let svc = new PersonajeService();
    let data;
    let elPerso; // no se que va aca

    elPerso = await svc.getById(1);
    if (elPerso!= null){
        elPerso.edad = 42;

        data = await svc.update(elPerso);
        console.log(data);
    } else {
        console.log('\elPerso: ');
        console.log(elPerso);
    }
}

async function test_deleteById(){
    let svc = new PersonajeService();
    let data;

    data = await svc.deleteById(4);
    console.log(data);
}

async function test_buscarNombre(){
    let svc = new PersonajeService();
    let data;

    data = await svc.buscarNombre();
    console.log(data);
}






/*--------------------------------------------------*/
let pool= await sql.connect(config);
let result = await pool.request().query("SELECT top 2 * from Personaje");
console.log(result.recordset.length)
console.log(result.recordset[0].length)
console.log(result.recordset[0])
console.log(result.recordset)
console.log(result.returnValue)
console.log(result.output)
console.log(result.rowsAffected)



process.exit();
