import { Response, Request, NextFunction } from "express";
import { Express } from "express-serve-static-core";

export let configureTodo = (app: Express) => {
    app.get('/api/todo', _get);
    // app.post('/api/todo', _post);
    // app.put('/api/todo', _put);
    // app.delete('/api/todo', _delete);
}

let _get = (req: Request, res: Response) => {
    res.json(
        [
            { done: true, description: 'TODO #1' },
            { done: true, description: 'TODO #2' }
        ]
    );
}

// let _post = (req: Request, res: Response) => {
    
// }

// let _put = (req: Request, res: Response) => {
    
// }

// let _delete = (req: Request, res: Response) => {
    
// }