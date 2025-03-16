import { json, type RequestEvent } from '@sveltejs/kit';
import { generateToken } from '$lib/server/auth';
import { query } from '$lib/server/db';
import bcrypt from 'bcrypt';

// POST /api/login
export async function POST({ request, cookies }: RequestEvent) {
	try {
		// Extract email and password from the request body (JSON format).
		const { email, password } = await request.json();

		// Query the database to find the user by email.
		// Selecting only id, email, and password for security.
		const userResult = await query('SELECT id, email, password FROM users WHERE email = $1', [
			email
		]);

		// Check if a user with the provided email exists.
		if (userResult.rows.length === 0) {
			// If no user found, return 401 Unauthorized with an error message.
			return json({ message: 'Invalid credentials' }, { status: 401 });
		}

		// Get the user data from the database result.
		const user = userResult.rows[0];

		// Securely compare the provided password with the stored hashed password using bcrypt.
		const passwordMatch = await bcrypt.compare(password, user.password);

		// Check if the passwords match.
		if (!passwordMatch) {
			// If passwords don't match, return 401 Unauthorized with an error message.
			return json({ message: 'Invalid credentials' }, { status: 401 });
		}

		// Create a payload for the JWT containing user information.
		// Only include necessary information to minimize exposure.
		const payload = { id: user.id, email: user.email, name: user.name, password: user.password };

		// Generate a JWT using the payload.
		const token = generateToken(payload);

		// Set the JWT as an HttpOnly cookie to enhance security.
		// HttpOnly: Prevents client-side JavaScript from accessing the cookie.
		// sameSite: 'strict': Prevents the cookie from being sent with cross-site requests.
		// secure: true in production, false in development.
		// path: '/': Makes the cookie available for all paths on the domain.
		// maxAge: Sets the cookie's expiration time (1 hour).
		cookies.set('sessionToken', token, {
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			path: '/',
			maxAge: 60 * 60 // 1 hour
		});

		// Return a success message as a JSON response.
		return json({ message: 'Login successful' });
	} catch (error) {
		// Handle any errors that occur during the login process.
		console.error('Login error:', error);
		// Return 500 Internal Server Error with an error message.
		return json({ message: 'Internal server error' }, { status: 500 });
	}
}
