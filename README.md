# Meetapp Desafio Final GoStack 8

Desafio final para certificação do GoStack. Aplicação Metapp.

Esta aplicação está dividida em 3 partes :

1. Backend - Api REST da aplicação responsável por fazer a conexão com o banco de dados e executar todas as requisições que são feitas pelo frontend, tando web quanto mobile.
2. Frontend web - Aplicação feita em ReactJS para web.
3. Frontend mobile - Aplicação feita em React Native **apenas para a plataforma Android**.

## Backend
Usa 2 containers docker. Um com PostgreSQL e outro com o Redis.

A configuração deles está no arquivo docker-compose.yml, na raiz do projeto.

Para subir os containers :

```docker-compose up -d```

Arquivo ```.env``` com todas as variáveis de ambiente necessárias para o projeto.

Foram criadas as migrations e seeds para o banco de dados.

As seeds do model File já fazem a relação com as imagens que estão em /tmp/uplodas.

Para iniciar a aplicação :
```yarn dev```

Para iniciar a fila :
```yarn queue```


## Frontend

Arquivo ```.env``` com todas as variáveis de ambiente necessárias para o projeto.

Para iniciar a aplicação :
```yarn start```

## Mobile

Apenas para android

Arquivo ```.env``` com todas as variáveis de ambiente necessárias para o projeto.

Para iniciar a aplicação :
```yarn android```
```yarn start```
