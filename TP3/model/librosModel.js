let libros = [
    { id: "1" , titulo: 'libro1', autor: 'pepe', anio: 55 },
    { id: "2", titulo: 'libro2', autor: 'pepe', anio: 23 },
    { id: "3", titulo: 'libro3', autor: 'pepe', anio: 456 },
]

const findAll =()=>
{
    return libros
}

const findById = id =>
{
        const libro = libros.find(libro=>libro.id===id)
        return libro||{}
}
const save = libro =>
{
    libro.id = String(parseInt(libros[libros.length - 1]?.id || 0) + 1)
    libro.titulo=String(libro.titulo)
    libro.autor=String(libro.autor)
    libro.anio=Number(libro.anio)
    libros.push(libro)
    return libro
}

const editById = (id,libro)=>
{
    libro.id=id
    const index = libros.findIndex(libro=>libro.id===id)
    if(index!=-1)
    {
        const libroAnt = libros[index]
        const libroNuevo = {...libroAnt,...libro}
        libros.splice(index,1,libroNuevo)
        return libroNuevo
    }
}
const deleteById = (id)=>{
    let libro = {}
    const index = libros.findIndex(libro =>libro.id===id)
    console.log(id+" "+index);
    if(index!=-1)
    {
        libro = libros.splice(index,1)[0]
    }
    return libro
}


export default{
    findAll,
    findById,
    save,
    editById,
    deleteById
}