import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export default async(req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const JWT_SECRET = process.env.JWT_SECRET ?? ""
  if(!authHeader) {
    res.status(400).json({ error: 'Authorization not provided.' });
    return 
  }

  const[_, authToken] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(authToken, JWT_SECRET) as JwtPayload;
    req.params.userId = decoded.id;
    console.log(decoded)
    next();
    return 
  } catch(e) {
    res.status(401).json({ error: 'Invalid token' });
    return
  }
}