# Branchs e fluxo de trabalho

Olá, esse documento visa mostrar, qual o fluxo de trabalho usamos nos repositórios do HUB Integrações. Sem muita surpresa, usamos o GitFlow. Adotamos o fluxo mais usado pelo mercado de tecnologia hoje e vou descrever rapidamente abaixo.

### O que é Git Flow?

O Git Flow é um modelo, uma estratégia ou, ainda, um fluxo de trabalho muito utilizado por equipes de desenvolvimento de software. **Ele se destaca por auxiliar na organização do versionamento de códigos.**
Publicado em 2010, pelo engenheiro de software holandês, [Vincent Driessen](https://twitter.com/nvie), o objetivo do Git Flow era melhorar as organizações das _Branches_ (ramificações) dentro de repositórios e, desta forma, dar mais fluidez ao processo de desenvolvimento de novas funcionalidades, correções de bugs e lançamentos de versões.

## Baseado nisso como trabalhamos?

Teremos três branchs criadas que não podem ser excluídas e que vão nos ajudar durante o processo de desenvolvimento, teste e publicação das nossas aplicações. Segue uma imagem de exemplo abaixo:

![](https://www.alura.com.br/artigos/assets/git-flow-o-que-e-como-quando-utilizar/imagem3.png)

As três branches que vamos mais utilizar são: **develop**, **sandbox** e **master**. Como fica basicamente nosso fluxo de trabalho, toda vez que for iniciar o _desenvolvimento_, é preciso dar checkout na branch "develop" e criar uma "feature branch" a partir da branch develop. Após a conclusão do desenvolvimento nessa "feature branch", é só mergear com a branch **develop**. Após isso, é só testar a mudança feita no ambiente de _dev_ e podemos fazer merge de **develop** com **sandbox**. O mesmo vale para sandbox e master.

## Build e execução do projeto

-- Instalar as dependências, (yarn ou npm install)
-- npx prisma generate
-- npx prisma db push
-- yarn build
-- yarn start
