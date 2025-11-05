const menu = require('../data/pizzas');

const connection = require('../database/connection');


//index
function index(req, res) {

    const sql = 'SELECT * FROM pizzas';
    connection.query(sql, (err, result) => {
        if(err) return res.status(500).json({error: err.message})
        console.log(err);
        console.log(result);
        res.json('Show all pizzas');

    })

    

    // let filtered_menu = menu;

    // if (req.query.ingredient){
    //     filtered_menu = menu.filter(pizza => pizza.ingredients.includes(req.query.ingredient))
    // }

    // console.log(filtered_menu);
    // res.json(filtered_menu)

}

//show
function show(req, res) {

    const { id } = req.params;
    console.log(id);

    const sql = 'SELECT * FROM pizzas WHERE id = ?'
    console.log(sql);
    connection.query(sql, [id], (err, results) => {
        console.log(err);
        console.log(results);

        const pizzaObj = results[0]
        console.log(pizzaObj);

        res.json(pizzaObj)
    })
    
    

    // const pizza = menu.find(item => item.id === parseInt(id));
    // console.log(pizza);

    // if (!pizza) {

    //     return res.status(404).json({ error: 'Pizza not found', message: 'Resource not found' });
    // }

    // res.json(pizza);
}

//store
function store(req, res) {
    console.log(req.body);

    const newPizzaId = menu[menu.lenght - 1].id + 1;
    const {name, image, ingredients} = req.body;

const newPizza = {
    id: newPizzaId,
    name,
    image,
    ingredients
    };

    console.log(newPizza);
    menu.push(newPizza);

    res.status(201).json(newPizza);
}

//update
function update(req, res) {
    const { id } = req.params;
    console.log(id);

    const pizza = menu.find(item => item.id === parseInt(id));
    console.log(pizza);

    if (!pizza) {
        return res.status(404).json({ error: 'Pizza not found', message: 'Resource not found' });
    }

    const {name, image, ingredients} = req.body;

    pizza.name = name;
    pizza.image = image;
    pizza.ingredients = ingredients;

    res.json(pizza);
}

//modify
function modify (req, res) {
    res.send('Partial update fo a specific pizza with ID: ' + req.params.id);
}

//destroy
function destroy(req, res) {
    const { id } = req.params;
    console.log(id);

    const pizza = menu.find(item => item.id === parseInt(id));
    console.log(pizza);

    if (!pizza) {
        return res.status(404).json({ error: 'Pizza not found', message: 'Resource not found' });
    }

    menu.splice(menu.indexOf(pizza), 1);
    console.log(menu);

    res.sendStatus(204);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}