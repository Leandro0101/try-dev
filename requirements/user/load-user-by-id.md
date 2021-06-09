# Carregar perfil de usuário através do seu id

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/users/:userId**
2. ✅ Valida parâmetros
3. ✅ Valida a existência do **id** fornecido
4. ✅ Retorna os dados do usuário, exceto a senha

> ## Exceções

1. ✅ Retorna erro **400** se a validação de dados falhar
2. ✅ Retorna erro **404** se o **id** for inexistente
3. ✅ Retorna erro **500** se der erro desconhecido no carregamento