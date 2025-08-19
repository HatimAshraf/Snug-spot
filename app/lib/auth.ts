import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.AUTH_SECRET_KEY);
const cookiename = 'auth-token'

export async function signAuthToken(payload: any){
  try {
    const token = await new SignJWT(payload)
      .setProtectedHeader({alg:"HS256"})
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);
    return token;
    
  } catch (error) {
    throw new Error('Failed to sign token' + error);
  }
}

export async function verifyAuthToken<T>(token:string):Promise<T>{
  try {
    const {payload} = await jwtVerify(token, secret);
    return payload as T;
  } catch (error) {
    throw new Error('Failed to verify token' + error);
  }
}

export async function setAuthCookie(token:string){
  try {
    const cookieStore = await cookies()
    cookieStore.set(cookiename, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  } catch (error) {
    throw new Error('Failed to set auth cookie' + error);
  }
}

export async function getAuthCookie(){
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(cookiename)?.value;
    return token;
  } catch (error) {
    throw new Error('Failed to get auth cookie' + error);
  }
}

export async function removeAuthCookie(){
  try {
    const cookieStore = await cookies();
    cookieStore.delete(cookiename);
  } catch (error) {
    throw new Error('Failed to remove auth cookie' + error);
  }
}