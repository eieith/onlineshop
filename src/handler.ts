import { Request, Response } from 'express';
import { getAllItems } from './database/dao/display';


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
