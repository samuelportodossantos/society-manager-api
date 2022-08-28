import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function defaultMiddleware(req: Request, res: Response, next: NextFunction){

    const Unauthorized = {
        message: 'Unauthorized',
        data: []
    }

    const authorization = req.headers?.authorization
    if ( !authorization || authorization === 'Bearer undefined' ) {
        res.status(401).json(Unauthorized)
        return
    }

    const token = authorization?.replace('Bearer ', '') || ''
    const secret = process.env.APP_SECRET || ''
    jwt.verify(token, secret, (err) => {
        if (err !== null) {
            res.status(401).json(Unauthorized)
            return
        }
        next()
    })
}