import jwt from 'jsonwebtoken';
export const getDecodedToken = (authorization) => {
    const authHeader =authorization;
    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken;
}