import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PlatformUser } from "@enterprise-commerce/core/platform/types"
import { createUser } from "../models/User"

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const newUser: PlatformUser = {
    id: null,
    email,
    password
  };

  try{
    //call createUser, creates user and stores it into the db

    const createdUser = await createUser(newUser);
    
    //successful status code after user creation
    res.status(201).json(createdUser);
  } catch (error:any) {
    //handle errors
    console.error("Registration error: ", error);
  }

};