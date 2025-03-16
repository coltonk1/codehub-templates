import { json, type RequestEvent } from '@sveltejs/kit';
import { authenticate } from '$lib/server/middleware';
import type { UserPayload } from '$lib/server/auth';

// GET /api/protected
export async function GET(event: RequestEvent) {
	// Pass the entire event object to the authentication function.
	// The 'event' object contains information about the incoming request, including headers, cookies, and more.
	const authResult = await authenticate(event);

	// Check if authentication failed.
	if (authResult) {
		// If authentication failed, 'authResult' likely contains a 401 Unauthorized response.
		return authResult;
	}

	// Check if the user is authenticated and the user's information is available in 'event.locals.user'.
	// 'event.locals' is a place to store data that is specific to the current request.
	if (!event.locals.user) {
		// If 'event.locals.user' is not set, it means the user is not authenticated.
		return json({ message: 'Unauthorized' }, { status: 401 });
	}

	// Type assertion to ensure that 'event.locals.user' is of type 'UserPayload'.
	// This tells TypeScript that we're confident the user data conforms to the 'UserPayload' interface.
	// This is necessary because typescript might not be able to infer the type automatically in some cases.
	const user = event.locals.user as UserPayload;

	// If authentication was successful, return a success message along with the user's data.
	return json({ message: 'Welcome to the protected route!', user: user });
}
