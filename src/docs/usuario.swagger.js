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
 *     summary: Cria um novo usuário
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
 *                 example: Teste
 *               email:
 *                 type: string
 *                 example: teste.silva@gmail.com
 *               senha:
 *                 type: string
 *                 example: senha123
 *               tipoUsuario:
 *                 type: string
 *                 enum: [doador, receptor]
 *                 example: doador
 *               telefone:
 *                 type: string
 *                 example: 1234567890
 *               bairro:
 *                 type: string
 *                 example: Centro
 *               cidade:
 *                 type: string
 *                 example: São Paulo
 *               logradouro:
 *                 type: string
 *                 example: Rua Exemplo, 123
 *               complemento:
 *                 type: string
 *                 example: Apto 101
 *               estado:
 *                 type: string
 *                 example: SP
 *               cpf:
 *                 type: string
 *                 example: 12345678904
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
 *           example: "9d8af3b4-3941-4fab-a5a8-f11d460d048d"
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
 *                   example: "9d8af3b4-3941-4fab-a5a8-f11d460d048d"
 *                 nome:
 *                   type: string
 *                   example: João Carlos 2
 *                 email:
 *                   type: string
 *                   example: joao2.silva@gmail.com
 *                 tipoUsuario:
 *                   type: string
 *                   enum: [doador, receptor]
 *                   example: doador
 *                 telefone:
 *                   type: string
 *                   example: 1234567890
 *                 bairro:
 *                   type: string
 *                   example: Centro
 *                 cidade:
 *                   type: string
 *                   example: São Paulo
 *                 logradouro:
 *                   type: string
 *                   example: Rua Exemplo, 123
 *                 complemento:
 *                   type: string
 *                   example: Apto 101
 *                 estado:
 *                   type: string
 *                   example: SP
 *                 cpf:
 *                   type: string
 *                   example: 12345678902
 *                 cnpj:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *             examples:
 *               exemploDoador:
 *                 value:
 *                   id: "9d8af3b4-3941-4fab-a5a8-f11d460d048d"
 *                   nome: "João Carlos 2"
 *                   email: "joao2.silva@gmail.com"
 *                   tipoUsuario: "doador"
 *                   telefone: "1234567890"
 *                   bairro: "Centro"
 *                   cidade: "São Paulo"
 *                   logradouro: "Rua Exemplo, 123"
 *                   complemento: "Apto 101"
 *                   estado: "SP"
 *                   cpf: "12345678902"
 *                   cnpj: null
 *               exemploReceptor:
 *                 value:
 *                   id: "4090e555-1890-4f53-bb73-0e138a2b006e"
 *                   nome: "Teste receptor"
 *                   email: "testereceptor.silva@gmail.com"
 *                   senha: "$2b$10$D2V3lxMES1Lnj5JsWVJeM.8Cdg5oUVYFBvLcLeT10SFMcU3xw.5g6"
 *                   tipoUsuario: "receptor"
 *                   telefone: "1234567890"
 *                   bairro: "Centro"
 *                   cidade: "São Paulo"
 *                   logradouro: "Rua Exemplo, 123"
 *                   complemento: "Apto 101"
 *                   estado: "SP"
 *                   cpf: "12345678906"
 *                   cnpj: null
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
