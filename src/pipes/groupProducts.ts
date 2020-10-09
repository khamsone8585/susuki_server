export default [
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
          'preserveNullAndEmptyArrays': false
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
          'preserveNullAndEmptyArrays': false
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
]