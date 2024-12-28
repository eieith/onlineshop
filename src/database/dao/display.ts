import { getConnection } from '../dbconnection';
import { HandmadeItem } from '../model/shop';

export const getAllItems = async (): Promise<HandmadeItem[]> => {
    try {
        // Step 1: Establish the database connection
        const connection = await getConnection();

        // Step 2: Execute the SQL query to fetch all handmade items
        const [rows] = await connection.execute<HandmadeItem[]>(
            'SELECT * FROM  handmade_items',
        );

        // Step 3: Return the rows as HandmadeItem[]
        return rows;
    } catch (error) {
        console.error('Error fetching handmade items:', error);
        throw error; // Re-throw the error for handling at a higher level
    }
};
