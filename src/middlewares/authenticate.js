import { verifyToken } from '../utils/token.js';

const authenticate = (req, res, next) => {
    try {
        const autheHeader = req.headers.authorization;
        if (!autheHeader || !autheHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Authentification failed" });
        }
        // extract token en devisant le header d'authentification avec split et en prenant le deuxieme element du tableau
        const token = autheHeader.split(" ")[1];
        const decodedToken = verifyToken(token);
        req.userId = decodedToken.userId;
        next();

    } catch (error) {
        res.status(401).json({ message: "Authentification failed" });
        message: 'Authentification failed';
    }
};

export default authenticate;