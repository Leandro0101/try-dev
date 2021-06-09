# Carregamento de problema pelo ID

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/problems/:problemId**
2. ✅ Valida parâmetros
3. ✅ Verifica se o **ID** pertence a algum problem cadastrado
4. ✅ **Carrega** os dados do problema
5. ✅ Retorna **200**, com os dados carregados

> ## Exceções

1. ✅ Retorna erro **400** se a validação de dados falhar
2. ✅ Retorna erro **404** se o **problema** não existir
3. ✅ Retorna erro **500** se der erro desconhecido no carregamento