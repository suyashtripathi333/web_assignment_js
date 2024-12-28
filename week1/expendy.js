/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/



const list =[{
    id: 2,
    timestamp: 1656163200000,
    price: 15,
    category: 'Food',
    itemName: 'Burger',
},
{
    id: 3,
    timestamp: 1656249600000,
    price: 8,
    category: 'Food',
    itemName: 'Sandwich',
},
{
    id: 4,
    timestamp: 1656336000000,
    price: 12,
    category: 'Food',
    itemName: 'Pasta',
},
{
    id: 5,
    timestamp: 1656422400000,
    price: 20,
    category: 'Drink',
    itemName: 'Wine',
},
{
    id: 6,
    timestamp: 1656508800000,
    price: 5,
    category: 'Drink',
    itemName: 'Coffee',
},
{
    id: 7,
    timestamp: 1656595200000,
    price: 3,
    category: 'Drink',
    itemName: 'Tea',
},
{
    id: 8,
    timestamp: 1656681600000,
    price: 18,
    category: 'Food',
    itemName: 'Steak',
},
{
    id: 9,
    timestamp: 1656768000000,
    price: 7,
    category: 'Food',
    itemName: 'Salad',
},
{
    id: 10,
    timestamp: 1656854400000,
    price: 2,
    category: 'Drink',
    itemName: 'Water',
},
{
    id: 11,
    timestamp: 1656940800000,
    price: 6,
    category: 'Snack',
    itemName: 'Chips',
}
];

const arr=[]

function totalExpenditure(list){

    for(let i=0;i<list.length;i++){
        arr.push({
            category:list[i].category,
            price:list[i].price
        })

    }

    return arr;
}


const result=totalExpenditure(list);
console.log(result);