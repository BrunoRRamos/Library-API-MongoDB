import express from "express";
import booksRoutes from "./booksRoutes.js";
import authorsRoutes from "./authorsRoutes.js";
import publishCompaniesRoutes from "./publishCompaniesRoutes.js";

const routes = (app) => {

    //GET da pagina inicial
    app.route('/').get((req, res) => {
        res.status(200).send({title: "Batata"})
    });

    //Armazena as rotas diponiveis
    app.use(
        express.json(),
        booksRoutes,
        authorsRoutes,
        publishCompaniesRoutes
    )
}

export default routes;