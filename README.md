# Instruções de Execução

### 1. Clone o Repositório

Para começar, clone o repositório para sua máquina local:

```bash
git clone https://github.com/DaviSisnando/ponce-tech.git
```

### 2. Rodando a Aplicação com Docker
Depois de clonar o repositório, abra um terminal dentro da pasta clonada e execute o seguinte comando para rodar a aplicação utilizando o Docker:

```bash
docker-compose up
```
Isso irá construir os containers necessários e iniciar a aplicação.

### 3. Testando a API
A aplicação expõe uma API que pode ser testada nos seguintes endpoints:

#### 3.1. Endpoints para a API
GET e POST: localhost:3001/api/users
Para enviar dados via POST, use o seguinte JSON de exemplo:
```bash
{
  "name": "davi",
  "email": "davi@davi.com",
  "birthdate": "1995-08-15",
  "status": "ativo",
  "password": "bras"
}
```

#### 3.2. Autenticação - Login
Para autenticar-se no backend, envie uma requisição POST para:

POST: /api/login
Exemplo de JSON para login:
```bash
{
  "email": "davi@davi.com",
  "password": "bras"
}
```

### 4. Acessando a Interface Web
Após rodar o docker-compose up, a interface web pode ser acessada pelo navegador no seguinte endereço:

http://localhost:3000/
