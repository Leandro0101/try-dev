# Cadastro de usuário

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/users**
2. ✅ Valida dados obrigatórios
3. ✅ Valida a conformidade entre **password** e **passwordConfirmation**
4. ✅ Verifica se o **email** fornecido já existe na base de dados
5. ✅ Gera um **hash de senha** a partir da senha fornecida
6. ✅ **Cria** um usuário com os dados fornecidos
7. ✅ Retorna **201**, com os dados cadastrados, exceto a **senha**

> ## Exceções

1. ✅ Retorna erro **400** se a validação de dados falhar
2. ✅ Retorna erro **403** se o **email** provido já estiver na base de dados
3. ✅ Retorna erro **500** se der erro desconhecido no cadastro