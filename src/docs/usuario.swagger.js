/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Endpoints para gerenciar usuários
 */

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Cria um novo usuário,
 *     tags: [Usuários]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: joao.silva@email.com
 *               senha:
 *                 type: string
 *                 example: senha123
 *               tipoUsuario:
 *                 type: string
 *                 enum: [doador, receptor]
 *                 example: doador
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123e4567-e89b-12d3-a456-426614174000"
 *                 nome:
 *                   type: string
 *                   example: João Silva
 *       400:
 *         description: Dados inválidos
 */

/**
 * @swagger
 * /usuario/{id}:
 *   get:
 *     summary: Retorna os detalhes de um usuário pelo ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123e4567-e89b-12d3-a456-426614174000"
 *                 nome:
 *                   type: string
 *                   example: João Silva
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @swagger
 * /usuario/{id}:
 *   patch:
 *     summary: Atualiza os dados de um usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João Atualizado
 *               email:
 *                 type: string
 *                 example: joao.novo@email.com
 *     responses:
 *       204:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 */

/**
 * @swagger
 * /usuario/{id}:
 *   delete:
 *     summary: Exclui um usuário pelo ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *     responses:
 *       204:
 *         description: Usuário excluído com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
