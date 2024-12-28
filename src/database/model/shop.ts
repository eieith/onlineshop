import { RowDataPacket } from 'mysql2';

export interface HandmadeItem extends RowDataPacket {
    id?: number; // Optional: ID of the product
    name: string; // Name of the handmade item
    descript: string; // Description of the item
    price: number; // Price of the item
    img_url?: string; // Optional: Image URL 1
    img_url2?: string; // Optional: Image URL 2
    img_url3?: string; // Optional: Image URL 3
}
