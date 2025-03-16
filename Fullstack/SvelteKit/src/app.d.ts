// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user?: {
				id: string; // Updated to string
				email: string; // added email for completeness
				name: string;
				password: string;
				// Add other user properties here if needed
				[key: string]: any;
			};
		}
	}
}

export {};
