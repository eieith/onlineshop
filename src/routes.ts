import { Router } from 'express';
import {
     showProducts,
    reviewHandler,
    getPopularItemsHandler,
    addToCartHandler,
    checkoutHandler,
    getAllCartItemsHandler
   
   
} from './handler';

const router = Router();
router.get('/', getPopularItemsHandler); 
router.get('/display', showProducts);
// Add item to cart
router.post('/cart', addToCartHandler);

// Checkout the cart
router.post('/checkout', checkoutHandler);

// Get all items in the cart
router.get('/cart', getAllCartItemsHandler);

router.get('/review', reviewHandler);

export default router;
