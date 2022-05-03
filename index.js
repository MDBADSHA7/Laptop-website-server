const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Laptop werehouse server running')
});

const products = [

    { id: 1, name: 'Dell-g5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9N4qYUtM4A_bd1cq59Q8KqWjYBv1weviHhQ&usqp=CAU', discription: 'It is Dell brand laptop,ut has 256GB SSD and 1TB HDD,windos 10.', price: '36000', quantity: 1, supplier: 'AR Telecom', sold: '3 pice' },

    { id: 2, name: 'hp-Pavilion 15', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyK1kH2OzENdRYYsH1kpLRSZEqntXzC_gYA&usqp=CAU', discription: 'It is hp brand laptop,it has 256GB SSD and 1TB HDD, it can roted 360 degree and it has two color.', price: '48000', quantity: 1, supplier: 'AR Telecom', sold: '1 pice' },

    { id: 3, name: 'Asus-core i7', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1mLDyOwACHatgagSjvUm7XRQtb5IvrEaGA&usqp=CAU', discription: 'It is Asus brand laptop,it has 512GB SSD and 1TB HDD.It is 6 generation laptop', price: '100000', quantity: 1, supplier: 'AR Telecom', sold: '4 pice' },

    { id: 4, name: 'Acer-core i3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4FLphMuogKbkU-V66-JAF_ZQViegvdLIoQ&usqp=CAU', discription: 'It is Acer brand laptop,it has no SSD only has 1TB HDD, it is black colour,It has 14 inche normal HD display.', price: '33000', quantity: 1, supplier: 'AR Telecom', sold: '2 pice' },

    { id: 5, name: 'Acer-core i5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIor2s9R6KRf3KJ8K2RtiDiDh_c32y__d6RA&usqp=CAU', discription: 'It is Acer brand laptop,it has 128GB SSD and 500GB HDD,It has keybord backlight.', price: '40000', quantity: 1, supplier: 'AR Telecom', sold: '3 pice' },

    { id: 6, name: 'Asus-core i7', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFqKQ2wPouOJNNCH2v00OMeCHrVZLWCgk5Q&usqp=CAU', discription: 'It is Asus brand laptop,it has 512GB SSD and 1TB HDD,It is blue color,it has 16.5 inche display and itr is screen touch laptop.', price: '80000', quantity: 1, supplier: 'AR Telecom', sold: '7 pice' },

    { id: 7, name: 'HP-core i7', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JzP68d_KEP4XUK-QRlFazXK638D9TLr32A&usqp=CAU', discription: 'It is HP brand laptop,it has 512GB SSD and 1TB HDD,It is 10 genaration laptop.', price: '92000', quantity: 1, supplier: 'AR Telecom', sold: '5 pice' },

    { id: 8, name: 'Asus-core i7', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKAy9In9mV1x88JJ5TYBbtBmaDUWM2Fv2YA&usqp=CAU', discription: 'It is Asus brand laptop,it has 512GB SSD and 1TB HDD,It is white color.', price: '100000', quantity: 1, supplier: 'AR Telecom', sold: '2 pice' },

    { id: 9, name: 'Asus-core i7', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5n9374wKpXPep5cuMrin5_TheWMLBcLOvQ&usqp=CAU', discription: 'It is Asus brand laptop,it has 512GB SSD and 1TB HDD,It is ass color.', price: '76000', quantity: 1, supplier: 'AR Telecom', sold: '1 pice' },

    { id: 10, name: 'HP-core i7', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcWGbd9eY3mCdMvMTNaT6jV1q2MQ6sfw5CaQ&usqp=CAU', discription: 'It is HP brand laptop,it has 512GB SSD and 1TB HDD,It is 10 generation laptop.', price: '88000', quantity: 1, supplier: 'AR Telecom', sold: '1 pice' },

    { id: 11, name: 'Dell-core i5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzRp2yGJMXjlP2QNl4Z_ud4vOFf0GUZy1Tg&usqp=CAU', discription: 'It is Dell brand laptop,it has 128GB SSD and 1TB HDD,It is black color.', price: '55000', quantity: 1, supplier: 'AR Telecom', sold: '4 pice' },

    { id: 12, name: 'Acer-core i7', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlExwCEV-dUpjjuz8Uo0JB7CxmjSTQIHr0jQ&usqp=CAU', discription: 'It is Acer brand laptop,it has 512GB SSD and 1TB HDD,It is white color.', price: '80000', quantity: 1, supplier: 'AR Telecom', sold: '1 pice' }
]
app.get('/products', (req, res) => {
    res.send(products)
})

app.listen(port, () => {
    console.log('code is running', 5000)
})
