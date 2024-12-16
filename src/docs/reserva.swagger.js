/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: Endpoints para gerenciar reservas
 */

/**
 * @swagger
 * /reserva:
 *   post:
 *     summary: Cria uma nova reserva
 *     tags: [Reservas]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuarioId:
 *                 type: string
 *                 example: "4090e555-1890-4f53-bb73-0e138a2b006e"
 *               postoColetaId:
 *                 type: string
 *                 example: "123e4567-e89b-12d3-a456-426614174003"
 *               observacao:
 *                 type: string
 *                 example: "Observação exemplo"
 *               dataRetirada:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-12-15T00:00:00Z"
 *     responses:
 *       201:
 *         description: Reserva criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "56db0044-a3bd-424b-b77e-a4f94b5e140f"
 *                 usuarioId:
 *                   type: string
 *                   example: "4090e555-1890-4f53-bb73-0e138a2b006e"
 *                 postoColetaId:
 *                   type: string
 *                   example: "123e4567-e89b-12d3-a456-426614174003"
 *                 observacao:
 *                   type: string
 *                   example: "Observação exemplo"
 *                 dataRetirada:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-15T00:00:00Z"
 *                 entregue:
 *                   type: boolean
 *                   example: false
 *       400:
 *         description: Dados inválidos
 */

/**
 * @swagger
 * /reserva/receptor:
 *   get:
 *     summary: Retorna todas as reservas de um receptor
 *     tags: [Reservas]
 *     security: []
 *     responses:
 *       200:
 *         description: Lista de reservas do receptor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "762f988a-68e9-41fe-829f-5c2ba454dd91"
 *                   usuarioId:
 *                     type: string
 *                     example: "4090e555-1890-4f53-bb73-0e138a2b006e"
 *                   postoColetaId:
 *                     type: string
 *                     example: "123e4567-e89b-12d3-a456-426614174003"
 *                   observacao:
 *                     type: string
 *                     example: null
 *                   entregue:
 *                     type: boolean
 *                     example: false
 *                   dataRetirada:
 *                     type: string
 *                     example: null
 *                   ReservaProdutos:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         quantidade:
 *                           type: integer
 *                           example: 2
 *                         Produto:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                               example: "123e4567-e89b-12d3-a456-426614174002"
 *                             nome:
 *                               type: string
 *                               example: "Arroz Integral"
 *                             marca:
 *                               type: string
 *                               example: "Marca Saudável"
 *                             tipo_alimento:
 *                               type: string
 *                               example: "Grãos"
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /reserva/pendente:
 *   get:
 *     summary: Retorna todas as reservas não entregues de um receptor
 *     tags: [Reservas]
 *     security: []
 *     responses:
 *       200:
 *         description: Lista de reservas não entregues do receptor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "56db0044-a3bd-424b-b77e-a4f94b5e140f"
 *                   usuarioId:
 *                     type: string
 *                     example: "4090e555-1890-4f53-bb73-0e138a2b006e"
 *                   postoColetaId:
 *                     type: string
 *                     example: "123e4567-e89b-12d3-a456-426614174003"
 *                   observacao:
 *                     type: string
 *                     example: null
 *                   entregue:
 *                     type: boolean
 *                     example: false
 *                   dataRetirada:
 *                     type: string
 *                     example: null
 *                   ReservaProdutos:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         quantidade:
 *                           type: integer
 *                           example: 2
 *                         Produto:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                               example: "123e4567-e89b-12d3-a456-426614174002"
 *                             nome:
 *                               type: string
 *                               example: "Arroz Integral"
 *                             marca:
 *                               type: string
 *                               example: "Marca Saudável"
 *                             tipo_alimento:
 *                               type: string
 *                               example: "Grãos"
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /reserva/{id}:
 *   get:
 *     summary: Retorna os detalhes de uma reserva pelo ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "56db0044-a3bd-424b-b77e-a4f94b5e140f"
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "56db0044-a3bd-424b-b77e-a4f94b5e140f"
 *                 usuarioId:
 *                   type: string
 *                   example: "4090e555-1890-4f53-bb73-0e138a2b006e"
 *                 postoColetaId:
 *                   type: string
 *                   example: "123e4567-e89b-12d3-a456-426614174003"
 *                 observacao:
 *                   type: string
 *                   example: null
 *                 entregue:
 *                   type: boolean
 *                   example: false
 *                 dataRetirada:
 *                   type: string
 *                   example: null
 *                 ReservaProdutos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       quantidade:
 *                         type: integer
 *                         example: 2
 *                       Produto:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: "123e4567-e89b-12d3-a456-426614174002"
 *                           nome:
 *                             type: string
 *                             example: "Arroz Integral"
 *                           marca:
 *                             type: string
 *                             example: "Marca Saudável"
 *                           tipo_alimento:
 *                             type: string
 *                             example: "Grãos"
 *       404:
 *         description: Reserva não encontrada
 */

/**
 * @swagger
 * /reserva/{id}:
 *   put:
 *     summary: Atualiza uma reserva existente
 *     tags: [Reservas]
 *     security: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "56db0044-a3bd-424b-b77e-a4f94b5e140f"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuarioId:
 *                 type: string
 *                 example: "4090e555-1890-4f53-bb73-0e138a2b006e"
 *               postoColetaId:
 *                 type: string
 *                 example: "123e4567-e89b-12d3-a456-426614174003"
 *               observacao:
 *                 type: string
 *                 example: "Nova observação"
 *               dataRetirada:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-12-15T00:00:00Z"
 *     responses:
 *       204:
 *         description: Reserva atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 */

/**
 * @swagger
 * /reserva/{id}:
 *   delete:
 *     summary: Deleta uma reserva pelo ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "56db0044-a3bd-424b-b77e-a4f94b5e140f"
 *     responses:
 *       204:
 *         description: Reserva deletada com sucesso
 *       404:
 *         description: Reserva não encontrada
 */
