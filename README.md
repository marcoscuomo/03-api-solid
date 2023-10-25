# App

GymPass style app.

## RFs (Requisitos funcionais) - Funcionalidades da aplicação
- [x] Deve ser possível de cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuários buscar academias próximas (até 10km);
- [x] Deve ser possível o usuários buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regras de negocio) - Caminhos que cada requisito pode tomar
- [x] O usuário não deve poder se cadastrar com e-mail duplicado; 
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-ins se estiver a menos de 100m da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-ins só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não funcionais)
- [x] A senha do usuário precisa estar criptografada
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar páginadas em 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT;