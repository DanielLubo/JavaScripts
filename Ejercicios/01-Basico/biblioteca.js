/**
 * 11 Crea un objeto "biblioteca" que contenga un array de libros. Cada libro debe tener: título, autor, disponible. Crea métodos para:
 * - Prestar libro (cambiar disponible a false)
 * - Devolver libro (cambiar disponible a true)
 * - Listar libros disponibles
 */

const biblioteca = {
    libros : [
        {titulo: 'Los webos de pascua', autor: 'Dross', disponible : true,},
        {titulo: 'La rata con thinner', autor: 'Omar Ramires', disponible : true,},
        {titulo: 'Flopa aventuras', autor: 'Floppa', disponible : false,},
        {titulo: 'Sexo la novela', autor: 'Floppa', disponible : true,},
    ],
    prestarLibro ( tituloLibro ) {
        let encontrado = false;
        for(const libro of this.libros){
            if(tituloLibro === libro.titulo){
                encontrado = true;
                if(libro.disponible === true){
                    libro.disponible = false
                    console.log('Libro disponible para su prestamo');
                } else {
                    console.log('El libro no esta disponible para su prestamo');
                }
            }
        }
        if(!encontrado){
            console.log('El nombre del libro no se ha encontrado');
        }
    },
    devolverLibro ( tituloLibro) {
        let encontrado = false;
        for(const libro of this.libros){
            if(tituloLibro === libro.titulo){
                encontrado = true;
                if(libro.disponible === false){
                    libro.disponible = true
                    console.log('Has devuelto el libro');
                } else {
                    console.log('Ese libro ya estaba en la biblioteca');
                }
            }
        }
        if(!encontrado){
            console.log('El libro No pertenece a la biblioteca');
        }
    },
    librosDisponibles (){
        const librosLibres = this.libros.filter(obj => obj.disponible === true);
        console.log(librosLibres);
    },
};