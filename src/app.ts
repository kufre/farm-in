import express from 'express';
import cookieParser from 'cookie-parser';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import logger from 'morgan';
import apiRoutes from '../src/shared/routes/api.routes';
import webRoutes from '../src/shared/routes/web.routes';
const app = express();

app.use(expressLayouts);
app.use('/', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

apiRoutes(app);
webRoutes(app);
export default app;
