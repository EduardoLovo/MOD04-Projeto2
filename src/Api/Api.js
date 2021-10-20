import { JwtHandler } from "../jwt-handler/JwtHandler";

export const Api = {
    baseUrl: "http://localhost:3000",

    // EndPoint - Jogos
    readAllUrl: () => Api.baseUrl + "/jogos",

    readByIdUrl: id => Api.baseUrl + "/jogos/" + id,

    createJogosUrl: () => Api.baseUrl + "/jogos",

    updateUrl: id => Api.baseUrl + "/jogos/" + id,

    deleteUrl: id => Api.baseUrl + "/jogos/" + id,

    // EndPoint - Usuarios
    createUsuariosUrl: () => Api.baseUrl + "/usuarios",

    readByIdUsuariosUrl: id => Api.baseUrl + "/usuarios/" + id,

    // EndPoint - Perfis
    readAllPerfisUrl: () => Api.baseUrl + "/perfis",

    // EndPoint - Generos
    readAllGenerosUrl: id => Api.baseUrl + "/generos",

    createGeneroUrl: () => Api.baseUrl + "/generos",

    // EndPoint - Auth
    authHeader: () => ({
        Authorization: "Bearer " + JwtHandler.getJwt(),
    }),
    
    // EndPoint - Login
    loginUrl: () => Api.baseUrl + "/login",



    //GET
    buildApiGetRequest: (url, auth) =>
        fetch(url, {
        method: "GET",
        headers: auth ? new Headers(Api.authHeader()) : undefined
    }),
    
    // POST
    buildApiPostRequest: (url, body, auth) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
                ...(auth ? Api.authHeader() : {}),
            }),
            body: JSON.stringify(body),
        }),

    // PATCH
    buildApiPatchRequest: (url, body, auth) =>
    fetch(url, {
        method: "PATCH",
        headers: new Headers({
            "Content-type": "application/json",
            ...(auth ? Api.authHeader() : {}),

        }),
        body: JSON.stringify(body),
    }),

    // DELETE
    buildApiDeleteRequest: (url, auth) =>
    fetch(url, {
        method: "DELETE",
        headers: auth ? new Headers(Api.authHeader()) : undefined
    }),
};
