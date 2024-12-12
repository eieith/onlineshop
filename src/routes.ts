import { Router } from 'express';
import { bracelectHandler,bracelect2Handler,bracelect3Handler,bracelect4Handler, bracelect5Handler, cartHandler, displayHandler, helloWorldHandler, homepageHandler, necklaceHandler,necklace2Handler,necklace3Handler,necklace4Handler,necklace5Handler,necklace6Handler, reviewHandler, ringHandler,ring1Handler,ring2Handler,ring3Handler,ring4Handler } from './handler';

const router = Router();

router.get('/', homepageHandler);
router.get('/display', displayHandler);
router.get('/cart',cartHandler );
router.get('/necklace',necklaceHandler );
router.get('/necklace2',necklace2Handler );
router.get('/necklace3',necklace3Handler );
router.get('/necklace4',necklace4Handler );
router.get('/necklace5',necklace5Handler );
router.get('/necklace6',necklace6Handler );
router.get('/bracelect',bracelectHandler);
router.get('/bracelect2',bracelect2Handler);
router.get('/bracelect3',bracelect3Handler);
router.get('/bracelect4',bracelect4Handler);
router.get('/bracelect5',bracelect5Handler);
router.get('/ring',ringHandler );
router.get('/ring',ringHandler );
router.get('/ring2',ring2Handler );
router.get('/ring3',ring3Handler );
router.get('/ring4',ring4Handler );
router.get('/review',reviewHandler );

export default router;