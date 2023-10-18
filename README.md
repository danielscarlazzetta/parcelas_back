<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Inicio Docker

```bash
# en terminal separada usamos el siguiente comando
$ docker compose up -d
```

## Instalar mongoose

```bash

# en terminalk instalamos lo siguiente
$ npm i @nestjs/mongoose mongoose
```

## Para poder utilizaer variables de entorno

```bash
imports: [
    ConfigModule.forRoot(),
# Este va en consola
npm i @nestjs/config
```