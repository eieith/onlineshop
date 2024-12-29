import { db } from '../dbconnection';
import { HandmadeItem } from '../model/shop';

export const getAllItems = async (): Promise<HandmadeItem[]> => {
    try {
        // Step 1: Execute the SQL query to fetch all handmade items using the pool directly
        const [rows] = await db.execute<HandmadeItem[]>(
            'SELECT * FROM handmade_items'
        );
        
        // Step 2: Return the rows as HandmadeItem[]
        return rows;
    } catch (error) {
        console.error('Error fetching handmade items:', error);
        throw error; // Re-throw the error for handling at a higher level
    }
};

