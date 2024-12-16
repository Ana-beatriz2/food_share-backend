/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Endpoints para gerenciar produtos
 */

/**
 * @swagger
 * /produto:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
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
 *                 example: Arroz
 *               marca:
 *                 type: string
 *                 example: Marca X
 *               tipo_alimento:
 *                 type: string
 *                 example: Grão
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *                 nome:
 *                   type: string
 *                   example: Arroz
 *                 marca:
 *                   type: string
 *                   example: Marca X
 *                 tipo_alimento:
 *                   type: string
 *                   example: Grão
 *       400:
 *         description: Dados inválidos
 */

/**
 * @swagger
 * /produto:
 *   get:
 *     summary: Retorna todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos
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
 *                   nome:
 *                     type: string
 *                     example: Arroz
 *                   marca:
 *                     type: string
 *                     example: Marca X
 *                   tipo_alimento:
 *                     type: string
 *                     example: Grão
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /produto/{id}:
 *   get:
 *     summary: Retorna os detalhes de um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *     responses:
 *       200:
 *         description: Produto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "c8b8a4d3-9ef2-4fe9-bc66-5332ad93a99d"
 *                 nome:
 *                   type: string
 *                   example: Arroz
 *                 marca:
 *                   type: string
 *                   example: Marca X
 *                 tipo_alimento:
 *                   type: string
 *                   example: Grão
 *       404:
 *         description: Produto não encontrado
 */

/**
 * @swagger
 * /produto:
 *   get:
 *     summary: Retorna todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos
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
 *                   nome:
 *                     type: string
 *                     example: Arroz
 *                   marca:
 *                     type: string
 *                     example: Marca X
 *                   tipo_alimento:
 *                     type: string
 *                     example: Grão
 *       500:
 *         description: Erro interno do servidor
 */
