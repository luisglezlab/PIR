const {Router} = require('express')
const router = Router()
const EmpleadoCtrl = require('../controllers/empleado.controllers')
const Auth = require('../helpers/Auth')

router.post('/crear', Auth.verificartoken, EmpleadoCtrl.crear)
router.get('/listarempleados', Auth.verificartoken, EmpleadoCtrl.listar)
router.get('/listar/:id', Auth.verificartoken, EmpleadoCtrl.listarid)
router.get('/listarempleadosjefe/:id', Auth.verificartoken, EmpleadoCtrl.empleadosDeUnJefe)
router.delete('/eliminar/:id', Auth.verificartoken, EmpleadoCtrl.eliminar)
router.put('/actualizar/:id', Auth.verificartoken, EmpleadoCtrl.actualizar)
router.get('/buscar/:nombre/:id', Auth.verificartoken, EmpleadoCtrl.buscarEmpleado)

module.exports = router