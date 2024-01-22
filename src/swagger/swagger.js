/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a new customer
 *     description: Insert new customer by inserting name
 *     consume:
 *      - application/json
 *     tags:
 *       [Customers]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              type : object
 *              properties:
 *                 name:
 *                   type: string
 *              example:
 *                 name: Raihan
 *     responses:
 *       201:
 *         description: The created customers.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                    type: integer
 *                    description: id.
 *                    example: 1
 *                 name:
 *                    type: string
 *                    description: name
 *                    example: Raihan
 *       500:
 *         description: INTERNAL ERROR
 * /customers/{id}:
 *   get:
 *     summary: get customer by id
 *     description: Get customer by id
 *     tags:
 *       [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer ID
 *         schema:
 *           type: string
 *         example: 1
 *     responses:
 *       200:
 *         description: customer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                    type: integer
 *                    description: id.
 *                    example: 1
 *                 name:
 *                    type: string
 *                    description: name
 *                    example: Raihan
 *       500:
 *         description: INTERNAL ERROR
 *   put:
 *     summary: Update a customer by ID
 *     description: Update a customer's name by ID
 *     tags:
 *       [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer ID
 *         schema:
 *           type: string
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: ray
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Customer ID
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: Customer's updated name
 *                   example: ray
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Internal Error
 * /wallet/{id}/transactions/:
 *   post:
 *     summary: Post transaction
 *     description: Post transaction
 *     tags:
 *       [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer ID
 *         schema:
 *           type: string
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               amount:
 *                 type: number
 *               type:
 *                 type: string
 *             example:
 *               description: bayarhutang
 *               amount: 1000
 *               type: withdraw
 *     responses:
 *       200:
 *         description: successfully create transaction
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Transaction ID
 *                   example: 1
 *                 customer_id:
 *                   type: string
 *                   description: Customer ID
 *                   example: 1
 *                 description:
 *                   type: string
 *                   description: Transaction Description
 *                   example: bayar makan
 *                 amount:
 *                   type: number
 *                   description: Amount of Transaction
 *                   example: 1000
 *                 type:
 *                   type: string
 *                   description: Type of Transaction
 *                   example: withdraw
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Internal Error
 *   get:
 *     summary: get customer by id
 *     description: Get customer by id
 *     tags:
 *       [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer ID
 *         schema:
 *           type: string
 *         example: 1
 *     responses:
 *       200:
 *         description: customer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                    type: integer
 *                    description: id.
 *                    example: 1
 *                 name:
 *                    type: string
 *                    description: name
 *                    example: Raihan
 *       500:
 *         description: INTERNAL ERROR
 */
