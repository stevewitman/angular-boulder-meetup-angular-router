import * as express from 'express';
import {Application} from "express";
import {getAllCategories, getCategoryByUrl} from "./get-categories.route";
import {searchVarieties} from "./search-varieties.route";
import {loginUser} from './login.route';
import {findVarietyDetail} from "./get-variety-detail.route";

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/categories').get(getAllCategories);

app.route('/api/categories/:id').get(getCategoryByUrl);

app.route('/api/varieties').get(searchVarieties);

app.route('/api/login').post(loginUser);

app.route('/api/variety-details').get(findVarietyDetail);

const httpServer = app.listen(9001, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});
