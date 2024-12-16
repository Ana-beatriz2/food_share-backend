/**
 * @swagger
 * tags:
 *   name: Postos de Coleta
 *   description: Endpoints para gerenciar postos de coleta de alimentos
 */

/**
 * @swagger
 * /postoColeta:
 *   post:
 *     summary: Cria um novo posto de coleta
 *     tags: [Postos de Coleta]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Posto Central de Coleta"
 *               tipo:
 *                 type: string
 *                 example: "Farmacêutico"
 *               bairro:
 *                 type: string
 *                 example: "Centro"
 *               cidade:
 *                 type: string
 *                 example: "São Paulo"
 *               logradouro:
 *                 type: string
 *                 example: "Rua das Rosas, 123"
 *               complemento:
 *                 type: string
 *                 example: "Próximo ao mercado municipal"
 *               estado:
 *                 type: string
 *                 example: "SP"
 *               ponto_referencia:
 *                 type: string
 *                 example: "Em frente à estação central"
 *     responses:
 *       201:
 *         description: Posto de coleta criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "8477edc7-6710-456c-b965-298cea48fcb9"
 *                 nome:
 *                   type: string
 *                   example: "Posto Central de Coleta"
 *                 tipo:
 *                   type: string
 *                   example: "Farmacêutico"
 *                 bairro:
 *                   type: string
 *                   example: "Centro"
 *                 cidade:
 *                   type: string
 *                   example: "São Paulo"
 *                 logradouro:
 *                   type: string
 *                   example: "Rua das Rosas, 123"
 *                 complemento:
 *                   type: string
 *                   example: "Próximo ao mercado municipal"
 *                 estado:
 *                   type: string
 *                   example: "SP"
 *                 ponto_referencia:
 *                   type: string
 *                   example: "Em frente à estação central"
 *                 usuarioId:
 *                   type: string
 *                   example: "4d1e537c-bc0a-4d01-8015-0af8f3a7a433"
 *                 Funcionamentos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "42449af0-783a-48b3-875f-2189fc532a1f"
 *                       dia:
 *                         type: string
 *                         example: "segunda"
 *                       hora_inicio:
 *                         type: string
 *                         example: "09:00:00"
 *                       hora_fim:
 *                         type: string
 *                         example: "17:00:00"
 *       400:
 *         description: Dados inválidos para criação do posto de coleta
 *       500:
 *         description: Erro interno ao criar o posto de coleta
 */

/**
 * @swagger
 * /postoColeta/doador:
 *   get:
 *     summary: Retorna os postos de coleta de um doador
 *     tags: [Postos de Coleta]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de postos de coleta do doador
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "8477edc7-6710-456c-b965-298cea48fcb9"
 *                   nome:
 *                     type: string
 *                     example: "Posto Central de Coleta"
 *                   tipo:
 *                     type: string
 *                     example: "Farmacêutico"
 *                   bairro:
 *                     type: string
 *                     example: "Centro"
 *                   cidade:
 *                     type: string
 *                     example: "São Paulo"
 *                   logradouro:
 *                     type: string
 *                     example: "Rua das Rosas, 123"
 *                   complemento:
 *                     type: string
 *                     example: "Próximo ao mercado municipal"
 *                   estado:
 *                     type: string
 *                     example: "SP"
 *                   ponto_referencia:
 *                     type: string
 *                     example: "Em frente à estação central"
 *       500:
 *         description: Erro ao retornar os postos de coleta
 */

/**
 * @swagger
 * /postoColeta/{id}:
 *   get:
 *     summary: Retorna um posto de coleta pelo ID
 *     tags: [Postos de Coleta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do posto de coleta
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Posto de coleta encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123e4567-e89b-12d3-a456-426614174003"
 *                 nome:
 *                   type: string
 *                   example: "Posto de Coleta Central"
 *                 tipo:
 *                   type: string
 *                   example: "Público"
 *                 bairro:
 *                   type: string
 *                   example: "Centro"
 *                 cidade:
 *                   type: string
 *                   example: "São Paulo"
 *                 logradouro:
 *                   type: string
 *                   example: "Rua das Coletas, 123"
 *                 complemento:
 *                   type: string
 *                   example: "Próximo ao mercado"
 *                 estado:
 *                   type: string
 *                   example: "SP"
 *                 ponto_referencia:
 *                   type: string
 *                   example: "Em frente ao ponto de ônibus"
 *                 usuarioId:
 *                   type: string
 *                   example: "1d52f91d-241f-4120-afea-92e19f729b5b"
 *                 Funcionamentos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "42449af0-783a-48b3-875f-2189fc532a1f"
 *                       dia:
 *                         type: string
 *                         example: "segunda"
 *                       hora_inicio:
 *                         type: string
 *                         example: "09:00:00"
 *                       hora_fim:
 *                         type: string
 *                         example: "17:00:00"
 *       404:
 *         description: Posto de coleta não encontrado
 *       500:
 *         description: Erro ao retornar o posto de coleta
 */

/**
 * @swagger
 * /postoColeta/{id}:
 *   put:
 *     summary: Atualiza um posto de coleta existente
 *     tags: [Postos de Coleta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do posto de coleta
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Posto Central de Coleta"
 *               tipo:
 *                 type: string
 *                 example: "Farmacêutico"
 *               bairro:
 *                 type: string
 *                 example: "Centro"
 *               cidade:
 *                 type: string
 *                 example: "São Paulo"
 *               logradouro:
 *                 type: string
 *                 example: "Rua das Rosas, 123"
 *               complemento:
 *                 type: string
 *                 example: "Próximo ao mercado municipal"
 *               estado:
 *                 type: string
 *                 example: "SP"
 *               ponto_referencia:
 *                 type: string
 *                 example: "Em frente à estação central"
 *     responses:
 *       204:
 *         description: Posto de coleta atualizado com sucesso
 *       400:
 *         description: Dados inválidos para atualização
 *       404:
 *         description: Posto de coleta não encontrado
 *       500:
 *         description: Erro ao atualizar o posto de coleta
 */

/**
 * @swagger
 * /postoColeta/{id}:
 *   delete:
 *     summary: Exclui um posto de coleta existente
 *     tags: [Postos de Coleta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do posto de coleta
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: Posto de coleta excluído com sucesso
 *       404:
 *         description: Posto de coleta não encontrado
 *       500:
 *         description: Erro ao excluir o posto de coleta
 */
