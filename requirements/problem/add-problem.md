# Cadastro de problema

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/problems**
2. ✅ Valida dados obrigatórios
3. ✅ Verifica se o **ID do usuário** recebido realmente existe
4. ✅ **Cria** um novo problema com os dados fornecidos
5. ✅ Retorna **201**, com os dados cadastrados

> ## Exceções

1. ✅ Retorna erro **400** se a validação de dados falhar
2. ✅ Retorna erro **404** se o **ID** não estiver cadastrado na base de dados
3. ✅ Retorna erro **500** se der erro desconhecido no cadastro