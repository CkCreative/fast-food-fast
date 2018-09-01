const items = [
    {
    id : 1,
    title : 'Food Type 1',
    img : 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 100,
    serves: 1,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},

{
    id : 2,
    title : 'Food Type 2',
    img : 'https://images.pexels.com/photos/459469/pexels-photo-459469.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 114,
    serves: 3,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},

{
    id : 3,
    title : 'Food Type 3',
    img : 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 543,
    serves: 10,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 4,
    title : 'Food Type 4',
    img : 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 450,
    serves: 3,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 5,
    title : 'Food Type 5',
    img : 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 340,
    serves: 7,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 6,
    title : 'Food Type 6',
    img : 'https://images.pexels.com/photos/247685/pexels-photo-247685.png?auto=compress&cs=tinysrgb&h=350',
    price: 570,
    serves: 4,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 7,
    title : 'Food Type 7',
    img : 'https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 920,
    serves: 6,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 8,
    title : 'Food Type 8',
    img : 'https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?auto=compress&cs=tinysrgb&h=350',
    price: 220,
    serves: 1,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 9,
    title : 'Food Type 9',
    img : 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 120,
    serves: 3,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 10,
    title : 'Food Type 10',
    img : 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 130,
    serves: 7,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 11,
    title : 'Food Type 11',
    img : 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 135,
    serves: 4,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 12,
    title : 'Food Type 12',
    img : 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 155,
    serves: 2,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 13,
    title : 'Food Type 13',
    img : 'https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 175,
    serves: 3,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 14,
    title : 'Food Type 14',
    img : 'https://images.pexels.com/photos/629093/pexels-photo-629093.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 195,
    serves: 6,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 15,
    title : 'Food Type 15',
    img : 'https://images.pexels.com/photos/62097/pexels-photo-62097.jpeg?auto=compress&cs=tinysrgb&h=350',
    price: 275,
    serves: 4,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
}
]

let products = document.getElementById('products')

let cards = items.map(({title, description, img, serves, price}) => {
    return `<div class="my-card shaddow-1">
        <div class="card-header">${title}</div>
        <img src="${img}" class="card-img">
        <div class="card-desc">${description} <br>Can serve <b>${serves} </b>person(s).</div>
        <div class="card-action"><div class="card-price">Ksh. ${price}</div><p>Order Now</p></div>
    </div>
    `
}).join('')

products.innerHTML = cards
