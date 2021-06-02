# Autenticação

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/auth**
2. ✅ Valida dados obrigatórios
3. ✅ Valida a **veracidade das credenciais** de acesso
4. ✅ Retorna um **token** de acesso

> ## Exceções

1. ✅ Retorna erro **400** se a validação de dados falhar
2. ✅ Retorna erro **401** se as **credenciais de acesso** são inválidas
3. ⛔️ Retorna erro **500** se der erro desconhecido na autenticação