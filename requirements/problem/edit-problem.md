# Edição de problema

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **PUT** na rota **/api/problems/:problemId**
2. ✅ Valida dados obrigatórios
3. ✅ Verifica se o **problema** a ser editado realmente existe
4. ✅ Verifica se o **usuario** é dono do **problema**
5. ✅ **Atualizada** o problem com os novos dados
6. ✅ Retorna **200**, com os dados atualizados

> ## Exceções

1. ✅ Retorna erro **400** se a validação de dados falhar
2. ✅ Retorna erro **403** se o **usuário** não for dono do problem
3. ✅ Retorna erro **500** se der erro desconhecido na atualização