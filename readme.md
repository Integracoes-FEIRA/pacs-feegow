# Integração PACS Mezzow e Feegow Clinic

## Descrição do Projeto

Este projeto tem como objetivo integrar o sistema PACS da Mezzow com o sistema Feegow Clinic, que é atualmente utilizado nas Feiras de Saúde. A integração visa puxar as imagens de Raio-X e Mamografia do PACS da Mezzow e realizar um POST no sistema Feegow Clinic, associando as imagens ao respectivo paciente.

## Tecnologias Utilizadas

- **Node.js**: Plataforma JavaScript para desenvolvimento do servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em contêineres.

## Pré-requisitos

Antes de iniciar, você precisará ter o Docker instalado em sua máquina. Se ainda não tiver, siga as instruções no [site oficial do Docker](https://www.docker.com/get-started).

## Passos para Inicialização

### 1. Clonar o Repositório

Clone este repositório em sua máquina local usando o seguinte comando:
```sh
git clone https://github.com/fjsprojetos-acelera/pacs-feegow.git
```

### 2. Navegar até o Diretório do Projeto

```sh
cd projeto-integracao-pacs-feegow
```
### 3.  Instalar Dependências

```sh
npm install
# ou
yarn install
```

### 4. Configurar Variáveis de Ambiente
```sh
FEEGOWCLINIC_API_URL=""
MEZZOW_PACS_URL=""
FEEGOWCLINIC_API_KEY=""
MEZZOW_PACS_TOKEN=""
```

### 5. Compilar o Projeto
```sh
npm run build
# ou
yarn build
```

### 6. Executar o Projeto com Docker

```sh
docker-compose -f docker-compose.prod.yml up
```

Se você fizer alterações no ambiente de desenvolvimento que deseja refletir no contêiner de produção, você pode reconstruir a imagem de produção adicionando a flag --build ao comando de inicialização. Por exemplo:

E iniciar o container

```sh
docker-compose -f docker-compose.prod.yml up --build

```
