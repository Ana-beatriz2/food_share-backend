/**
 * @swagger
 * tags:
 *   name: Funcionamentos
 *   description: Endpoints para gerenciar o funcionamento dos postos de coleta
 */

/**
 * @swagger
 * /funcionamento:
 *   post:
 *     summary: Cria um novo horário de funcionamento
 *     tags: [Funcionamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dia:
 *                 type: string
 *                 enum: [segunda, terca, quarta, quinta, sexta, sabado, domingo]
 *                 example: segunda
 *               hora_inicio:
 *                 type: string
 *                 format: time
 *                 example: "08:00"
 *               hora_fim:
 *                 type: string
 *                 format: time
 *                 example: "17:00"
 *               postoColetaId:
 *                 type: string
 *                 example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *     responses:
 *       201:
 *         description: Funcionamento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *                 dia:
 *                   type: string
 *                   example: segunda
 *                 hora_inicio:
 *                   type: string
 *                   example: "08:00"
 *                 hora_fim:
 *                   type: string
 *                   example: "17:00"
 *                 postoColetaId:
 *                   type: string
 *                   example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno ao criar o funcionamento
 */

/**
 * @swagger
 * /funcionamento/{id}:
 *   get:
 *     summary: Retorna os detalhes de um funcionamento pelo ID
 *     tags: [Funcionamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *     responses:
 *       200:
 *         description: Funcionamento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *                 dia:
 *                   type: string
 *                   example: segunda
 *                 hora_inicio:
 *                   type: string
 *                   example: "08:00"
 *                 hora_fim:
 *                   type: string
 *                   example: "17:00"
 *                 postoColetaId:
 *                   type: string
 *                   example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *       404:
 *         description: Funcionamento não encontrado
 *       500:
 *         description: Erro interno ao buscar o funcionamento
 */

/**
 * @swagger
 * /funcionamento/postoColeta/{id}:
 *   get:
 *     summary: Retorna os horários de funcionamento de um posto de coleta pelo ID
 *     tags: [Funcionamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *     responses:
 *       200:
 *         description: Lista de horários de funcionamento do posto de coleta
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *                   dia:
 *                     type: string
 *                     example: segunda
 *                   hora_inicio:
 *                     type: string
 *                     example: "08:00"
 *                   hora_fim:
 *                     type: string
 *                     example: "17:00"
 *                   postoColetaId:
 *                     type: string
 *                     example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *       404:
 *         description: Não encontrado funcionamento para o posto de coleta
 *       500:
 *         description: Erro interno ao buscar os funcionamentos
 */

/**
 * @swagger
 * /funcionamento/{id}:
 *   put:
 *     summary: Atualiza um funcionamento pelo ID
 *     tags: [Funcionamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dia:
 *                 type: string
 *                 enum: [segunda, terca, quarta, quinta, sexta, sabado, domingo]
 *                 example: segunda
 *               hora_inicio:
 *                 type: string
 *                 format: time
 *                 example: "08:00"
 *               hora_fim:
 *                 type: string
 *                 format: time
 *                 example: "17:00"
 *               postoColetaId:
 *                 type: string
 *                 example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *     responses:
 *       204:
 *         description: Funcionamento atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno ao atualizar o funcionamento
 */

/**
 * @swagger
 * /funcionamento/{id}:
 *   delete:
 *     summary: Deleta um funcionamento pelo ID
 *     tags: [Funcionamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *     responses:
 *       204:
 *         description: Funcionamento deletado com sucesso
 *       404:
 *         description: Funcionamento não encontrado
 *       500:
 *         description: Erro interno ao deletar o funcionamento
 */
