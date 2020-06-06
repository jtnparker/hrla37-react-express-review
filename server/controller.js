const todos = ["Pass the TA", "have a drink celebrating our success", "dont get coronavirus"];

const controller = {
    get: (req, res) => {
        res.status(200).send(todos);
    },
    post: (req, res) => {
        console.log(req.body);
       
        let {todo} = req.body;  // let todo = req.body.todo;
        todos.push(todo);
        // doing something here with req.body. 
        res.status(201).send('posted the item. Successful Post.');
    },
    delete: (req, res) => {
        let index = req.params.index; // let {index} = req.params  
        let deleted = todos.splice(index, 1);
        res.status(202).send(`Deleted todo ${deleted}`);
              
    }

}


module.exports = controller;