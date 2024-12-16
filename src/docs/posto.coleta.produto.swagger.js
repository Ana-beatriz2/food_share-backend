/**
 * @swagger
 * tags:
 *   name: Postagens
 *   description: Endpoints para gerenciar postagens de produtos em postos de coleta
 */

/**
 * @swagger
 * /postagem:
 *   post:
 *     summary: Cria uma nova postagem de produto
 *     tags: [Postagens]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postoColetaId:
 *                 type: string
 *                 example: "123e4567-e89b-12d3-a456-426614174003"
 *               produtoId:
 *                 type: string
 *                 example: "123e4567-e89b-12d3-a456-426614174002"
 *               quantidade:
 *                 type: integer
 *                 example: 15
 *               observacao:
 *                 type: string
 *                 example: Produto em bom estado
 *               imagem:
 *                 type: string
 *                 example: "url-da-imagem.jpg"
 *               validade:
 *                 type: string
 *                 format: date
 *                 example: "2024-12-30"
 *     responses:
 *       201:
 *         description: Postagem criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "bc855250-9793-4b2f-a119-69ebc69cb67a"
 *                 postoColetaId:
 *                   type: string
 *                   example: "123e4567-e89b-12d3-a456-426614174003"
 *                 produtoId:
 *                   type: string
 *                   example: "123e4567-e89b-12d3-a456-426614174002"
 *                 quantidade:
 *                   type: integer
 *                   example: 15
 *                 observacao:
 *                   type: string
 *                   example: Produto em bom estado
 *                 validade:
 *                   type: string
 *                   format: date
 *                   example: "2024-12-30"
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /postagem:
 *   get:
 *     summary: Retorna todas as postagens de produtos
 *     tags: [Postagens]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de postagens
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "bc855250-9793-4b2f-a119-69ebc69cb67a"
 *                   postoColetaId:
 *                     type: string
 *                     example: "123e4567-e89b-12d3-a456-426614174003"
 *                   produtoId:
 *                     type: string
 *                     example: "123e4567-e89b-12d3-a456-426614174002"
 *                   quantidade:
 *                     type: integer
 *                     example: 15
 *                   observacao:
 *                     type: string
 *                     example: Produto em bom estado
 *                   validade:
 *                     type: string
 *                     format: date
 *                     example: "2024-12-30"
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /postagem/{id}:
 *   get:
 *     summary: Retorna os detalhes de uma postagem pelo ID
 *     tags: [Postagens]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "bc855250-9793-4b2f-a119-69ebc69cb67a"
 *     responses:
 *       200:
 *         description: Detalhes da postagem
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "bc855250-9793-4b2f-a119-69ebc69cb67a"
 *                 postoColetaId:
 *                   type: string
 *                   example: "123e4567-e89b-12d3-a456-426614174003"
 *                 produtoId:
 *                   type: string
 *                   example: "123e4567-e89b-12d3-a456-426614174002"
 *                 usuarioId:
 *                   type: string
 *                   example: "1d52f91d-241f-4120-afea-92e19f729b5b"
 *                 quantidade:
 *                   type: integer
 *                   example: 15
 *                 observacao:
 *                   type: string
 *                   example: Produto em bom estado
 *                 validade:
 *                   type: string
 *                   format: date
 *                   example: "2024-12-30"
 *                 Produto:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "123e4567-e89b-12d3-a456-426614174002"
 *                     nome:
 *                       type: string
 *                       example: Arroz Integral
 *                     marca:
 *                       type: string
 *                       example: Marca Saudável
 *                     tipo_alimento:
 *                       type: string
 *                       example: Grãos
 *                 PostoColetum:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "123e4567-e89b-12d3-a456-426614174003"
 *                     nome:
 *                       type: string
 *                       example: Posto de Coleta Central
 *                     tipo:
 *                       type: string
 *                       example: Público
 *                     bairro:
 *                       type: string
 *                       example: Centro
 *                     cidade:
 *                       type: string
 *                       example: São Paulo
 *                     logradouro:
 *                       type: string
 *                       example: Rua das Coletas, 123
 *       404:
 *         description: Postagem não encontrada
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /postagem/{id}:
 *   put:
 *     summary: Atualiza os detalhes de uma postagem
 *     tags: [Postagens]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "bc855250-9793-4b2f-a119-69ebc69cb67a"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantidade:
 *                 type: integer
 *                 example: 10
 *               observacao:
 *                 type: string
 *                 example: Atualizado com nova quantidade
 *               validade:
 *                 type: string
 *                 format: date
 *                 example: "2025-01-01"
 *     responses:
 *       204:
 *         description: Postagem atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Postagem não encontrada
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /postagem/{id}:
 *   delete:
 *     summary: Exclui uma postagem pelo ID
 *     tags: [Postagens]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "bc855250-9793-4b2f-a119-69ebc69cb67a"
 *     responses:
 *       204:
 *         description: Postagem excluída com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Postagem não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
