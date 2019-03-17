tasks = require('../controllers/tasks.js');

module.exports = function(app){
    app
    .get('/task', function(req,res){
        tasks.displayAll(req,res);
    })

    .get('/task/:id', function(req,res){
        tasks.display(req,res);
    })

    .post('/task/new', function(req,res){
        tasks.create(req,res);
    })

    .put('/task/:id/update', function(req,res){
        tasks.update(req,res)
    })

    .delete('/task/:id/delete', function(req,res){
        tasks.delete(req,res)
    })
}