/**
 * 26. LISTA DE CONTACTOS
 * Crea un array de objetos "contacto" con: nombre, telefono, email, favorito.
 * Implementa funciones para:
 * - Buscar contacto por nombre
 * - Listar contactos favoritos
 * - Agregar nuevo contacto
 * - Contar total de contactos
 */


const contacto = [
    {nombre: 'Ana Sofia', telefono: 3006091612, email: 'anasofia@gmail.com', favorito: true},
    {nombre: 'Angela', telefono: 3206731267, email: 'angela@gmail.com', favorito: false},
    {nombre: 'Sara', telefono: 3027126232, email: 'sarauwu@gmail.com', favorito: true},
    {nombre: 'Daniela', telefono: 3058916723, email: 'dani@gmail.com', favorito: true},
]

const buscarContacto = ( nombreContacto ) => {
    const contactoEncontrado = contacto.find(cont => cont.nombre === nombreContacto);
    contactoEncontrado ? console.log(contactoEncontrado) : console.log('El contacto buscado no existe');
    return contactoEncontrado;
}

const listarContactos = () => {
    const listadoContactos = contacto.filter(cont => cont.favorito === true);
    listadoContactos.length > 0 ? console.log(listadoContactos) : console.log('No hay contactos favoritos');
    return listadoContactos;
}

const agregarNuevoContacto = ( nam, tel, ema, fav = false) => {
    const nuevoContacto = {
        nombre : nam,
        telefono : tel,
        email: ema,
        favorito: fav,
    };

    contacto.push(nuevoContacto);
    console.log(contacto);
    return nuevoContacto;
}

const totalContactos = () => {
    let numeroContactos = 0;
    numeroContactos = contacto.length;
    console.log(`Actualmente usted tiene ${numeroContactos} contactos guardados`);
    // return contacto.reduce((total, cont) => total + 1, 0);
}

buscarContacto('Angela');
listarContactos();
agregarNuevoContacto('Yo', 3051826212, 'micaracuando@gmail.com', false);
totalContactos();
