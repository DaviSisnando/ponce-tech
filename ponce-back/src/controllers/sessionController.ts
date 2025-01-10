import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {findUser} from '../models/userModel';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401).json({
      error: 'Email and password are required.',
    });
    return
  }

  try {
    const user = await findUser(email);

    if (!user) {
      res.status(401).json({
        error: 'Invalid email or password.',
      });
      return 
    }
    bcrypt.compare(password, user.password, (err, match) => {
      if (match) {
        const token = jwt.sign(
          { id: user.id },
          process.env.JWT_SECRET as string,
          { expiresIn: '7d' }
        );
        res.json({
          user: {
            id: user.id,
            email: user.email,
          },
          token,
        });
        return
      } else {
        res.status(401).json({ error: 'Invalid email or password.' });
        return
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
    });
    return 
  }

}


export { login };
