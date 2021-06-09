# Marcando um problema como resolvido

> ## Caso de sucesso
1. ✅ Recebe uma requisição do tipo **PATCH** na rota **/api/problems/:problemId**
2. ✅ Valida parâmetros
3. ✅ Verifica se o **ID** pertence a algum problema cadastrado
4. ✅ Verifica se o **usuario** é dono do **problema**
4. ✅ **Modifica** o status do problema para **RESOLVED**
5. ✅ Retorna **200** sem conteúdo

> ## Exceções

1. ✅ Retorna erro **400** se a validação de dados falhar
2. ✅ Retorna erro **404** se o **problema** não existir
2. ✅ Retorna erro **403** se o **usuário** não for dono do problem
3. ✅ Retorna erro **500** se der erro desconhecido no carregamento