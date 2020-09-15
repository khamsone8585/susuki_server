export default [{
    $lookup: {
        from: 'District',
        localField: '_id',
        foreignField: 'provinceId',
        as: 'districts'
    }
}, {
    $unwind: {
        path: '$districts',
        preserveNullAndEmptyArrays: false
    }
}, {
    $group: {
        _id: {
            _id: '$_id',
            name: '$name',
            sortOrder: '$sortOrder'
        },
        districts: {
            $push: {
                _id: '$districts._id',
                name: '$districts.name'
            }
        }
    }
}, {
    $sort: {
        '_id.sortOrder': 1
    }
}, {
    $project: {
        _id: '$_id._id',
        name: '$_id.name',
        districts: 1
    }
}]