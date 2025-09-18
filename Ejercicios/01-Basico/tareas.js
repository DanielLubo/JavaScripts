/**
 * 14 Crea un sistema de tareas donde cada tarea es un objeto con: id, descripción, completada, prioridad (1-5). Implementa funciones para:
 * - Agregar tarea
 * - Marcar como completada
 * - Filtrar por prioridad
 * - Mostrar tareas pendientes
 */

const task = [
    {id: 1, description: 'Levantarme', completed: true, priority: 2},
    {id: 2, description: 'Lavar platos', completed: true, priority: 3},
    {id: 3, description: 'Leer el la rata con thinner', completed: false, priority: 5},
    {id: 4, description: 'Hacer tarea de la universidad', completed: false, priority: 4},
    {id: 5, description: 'Pasear a tyson', completed: false, priority: 3},
]

// Datos ingresados de la tarea
let descriptionTask;
let stateTask = false;
let priorityTask

let siguienteId = task.length + 1;


//Funcion para crear las tareas
const createTask = (des, com, prio,) => {
    const newTask = {
        id: siguienteId,
        description: des,
        completed: com,
        priority: prio,
    };
    task.push(newTask);
    siguienteId++;
    return newTask;
}

//Funcion para Actualizar el estado de la tarea
const updateStatus = ( taskId ) => {

    let taskFound = false;

    for(let key of task){
        if(taskId === key.id){
            taskFound = true;

            console.log('La tarea se ha encontrado');
            key.completed = !key.completed; // ← De esta forma invierte true/false automáticamente
        }
    }
    if(taskFound){
        console.log(`Tarea ${taskId} actualizada correctamente`);
    } else {
        console.log(`Tarea con ID ${taskId} no encontrada`);
    }
}

//Funcion para filtrar tareas
const filter = ( pri ) => {

    let priorityFilter = [];

    for(let key of task){
        if(key.priority === pri){
            priorityFilter.push(key);
        }
    }

    if(priorityFilter.length > 0){
        console.log(`Tareas con prioridad ${pri}:`);
        console.log(priorityFilter);
    } else {
        console.log(`No hay tareas con prioridad ${pri}`);
    }
}

//Funcion para ordenar tareas en base a su prioridad
const orderPriority = ( ori ) => {
    let taskOrder = [...task]; // Usamos el operador spread para hacer una copia del array original de tareas sin alterarlo

    // if(ori === true){
    //     taskOrder.sort((x, d) => x.priority - d.priority );
    // } else {
    //     taskOrder.sort((x, d) => d.priority - x.priority );
    // }

    taskOrder.sort((x, d) =>
        ori ? x.priority - d.priority :  d.priority - x.priority
    );

    console.log(taskOrder);
    return taskOrder;
}


//Funcoion para mostrar las tareas pendientes
const pendingTasks = ( stat ) => {
    let statusFilter = [];

    for(let key of task){
        if(key.completed === stat){
            statusFilter.push(key);
        }
    }

    if(statusFilter.length > 0){
        console.log(stat ? `Tareas que ya están completadas:` : `Tareas pendientes por completar:`);
        console.log(statusFilter);
    } else {
        console.log(stat ? `No hay tareas completadas` : `No hay tareas incompletas`);
    }
}

//Funcion para iniciar la aplicacion
const startApp = () =>{
    do{
        descriptionTask = prompt('Ingresa la descripcion: ');
        priorityTask = parseInt(prompt('Ingresa la prioridad (1-5): '));
    } while (priorityTask < 1 || priorityTask > 5);

    createTask(descriptionTask, stateTask, priorityTask);
    console.log(task);
}