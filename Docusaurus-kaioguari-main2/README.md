# Website

O site foi criado utilizando o gerador de site estático [Docusaurus 2](https://docusaurus.io/).

### Instalando

Ainda usando git bash, dentro da pasta do projeto, instale o Yarn para rodar o site localmente (você precisará ter o npm instalado, que vem junto com a instalação do Node.js, o node também precisará estar na versão 16.14 ou maior):

```
$ npm install --global yarn
```

### Rodar site localmente

```
$ yarn start
```

Esse comando inicia o desenvolvimento local abrindo o site pelo navegador.

### Clonando o repositório

Abra o git bash e digite:

```
$ git clone https://github.com/PeHSilva/Docusaurus-PH.git
```

# GitHub Actions

O arquivo de workflow do github actions se trata de uma automatização para a construção, testes e implantação do site.

### Eventos de Acionamento

```
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

No arquivo, primeiro é definido que a cada push ou pull_request feito na branch main, o github será acionado para realizar os testes.

### Job Principal

```
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v2
    - name: Install modules
      run: yarn
    - name: Run ESLint
      run: yarn eslint src --ext .js
```

Em seguida, é definido os "Jobs", que é onde será definido o que será feito ecomo os testes ocorrerão. O primeiro job definido com o nome "build", primeiro define que este job será executado em uma máquina Ubuntu mais recente (runs-on: ubuntu-latest).

Depois, começa os passos que serão seguidos para executar o job: Sendo o primeiro passo (uses: actions/checkout@v2), nomeado de "Checkout code", responsável por clonar o código do repositório em uma máquina virtual para execução.

O segundo passo (run: yarn), nomeado de "Install module", instala os modulos necessários do yarn para preparar o ambiente e executar o código.

E por fim, o terceiro passo (run: yarn eslint src --ext .js), nomeado "Run ESLint", executa o ESLint para verificar erros na pasta src para arquivos em de extensão .js Esse job então retornará se o teste do ESLint para os arquivos no formato JavaScript na pasta src estão apresentado falhas ou não.

No arquivo, primeiro é definido que a cada push ou pull_request feito na branch main, o github será acionado para realizar os testes.

### Job Adicional

```
Explore-GitHub-Actions:
    runs-on: ubuntu-latest
    steps:
      - name: Display information
        run: |
          echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
          echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
          echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
          echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
          echo "🖥️ The workflow is now ready to test your code on the runner."
          ls ${{ github.workspace }}
          echo "🍏 This job's status is ${{ job.status }}."
```

Finalmente, é definido um job adicional para demontrar algumas features essenciais do GitHub Actions. De forma similar, o segundo job nomeado de "Explore-GitHub-Actions", primeiramenta define que será executado em uma máquina Ubuntu.

Em seguida, no passo único chamado de "Display Information", é exibifo várias informações relacionadas ao ambiente de execução, eventos, branches do repositório e outros detalhes como o que ativou o job, em qual servidor o job está rodando, o nome da branch e repositório, quando o repositório é clonado, quando está pronto para teste e o status final do job.