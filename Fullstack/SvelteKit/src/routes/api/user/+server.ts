import { json } from '@sveltejs/kit';
import { query } from '$lib/server/db';

// GET /api/user
export async function GET({ url }) {
	// Extract the 'id' query parameter from the URL.
	const id = url.searchParams.get('id');

	try {
		// If no 'id' is provided, fetch all users.
		if (!id) {
			// Execute a SQL query to select all users from the 'users' table.
			// 'query' is assumed to be a function that interacts with your database.
			const result = await query('SELECT * FROM users', []);
			// Return the result (all rows) as a JSON response.
			return json(result.rows);
		}

		// If an 'id' is provided, fetch the user with that specific ID.
		// Execute a SQL query to select the user with the given ID.
		// '$1' is a placeholder for the 'id' value, preventing SQL injection.
		const result = await query('SELECT * FROM users WHERE id = $1', [id]);

		// Check if any user was found with the provided ID.
		if (result.rows.length === 0) {
			// If no user was found, return a 404 (Not Found) error with a message.
			return json({ message: 'User not found' }, { status: 404 });
		}

		// If a user was found, return the first row (the user data) as a JSON response.
		return json(result.rows[0]);
	} catch (error) {
		// If an error occurs during the database query, log the error and return a 500 (Internal Server Error) response.
		console.error('Database error:', error);
		return json({ message: 'Internal server error' }, { status: 500 });
	}
}

// POST /api/user
export async function POST({ request }) {
	try {
		// Parse the JSON data from the request body.
		const { name, email } = await request.json();

		// Check if both 'name' and 'email' are provided in the request.
		if (!name || !email) {
			// If either 'name' or 'email' is missing, return a 400 (Bad Request) error with a message.
			return json({ message: 'Name and email are required' }, { status: 400 });
		}

		// Execute a SQL query to insert a new user into the 'users' table.
		// 'RETURNING *' returns the inserted row, including the generated ID.
		// '$1' and '$2' are placeholders for the 'name' and 'email' values, preventing SQL injection.
		const result = await query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [
			name,
			email
		]);

		// Return the newly created user data as a JSON response with a 201 (Created) status code.
		return json(result.rows[0], { status: 201 });
	} catch (error) {
		// If an error occurs during the database query, log the error and return a 500 (Internal Server Error) response.
		console.error('Database error:', error);
		return json({ message: 'Internal server error' }, { status: 500 });
	}
}
