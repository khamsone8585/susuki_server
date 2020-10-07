"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        '$lookup': {
            'from': 'products',
            'localField': '_id',
            'foreignField': 'categoryId',
            'as': 'products'
        }
    }, {
        '$unwind': {
            'path': '$products',
            'preserveNullAndEmptyArrays': true
        }
    }, {
        '$lookup': {
            'from': 'tag',
            'localField': 'products.tagId',
            'foreignField': '_id',
            'as': 'products.tag'
        }
    }, {
        '$unwind': {
            'path': '$products.tag',
            'preserveNullAndEmptyArrays': true
        }
    }, {
        '$group': {
            '_id': {
                '_id': '$_id',
                'name': '$cateName'
            },
            'products': {
                '$push': '$products'
            }
        }
    }, {
        '$project': {
            '_id': 0,
            'id': '$_id._id',
            'name': '$_id.name',
            'products': '$products'
        }
    }
];