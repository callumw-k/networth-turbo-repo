import type { getUserResponseSchema } from 'express-schema';
import type { z } from 'zod';
export const getUser = async () => {
	const userResponse = await fetch('http://localhost:8080/user/9');
	if (!userResponse.ok) throw new Error('Error retrieving user');
	return (await userResponse.json()) as z.infer<typeof getUserResponseSchema>;
};
