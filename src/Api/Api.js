export const Api = {
    baseUrl: "http://localhost:3000",

    readAllUrl: () => Api.baseUrl + "/usuarios",
    
    jogoUrl: () => Api.baseUrl + "/jogos",

    generoUrl: () => Api.baseUrl + "/generos",
    
    perfilUrl: () => Api.baseUrl + "/perfis",


    buildApiGetRequest: (url) =>
        fetch(url, {
        method: "GET",
        }),
};
