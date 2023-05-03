import config from './dbconfig.js';
import  sql from 'mssql';

let pool= await sql.connect(config);
let result = await pool.request().query("SELECT top 2 * from Personaje");
console.log(result.recordset.length)
console.log(result.recordset[0].length)
console.log(result.recordset[0])
console.log(result.recordset)
console.log(result.returnValue)
console.log(result.output)
console.log(result.rowsAffected)

await test_getAll();
//await test_getById();
//await test_insert();
//await test_update();
//await test_deleteById();

async function test_getAll(){
    let svc = new PersonajeService();
    let data;

    data = await svc.getAll();
    console.log(data);  //muestro todas las pizzas
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

    elPerso = await svc.getById(12);
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

    data = await svc.deleteById(12);
    console.log(data);
}

process.exit();
