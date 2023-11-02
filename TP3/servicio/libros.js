import librosModel from '../model/librosModel.js';
import model from '../model/librosModel.js'

const findAll=()=>{
    const libros = model.findAll()
    return libros;
}

const findById=id=>{
    const libro = model.findById(id)
    return libro
}

const save=libro=>{
    const libroGuardado = model.save(libro)
    return libroGuardado
}
const editById = (id,libro)=>{
    const libroActualizado = model.editById(id,libro)
    return libroActualizado
}
const deleteById=(id)=>{
    const libroEliminado = model.deleteById(id)
    return libroEliminado
}
export default{
    findAll,
    findById,
    save,
    editById,
    deleteById
}