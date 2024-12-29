import { Request, Response } from 'express';
import { getAllItems } from './database/dao/display';

import { AddToCart, GetAllCartItems, CheckoutCart } from './database/dao/cart';


// Handler to add an item to the cart
export const addToCartHandler = async (req: Request, res: Response): Promise<void> => {
    const { itemId, quantity } = req.body;

    if (!itemId || !quantity) {
        res.status(400).json({ message: 'Item ID and quantity are required.' });
        return;
    }

    try {
        await AddToCart(itemId, quantity);
        res.status(200).json({ message: 'Item added to cart!' });
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ message: 'Failed to add item to cart.' });
    }
};

// Handler to fetch all items in the cart
export const getAllCartItemsHandler = async (_req: Request, res: Response): Promise<void> => {
    try {
        const cartItems = await GetAllCartItems();
        res.render('cart', { cartItems }); // Render cart items on the 'cart' view
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ message: 'Failed to fetch cart items.' });
    }
};

// Handler to process the checkout
export const checkoutHandler = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.body;

    if (!userId) {
        res.status(400).json({ message: 'User ID is required for checkout.' });
        return;
    }

    try {
        await CheckoutCart(userId);
        res.status(200).json({ message: 'Checkout successful!' });
    } catch (error) {
        console.error('Error during checkout:', error);
        res.status(500).json({ message: 'Failed to process checkout.' });
    }
};

export const showProducts= async (req: Request, res: Response) => {
    try {
        const products = await getAllItems(); // Fetch products from the database
        res.render('display', { products });
    } catch (error) {
        console.error('Error retrieving products:', error);
        res.status(500).send('An error occurred while loading products.');
    }
};

// Handler to get popular items for homepage
export const getPopularItemsHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await getAllItems(); // Fetch all products
        const popularItems = products.filter(product => product.isPopular); // Filter only popular items

        res.render('index', { products: popularItems }); // Pass 'products' to match EJS variable
    } catch (error) {
        console.error('Error fetching popular items:', error);
        res.status(500).send('Internal server error');
    }
};

export const reviewHandler = (_: Request, res: Response) => {
    res.render('review');
};
export const cartHandler = (req: Request, res: Response) => {
    res.render('cart'); // Renders the cart.ejs view
};
