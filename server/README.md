
## Description

I wanted to apply more consistency in the creation of records in my database, I took this [example](https://www.tomray.dev/nestjs-prisma) and I applied the operation of
 transaction.


## Installation

postgres

```bash
create database test_demo;
```

```bash
$ npm install
$ npx prisma migrate dev --name init --schema=./src/database/schema.prisma
```
## seed

```
npx prisma db seed
```

## Running the app

```bash
# development
$ npm run start

# watch mode THIS
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

`POST:localhost:3000/api/diagram`

```

```

## Stay in touch

- Twitter - [@ZtvmtE](https://twitter.com/ZtvmtE)

## License

Nest is [MIT licensed](LICENSE).
