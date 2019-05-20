const express = require('express');
const router = express.Router();
//TOKEN
const {
    authenticationMiddleware
} = require('../utils/token')

const controller = require('../controllers/usuarios');

/*******
 * TODO: Definição das rotas do CRUD de Usuários e Login.
 * Exemplo:
 * 
 * const validateBody = {
 *   // Schema de validação do Express Validator
 * };
 * 
 * 
 * router.post('/',
 *   controller.cadastro
 * );
 *******/

// LOGIN - POST
router.post('/login',
    controller.login,
)

// CADASTRAR USUARIOS - POST
router.post('/',
    authenticationMiddleware,
    controller.cadastro,
);

// EDITAR USUARIO - PUT
router.put('/:usuarioId',
    authenticationMiddleware,
    controller.edicao,
);

// BUSCAR USUARIO - GET
router.get('/:usuarioId',
    authenticationMiddleware,
    controller.buscaPorId,
);


module.exports = router;
