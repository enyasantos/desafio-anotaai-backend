# Restaurant Marketplace
## AnotaAi Backend Challenge

![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![Nestjs](https://img.shields.io/badge/-NestJs-ea2845?style=flat-square&logo=nestjs&logoColor=white)
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

This project is an API built using **Typescript, Nestjs, AWS Simple Queue Service, Mongo DB and AWS Simple Storage Service.**

The microservice was inspired by Fernanda Kipper YouTube channel video, demonstrating how to solve the AnotaAi Backend Challenge. You can find the video [here](https://youtu.be/a3tPHH8uwPc?si=vFf-S2H5i3IpVTjN) and the challenge description [here](https://github.com/githubanotaai/new-test-backend-nodejs).


## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/enyasantos/desafio-anotaai-backend.git
```

2. Install dependencies 
```bash
pnpm install
```
ou
```bash
npm install
```
ou
```bash
yarn install
```

3. To configure your runtime environment variables with your AWS credentials, create a  `.env` file in the root directory of your project.

**Config Values**

```yaml
AWS_KEY_ID=VALUE
AWS_SECRET=VALUE2
```

**Mongo**

1. Run in terminal:
```bash
docker compose up -d
```

2. Create a DB for mongo using mongo express: http://localhost:27017.

3. Log with admin:pass and create a database called 'product-catalog'.

## Usage

1. Start the application with pnpm
2. The API will be accessible at http://localhost:8081

## API Endpoints
The API provides the following endpoints:

**API PRODUCT**
```markdown
POST /api/product - Create a new product
GET /api/product - Retrieve all products
PUT /api/product/{id} - Updates a product
DELETE /api/product/{id} - Delete a product
```

**BODY**
```json
{
  "title": "Produto para postar no tópico",
  "description": "",
  "ownerId": "4444444",
  "categoryId": "659d558b0304df732ddd4587",
  "price": 8000.0
}
```

**API CATEGORY**
```markdown
POST /api/category - Create a new category
GET /api/category - Retrieve all categories
PUT /api/category/{id} - Updates a category
DELETE /api/category/{id} - Delete a category
```

**BODY**
```json
{
  "title": "Teste",
  "description": "",
  "ownerId": "4444444"
}
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request to the repository.

When contributing to this project, please follow the existing code style, [commit conventions](https://www.conventionalcommits.org/en/v1.0.0/), and submit your changes in a separate branch.