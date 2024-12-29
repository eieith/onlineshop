import { db } from '../dbconnection';  // Import the db connection pool
import { HandmadeItem } from '../model/shop';

// Add an item to the cart
export const AddToCart = async (itemId: number, quantity: number): Promise<void> => {
    try {
        // Insert the item into the cart, assuming 'amount' is calculated later
        await db.query(`INSERT INTO cart (itemId, quantity) VALUES (?, ?)`, [itemId, quantity]);
    } catch (error) {
        console.error('Error adding item to cart:', error);
        throw error;  // Re-throw the error to be handled higher up
    }
};

// Get all items from the cart
export const GetAllCartItems = async (): Promise<HandmadeItem[]> => {
    try {
        const [rows] = await db.execute<HandmadeItem[]>(
            'SELECT c.*, i.name, i.price FROM cart c JOIN handmade_items i ON c.itemId = i.id'
        );
        return rows;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error; // Re-throw the error for handling at a higher level
    }
};

// Process the checkout
export const CheckoutCart = async (userId: number): Promise<void> => {
    try {
        // Select all cart items for the user
        const [rows] = await db.execute(
            'SELECT c.*, i.name, i.price FROM cart c JOIN handmade_items i ON c.itemId = i.id WHERE c.userId = ?',
            [userId]
        );
        
        // Here, you can process the checkout (like charging, order creation, etc.)

        // After processing, clear the cart
        await db.query('DELETE FROM cart WHERE userId = ?', [userId]);
    } catch (error) {
        console.error('Error during checkout:', error);
        throw error;  // Re-throw the error for handling at a higher level
    }
};

// Example for getting cart items (with userId filter if necessary)
export const getCartItems = async (userId: number): Promise<HandmadeItem[]> => {
    try {
        const [rows] = await db.execute<HandmadeItem[]>(
            'SELECT c.*, i.name, i.price FROM cart c JOIN handmade_items i ON c.itemId = i.id WHERE c.userId = ?',
            [userId]
        );
        return rows;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error; // Re-throw the error for handling at a higher level
    }
};
