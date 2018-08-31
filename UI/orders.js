
let orders = [
    {
        order_number : 3,
        quantity : 3,
        food : 'Food Type 3',
        total: 543,
        paid: "Yes",
        status: 'delivered',
    },
    {
        order_number : 3,
        quantity : 3,
        food : 'Food Type 3',
        total: 543,
        paid: "Yes",
        status: 'delivered',
    },
    {
        order_number : 3,
        quantity : 3,
        food : 'Food Type 3',
        total: 543,
        paid: "Yes",
        status: 'delivered',
    },
    {
        order_number : 3,
        quantity : 3,
        food : 'Food Type 3',
        total: 543,
        paid: "Yes",
        status: 'delivered',
    }
]

let all_orders = document.getElementById('orders')

let headers = `<table>
<tr>
    <th>Order No</th>
    <th>Food</th>
    <th>Quantity</th>
    <th>Total</th>
    <th>Paid</th>
    <th>Status</th>
</tr>`

let ending = `  
</table>`;
let table = orders.map(({order_number, quantity, food, total, paid, status}) => {
    return `
        <tr>
            <td>${order_number}</td>
            <td>${food}</td>
            <td>${quantity}</td>
            <td>${total}</td>
            <td>${paid}</td>
            <td>${status}</td>
        </tr> 
    `
}).join('')

let final_table = headers+table+ending;

all_orders.innerHTML = final_table;