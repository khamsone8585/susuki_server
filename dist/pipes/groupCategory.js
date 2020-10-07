"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [{ $lookup: {
            from: 'products',
            localField: '_id',
            foreignField: 'categoryId',
            as: 'products'
        } },
    { $unwind: {
            path: '$products',
            preserveNullAndEmptyArrays: true
        } },
    { $group: {
            _id: {
                _id: '$_id',
                name: '$cateName',
            },
            products: {
                $push: '$products'
            }
        } }];
