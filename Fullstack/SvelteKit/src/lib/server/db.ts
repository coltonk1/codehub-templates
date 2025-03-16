import { Pool, type QueryResult, type QueryResultRow } from 'pg';
import {
	DATABASE_URL,
	DATABASE_USER,
	DATABASE_HOST,
	DATABASE_NAME,
	DATABASE_PASSWORD,
	DATABASE_PORT
} from '$env/static/private';

// Declare a variable to hold the PostgreSQL connection pool. It's initially undefined.
let pool: Pool | undefined;

// Function to create a PostgreSQL connection pool.
function createPool(): Pool {
	// Check if the pool already exists. If it does, return it. This implements a singleton pattern.
	if (!pool) {
		try {
			// Check if the DATABASE_URL environment variable is set.
			if (process.env.DATABASE_URL) {
				// If DATABASE_URL is set, create a pool using the connection string.
				pool = new Pool({
					connectionString: process.env.DATABASE_URL,
					ssl: { rejectUnauthorized: false } // Allows self-signed certificates (for development/testing).
				});
				console.log('Connected to PostgreSQL using DATABASE_URL.');
			} else {
				// If DATABASE_URL is not set, create a pool using individual connection parameters.
				pool = new Pool({
					user: process.env.DATABASE_USER,
					host: process.env.DATABASE_HOST,
					database: process.env.DATABASE_NAME,
					password: process.env.DATABASE_PASSWORD,
					port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 5432, // Parse port or default to 5432.
					ssl: { rejectUnauthorized: false } // Allows self-signed certificates (for development/testing).
				});
				console.log('Connected to PostgreSQL using individual parameters.');
			}
		} catch (error) {
			// Handle errors during pool creation.
			console.error('Error creating PostgreSQL pool:', error);
			throw error; // Re-throw the error to prevent the application from continuing with a broken pool.
		}
	}
	// Return the created or existing pool.
	return pool;
}

// Export a function to get the database pool instance.
// This ensures that the pool is created only once.
export const getPool = (): Pool => createPool();

// Export a generic query function with proper typing.
// This function takes a SQL query string and optional parameters, and returns a Promise of QueryResult.
export const query = async <T extends QueryResultRow = QueryResultRow>(
	text: string,
	params?: any[]
): Promise<QueryResult<T>> => {
	// Get a client from the pool.
	const client = await getPool().connect();
	try {
		// Execute the query.
		return await client.query<T>(text, params);
	} finally {
		// Release the client back to the pool, regardless of whether the query succeeded or failed.
		client.release();
	}
};

// Export a function to properly close the pool when shutting down the application.
export async function endPool(): Promise<void> {
	// Check if the pool exists.
	if (pool) {
		// Close the pool.
		await pool.end();
		// Set the pool variable to undefined to allow for re-creation if needed.
		pool = undefined;
		console.log('PostgreSQL pool closed.');
	}
}
