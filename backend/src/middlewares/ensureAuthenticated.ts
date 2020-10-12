import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/Auth'

async function enseureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authorization = request.headers.authorization;

    if (!authorization) {
        response.status(401).json({ error: 'token is missing' })
    }

    const [, token] = authorization ? authorization.split(' ') : [];

    try {
        const decoded = verify(token, authConfig.jwt.secret)

        console.log(decoded);

        return next();

    } catch (error) {
        response.status(401).json({ error: 'invalid token' })
    }
}

export default enseureAuthenticated;