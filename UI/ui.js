const items = [
    {
    id : 1,
    title : 'Food Type 1',
    img : 'https://images.pexels.com/photos/7658/food-pizza-box-chalkboard.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 100,
    serves: 1,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},

{
    id : 2,
    title : 'Food Type 2',
    img : 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 114,
    serves: 3,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},

{
    id : 3,
    title : 'Food Type 3',
    img : 'https://',
    price: 543,
    serves: 10,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 4,
    title : 'Food Type 4',
    img : 'https://',
    price: 450,
    serves: 3,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 5,
    title : 'Food Type 5',
    img : 'https://',
    price: 340,
    serves: 7,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 6,
    title : 'Food Type 6',
    img : 'https://',
    price: 570,
    serves: 4,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 7,
    title : 'Food Type 7',
    img : 'https://',
    price: 920,
    serves: 6,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 8,
    title : 'Food Type 8',
    img : 'https://',
    price: 220,
    serves: 1,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 9,
    title : 'Food Type 9',
    img : 'https://',
    price: 120,
    serves: 3,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 10,
    title : 'Food Type 10',
    img : 'https://',
    price: 130,
    serves: 7,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 11,
    title : 'Food Type 11',
    img : 'https://',
    price: 135,
    serves: 4,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 12,
    title : 'Food Type 12',
    img : 'https://',
    price: 155,
    serves: 2,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 13,
    title : 'Food Type 13',
    img : 'https://',
    price: 175,
    serves: 3,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 14,
    title : 'Food Type 14',
    img : 'https://',
    price: 195,
    serves: 6,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
},
{
    id : 15,
    title : 'Food Type 15',
    img : 'https://',
    price: 275,
    serves: 4,
    description: 'some long description outlining various benefits etc.',
    tags: ['tag1','tag2','tag3']
}
]

let products = document.getElementById('products')

let cards = items.map(({title, description, serves, price}) => {
    return `<div class="my-card shaddow-1">
        <div class="card-header">${title}</div>
        <img src="https://via.placeholder.com/800x400" class="card-img">
        <div class="card-desc">${description} <br>Can serve <b>${serves} </b>person(s).</div>
        <div class="card-action"><div class="card-price">Ksh. ${price}</div><p>Order Now</p></div>
    </div>
    `
}).join('')

products.innerHTML = cards
