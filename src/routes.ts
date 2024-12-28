import { Router } from 'express';
import {
     showProducts,
    reviewHandler,
    getPopularItemsHandler,
    cartHandler,
   
   
} from './handler';

const router = Router();
router.get('/', getPopularItemsHandler); 
router.get('/display', showProducts);
router.get('/cart', cartHandler);
router.get('/review', reviewHandler);

export default router;
