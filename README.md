# contatos-bravi

## Inicialização - Frontend

- Acesse a pasta 'frontend' e instale as dependências

```bash
npm install 
```

- Inicie o projeto

```bash
ng serve
```

## Inicialização - Backend

- Renomear o arquivo .env-example para .env
- Inserir os dados para acesso ao DB
- DB_DATABASE=backend
- DB_USERNAME=sail
- DB_PASSWORD=password

- Rode o docker compose na pasta do backend

```bash
./vendor/bin/sail up
```

- Assim que o container for inicializado, rode as migrations no terminal do docker

```bash
php artisan migrate
```

- Rode os seguintes comando no terminal para subir dados fictícios

```bash
php artisan tinker
```

```bash
Person::factory()->count(20)->create()
```
