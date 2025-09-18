const regresaTrue = ()=>{
    console.log('Regresa un true');
    return true;
}

const regresaFalse = ()=>{
    console.log('Regresa un false');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());


//AND
console.warn('And');
console.log('--------------------------');
console.log(regresaTrue() && regresaFalse());

console.log('--------------------------');
console.log(regresaFalse() && regresaTrue());


//OR
console.warn('OR');
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse() );

//Asignaciones
console.warn('Asignaciones');

const soyUndefine = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'mundo';
const a3 = soyFalso || 'Ya no soy Falso';
const a4 = soyFalso || soyUndefine || soyNull || 'Ya no soy falso de nuevo';
const a5 = soyFalso || soyUndefine || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log({a1, a2,  a3, a4, a5,  });

//NOT
console.warn('NOT');