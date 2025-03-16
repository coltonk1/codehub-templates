import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

// EXPIRATION_TIME should be defined elsewhere (e.g., as an environment variable).
const EXPIRATION_TIME = '1h';

// Define the structure of the user payload that will be encoded in the JWT.
export interface UserPayload {
	id: string;
	email: string;
	name: string;
	password: string; // Consider excluding sensitive data like password from the payload in production.
}

// Function to generate a JSON Web Token (JWT) for a given user payload.
export function generateToken(user: UserPayload): string {
	// jwt.sign() creates a JWT.
	// - user: The payload to encode in the token.
	// - JWT_SECRET: A secret key used to sign the token. This should be kept secure.
	// - { expiresIn: EXPIRATION_TIME }: Options for the token, including its expiration time.
	return jwt.sign(user, JWT_SECRET, { expiresIn: EXPIRATION_TIME });
}

// Function to verify a JWT and return the user payload if the token is valid.
export function verifyToken(token: string): UserPayload | null {
	try {
		// jwt.verify() decodes and verifies the token.
		// - token: The JWT to verify.
		// - JWT_SECRET: The secret key used to sign the token.
		// - as UserPayload: Type assertion to ensure the decoded payload matches the UserPayload interface.
		return jwt.verify(token, JWT_SECRET) as UserPayload;
	} catch (error) {
		// Handle errors during token verification, such as invalid or expired tokens.
		console.error('Invalid token:', error);
		return null; // Return null if the token is invalid.
	}
}
