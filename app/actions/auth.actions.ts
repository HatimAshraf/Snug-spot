'use server'

import {prisma} from '@/app/db/prisma';
import { signAuthToken, setAuthCookie, removeAuthCookie } from '@/app/lib/auth';
import bcrypt from 'bcryptjs';

type ResponseResult = {
  success: boolean;
  message: string;
}

export async function registerUser(prevState: ResponseResult, formData: FormData): Promise<ResponseResult>{
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
  
    if(!name || !email || !password){
      return{
        success: false,
        message: 'Please fill all the fields',
      };
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if(existingUser){
      return{
        success: false,
        message: 'User already exists',
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    const token = await signAuthToken({userId: user.id});
    await setAuthCookie(token);
    return{
      success: true,
      message: 'User created successfully',
    };  
  } catch (error) {
    throw new Error('Failed to register user' + error);
  }
}