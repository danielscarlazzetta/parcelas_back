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

## Para crear klas validaciones del DTO instalamos lo siguiente

```bash

$ npm i class-validator class-transformer
```
depues de instalar, pegaremos el siguiente codigo en el main.ts:
```
app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )
```


## Encriptar contrasenias

```bash
# instalamos lo siguiente
$ npm i bcryptjs
$ npm i --save-dev @types/bcryptjs
```

## Instalamos el token para su uso

```bash
$ npm install --save @nestjs/
```

## Creacion de guards

```bash
$ nest g gu auth/guards/auth
```