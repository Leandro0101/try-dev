# Carregamento de problemas mais populares

> ## Caso de sucesso
1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/problems** esperando um parâmetro **page** no query param, podendo receber um parâmetro **intervalInit** e/ou **intervalFinal** (onde ambos são anos no formato de 4 dígitos) no body para fins de filtragem 
2. ✅ Valida parâmetros
3. ✅ **Carrega** problemas mais populares de acordo com os parâmetros passados: se vier sem **intervalo**, são carregados os problemas mais populares até o ano atual. Se vier apenas com **intervalInit**, são carregados os problemas mais populares a partir do valor/ano passado. Se vier apenas com ***intervalFinal**, são carregados os problemas mais populares até o valor/ano passado. Se vier ambos os parâmetros, o filtro ocorré no intervalo passado. 
5. ✅ Retorna **200** com os problemas mais populares carregados

> ## Exceções

1. ✅ Retorna erro **400** se a validação de dados falhar
3. ✅ Retorna erro **500** se der erro desconhecido no carregamento