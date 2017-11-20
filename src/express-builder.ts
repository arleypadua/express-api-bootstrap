import * as express from "express";
import * as bodyParser from "body-parser";
import { Express } from "express-serve-static-core";

const lusca = require('lusca');

export class ExpressBuilder {
    private _app: Express;
    constructor() {
        this._app = express();
    }

    public useDefaultPortConfiguration(): ExpressBuilder {
        this._app.set('port', process.env.PORT || 3000);
        return this;
    }

    public useJson(): ExpressBuilder {
        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: true }));

        return this;
    }

    public configureRoutes(): ExpressBuilder {
        // TODO: add your routes
        return this;
    }

    public useCors(): ExpressBuilder {
        this._app.use(lusca.xframe("SAMEORIGIN"));
        this._app.use(lusca.xssProtection(true));
        return this;
    }

    public build(): Express {
        return this._app;
    }
}