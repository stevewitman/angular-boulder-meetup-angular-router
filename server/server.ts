import * as express from 'express';
import {Application} from "express";
import {getAllCategories, getCategoryByUrl} from "./get-categories.route";
// import {searchLessons} from "./search-lessons.route";
// import {saveCourse} from './save-course.route';
import {loginUser} from './login.route';
// import {findLessonDetail} from "./get-lesson-detail.route";

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/categories').get(getAllCategories);

app.route('/api/categories/:id').get(getCategoryByUrl);

// app.route('/api/lessons').get(searchLessons);

// app.route('/api/courses/:id').put(saveCourse);

app.route('/api/login').post(loginUser);

// app.route('/api/lesson-details').get(findLessonDetail);

const httpServer = app.listen(9001, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});



