# DBCompras - Vem Ser 9ª edição

Repositório contendo o projeto final da equipe Sistema de Compras, do programa Vem Ser DBC - 9ª edição.

## Equipe

**Front-end:**

👩‍💻 [Filipa Rocha](https://github.com/Filipa-SRocha)  
👩‍💻 [Mayra Amaral](https://github.com/mayraamaral)

**Back-end:**

👨‍💻 [Gabriel Luppi](https://github.com/LancelotLuppi)  
👨‍💻 [Rodrigo Nascimento](https://github.com/RodrigoSoaresNascimento)

**QA:**

👨‍💻 [Ályson Campos](https://github.com/alysoncampos)

### Links úteis

| Front-end                                                           | Back-end                                                                 | QA                                                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| [Repositório](https://github.com/Filipa-SRocha/dbc-sistema-compras) | [Repositório](https://github.com/LancelotLuppi/DBCompras/)               | [Repositório - Front-end](https://github.com/alysoncampos/dbcompras-selenium-testes)    |
| [Deploy - Vercel](https://dbc-sistema-compras.vercel.app/)          | [Deploy - Heroku](https://dbcompras.herokuapp.com/swagger-ui/index.html) | [Repositório - Back-end](https://github.com/alysoncampos/dbcompras-rest-assured-testes) |

### Objetivo

✅ Desenvolver um sistema de compras para que o setor de compras da DBC possa comprar itens referentes às atividades da empresa.  
**Tipos de usuário:** Administrador, Colaborador, Comprador, Gestor e Financeiro.  
Cada tipo de usuário tem um cargo específico dentro do sistema e um fluxo de utilização específico.

- Administrador: Gerencia os usuários que utiliza o sistema (criando ou excluindo contas e modificando os cargos dos usuários), também tem acesso a todas as telas dos outros tipos de usuário;
- Colaborador: Pode criar, editar e excluir solicitações de compra que tenham sido feitas por ele(a);
- Comprador: Pode visualizar a lista completa de solicitações de compra, criar cotações e solicitar aprovação;
- Gestor: Pode aprovar ou recusar compras;
- Financeiro: Pode aprovar ou recusar o pagamento.

### 🛠 Tecnologias utilizadas

**Front-end**

- **ReactJS**;
- **Gerenciamento de estado:** Redux;
- **Formulários:** Formik + Yup;
- **Loading:** nProgress + States;
- **Avisos ao usuário:** React Toastify;
- **Arquivos/Base64:** React File Base64;
- **Estilização:** Styled Components;
- **Ícones:** React Icons;
- **Tratamento de data:** Moment.js;
- **Requisições:** Axios.
