# Carregamento de problemas de um usuário

> ## Caso de sucesso
1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/users/:userId/problems** esperando um parâmetro **page** no query param
2. ✅ Valida parâmetros
3. ✅ Verifica se o **ID de usuário** passado pertence a um usuário cadastrado
4. ✅ **Carrega** os dados dos problemas de acordo com a página passada
5. ✅ Retorna **200**, com os dados carregados

> ## Exceções

1. ✅ Retorna erro **400** se a validação de dados falhar
2. ✅ Retorna erro **404** se o **usuário** não existir
3. ✅ Retorna erro **500** se der erro desconhecido no carregamento