<div align='center' style="text-align: center;">

<h1 style="border:0;margin:1rem">Backend For Electronic Wallet</h1>

[Suggestion](mailto:raihanirvana13@gmail.com)

<hr>
<br>

</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [List Of Endpoint](#list-of-endpoint)
- [Request Body Example](#request-body-example)
- [Contributors](#contributors)
- [License](#license)
- [Suggestion](#suggestion)

## Overview

This is backend a simple backend for electronic wallet

## Features

- add customer
- get customer by customer id
- update customer by customer id
- create transaction
- get transaction by customer id

## Technologies Used

- [Node js](https://nodejs.org/en/docs)
- [Express js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/docs/)

## Getting Started

### Installation

1. Clone this repo

   ```bash
   git clone https://git.ecommchannels.com/chip-universe/chip11/assignments/raihan-irvana/wallet-transaction-api.git
   ```

2. Enter the directory

   ```bash
   cd wallet-transaction-api
   ```

3. Install all dependencies

   ```bash
   npm install
   ```

4. Start The Local Server

   ```bash
   npm run watch
   ```

## List Of Endpoint

1. Add Customer

   ```bash
   localhost:your_port/customers
   ```

2. GET and Update Customer

   ```bash
   localhost:your_port/customers/:customer-id
   ```

3. GET and Create Transaction
   ```bash
   localhost:your_port/transaction/:customer-id
   ```

## Request Body Example

1.  Add Customer
   ```bash
   {
    "name" : "name"
   }
   ```

2.  Add transaction
   ```bash
   {
    "description" : 'description',
    "amount" :  1000,
    "type" : 'Withdraw'
   }
   ```

## Contributors

Currently, there are no contributors to this project. If you would like to contribute, you can submit a pull request.

## License

This project is licensed under the ISC License

## Suggestion

If you find bugs / find better ways / suggestions you can pull request.
