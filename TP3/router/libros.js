import express from 'express'
import controlador from '../controlador/libros.js'

const router = express.Router()

router.get('/',controlador.findAll)
router.get('/:id',controlador.findById)
router.post('/',controlador.save)
router.put('/:id',controlador.editById)
router.delete('/:id',controlador.deleteById)

export default router