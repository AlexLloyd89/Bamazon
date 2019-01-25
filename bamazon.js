var purArr = [];

//NPM requirements
var mysql = require('mysql');
var inquirer = require('inquirer');
require("dotenv").config();

//mySQL database connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.my_password,
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    mainShop()
});

function mainShop() {
    connection.query('SELECT * FROM `products`',
        function (err, res) {
            if (err) throw err;
            console.log('------------------ITEM SHOP------------------')
            for (var i = 0; i < res.length; i++) {
                display = '';
                display += 'Item ID: ' +
                    res[i].id + ' // ';
                display += 'Item name: ' + res[i].product_name + ' // ';
                display += 'Type of Product: ' + res[i].department_name + ' // ';
                display += 'Price: ' + res[i].price + ' // ';
                display += 'Quantity: ' + res[i].stock_quantity + ' // ';
                console.log(display)
            }
            purchase()
        })

}

function purchase() {
    inquirer.prompt([{
            type: 'input',
            name: 'product',
            message: 'Please enter the Item ID for the product you wish to purchase',
            validate: function (input) {
                if (isNaN(input) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like?',
            validate: function (input) {
                if (isNaN(input) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'continue',
            message: 'Want to purchase something else?',
            choices: ['Yes',
                'No'
            ]
        }
    ]).then(function (input) {
        var query = `Update products set stock_quantity = stock_quantity - ${input.quantity} WHERE id = ${input.product}`;
        connection.query(query, function (err, res) {
            var out = `SELECT product_name from products WHERE id = ${input.product}`
            connection.query(out, function (err, res) {
                purArr.push(`You purchased ${input.quantity} ${res[0].product_name} \n`);
                // console.log(purArr.toString())
            })

            if (input.continue === 'Yes') {
                purchase();
            } else {
                console.log('Thank you for shopping')
                console.log(purArr.toString())
                connection.end()
            }

            return input
        })
        // }).then(input => {
        //     // var out = `SELECT product_name from products WHERE id = ${input.product}`
        //     // connection.query(out, function (err, res) {
        //     //     purArr.push(`You purchased ${input.quantity} ${res[0].product_name} \n`);
        //     // })
        //     // // console.log(purArr.toString())
        //     // return input
        // }).then(input => {
        //     if (input.continue === 'Yes') {
        //         purchase();
        //     } else {
        //         console.log('Thank you for shopping')
        //         console.log(purArr.toString())
        //         connection.end()
        //     }
    })
}