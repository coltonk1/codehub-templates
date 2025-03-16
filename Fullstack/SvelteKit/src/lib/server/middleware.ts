// src/lib/server/middleware.ts

import { json, type RequestEvent } from '@sveltejs/kit';
import { verifyToken } from '$lib/server/auth';

export async function authenticate(event: RequestEvent): Promise<Response | void> {
	// Retrieve the session token from the cookies.
	const token = event.cookies.get('sessionToken');

	// If no session token is found, return an unauthorized response.
	if (!token) {
		return json({ message: 'Unauthorized' }, { status: 401 });
	}

	// Verify the session token using the verifyToken function (assumed to be defined elsewhere).
	// This function should decode the token and return the user information.
	const user = verifyToken(token);

	// If the token verification fails (e.g., invalid token, expired token), return an unauthorized response.
	if (!user) {
		return json({ message: 'Unauthorized' }, { status: 401 });
	}

	// If the token is valid, store the user information in the 'locals' object of the event.
	// This allows the user information to be accessible in subsequent handlers (e.g., load functions, endpoints).
	event.locals.user = user;

	// Indicate successful authentication by returning void.
	// This signifies that the authentication was successful, and the request should continue.
	return;
}
