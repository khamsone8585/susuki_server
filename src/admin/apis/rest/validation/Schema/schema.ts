import Joi from '@hapi/joi'

export const blogSchema = Joi.object({
    title: Joi.string().required(),
    image: Joi.string().required(),
    descriptions: Joi.string().required(),
    categoryId: Joi.string().required()
})
export const distributorSchema = Joi.object({
    districtId: Joi.string().required(),
    // map: Joi.array().items(
    //     Joi.object({
    //         lat: Joi.number(),
    //         lng: Joi.number()
    //     })
    // ),
    image: Joi.string().required(),
    dealerCompany: Joi.string().required(),
    village: Joi.string().required(),
    telephone: Joi.string().required(),
    facebook: Joi.string().required()
})
export const productsSchema = Joi.object({
    categoryId: Joi.string().required(),
    colorPic: Joi.array().items(
        Joi.object({
            imageName: Joi.string().required(),
            colorName: Joi.string().required()
        })
    ),
    name: Joi.string().required(),
    price: Joi.number().required(),
    show: Joi.boolean().required(),
    tagId: Joi.string().required(),
    info: Joi.array().items(
        Joi.object({
            key: Joi.string().required(),
            value: Joi.string().required()
        })
    )
})
export const userSchema = Joi.object({
    picture: Joi.string().required(),
    firstName: Joi.string().required().message('Please enter your firstName'),
    lastName: Joi.string().required().message('Please enter your lastName'),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})
export const bannerSchema = Joi.object({
    image: Joi.string().required(),
    url: Joi.string()
})
export const slideSchema = Joi.object({
    image: Joi.string().required(),
    url: Joi.string()
})

