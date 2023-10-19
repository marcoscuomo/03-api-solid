# App

GymPass style app.

## RFs (Requisitos funcionais) - Funcionalidades da aplicação
- [ ] Deve ser possível de cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuários buscar academias próximas;
- [ ] Deve ser possível o usuários buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de negocio) - Caminhos que cada requisito pode tomar
- [ ] O usuário não deve poder se cadastrar com e-mail duplicado; 
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-ins se estiver a menos de 100m da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-ins só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não funcionais)
- [ ] A senha do usuário precisa estar criptografada
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar páginadas em 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT;