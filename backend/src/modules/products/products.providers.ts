import { Connection } from 'mongoose';
import { ProductSchema } from './schemas/product.schema';

export const productsProviders = [
    {
        provide: 'ProductModelToken',
        useFactory: (connection: Connection) => connection.model('Products', ProductSchema),
        inject: ['DbConnectionToken'],
    },
];
