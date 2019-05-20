const express = require('express');
const router = express.Router();

const { authenticationMiddleware } = require('../utils/token');
const controller = require('../controllers/tarefas');

/*******
 * TODO: Definição das rotas do CRUD de Tarefas.
 * Exemplo:
 * 
 * const validateBody = {
 *   // Schema de validação do Express Validator
 * };
 * 
 * 
 * router.post('/',
 *   authenticationMiddleware,
 *   controller.cadastro,
 * );
 *******/

// CADASTRAR TAREFA - /tarefas - POST
router.post('/',
    authenticationMiddleware,
    controller.cadastro,
);

// BUSCAR TAREFA - /tarefa/id - GET
router.get('/:tarefaId',
    authenticationMiddleware,
    controller.buscaPorId,
);

// LISTAR TAREFAS - /tarefa - GET
router.get('/',
    authenticationMiddleware,
    controller.listagem,
);

// EDITAR TAREFA - /tarefa/id - PUT
router.put('/:tarefaId',
    authenticationMiddleware,
    controller.edicao,
);

// APAGAR TAREFA - /tarefa/id - DELETE
router.delete('/:tarefaId',
    authenticationMiddleware,
    controller.remocao,
);

// MARCAR COMO CONCLUÍDA - /tarefa/id/concluida - GET
router.put('/:tarefaId/concluida',
    authenticationMiddleware,
    controller.marcarConcluida,
);

// DESMARCAR - /tarefa/id/concluida - GET
router.delete('/:tarefaId/concluida',
    authenticationMiddleware,
    controller.desmarcarConcluida,
);

module.exports = router;
