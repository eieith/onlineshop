import { Request, Response } from 'express';

export const helloWorldHandler = (req: Request, res: Response) => {
    res.send('Hello, World! ko jack');
};
export const homepageHandler = (_ : Request , res: Response) => {
    res.render('index');
}
export const displayHandler = (_ : Request , res: Response) => {
    res.render('display');
}
export const cartHandler = (_ : Request , res: Response) => {
    res.render('cart');
}
export const necklaceHandler = (_ : Request , res: Response) => {
    res.render('necklace');
}
export const necklace2Handler = (_ : Request , res: Response) => {
    res.render('necklace2');
}
export const necklace3Handler = (_ : Request , res: Response) => {
    res.render('necklace3');
}
export const necklace4Handler = (_ : Request , res: Response) => {
    res.render('necklace4');
}
export const necklace5Handler = (_ : Request , res: Response) => {
    res.render('necklace5');
}
export const necklace6Handler = (_ : Request , res: Response) => {
    res.render('necklace6');
}
export const bracelectHandler = (_ : Request , res: Response) => {
    res.render('bracelect');
}
export const bracelect2Handler = (_ : Request , res: Response) => {
    res.render('bracelect2');
}
export const bracelect3Handler = (_ : Request , res: Response) => {
    res.render('bracelect3');
}
export const bracelect4Handler = (_ : Request , res: Response) => {
    res.render('bracelect4');
}
export const bracelect5Handler = (_ : Request , res: Response) => {
    res.render('bracelect5');
}
export const ring1Handler = (_ : Request , res: Response) => {
    res.render('ring');
}
export const ringHandler = (_ : Request , res: Response) => {
    res.render('ring');
}
export const ring2Handler = (_ : Request , res: Response) => {
    res.render('ring2');
}

export const ring3Handler = (_ : Request , res: Response) => {
    res.render('ring3');
}
export const ring4Handler = (_ : Request , res: Response) => {
    res.render('ring4');
}
export const reviewHandler = (_ : Request , res: Response) => {
    res.render('review');
}