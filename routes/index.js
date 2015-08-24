var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Task = require('../models/Task').Task;

mongoose.connect('mongodb://localhost/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express4.0' });
});

/* tasks */
router.get('/tasks/index', function(req, res){
    Task.find({}, function(err, docs){ console.log('-----------------',docs);
        res.render('task/index', {title:'Todos view',docs: docs})
    })
});

router.get('/tasks/new', function(req, res){    console.log('222222222222222222222222222222');

    res.render('task/new',{title:'New Task!'});
});

router.post('/tasks',  function(req, res){

    console.log('==================',req.body.aaa);
    var todo = new Task({'task':'0000'});
    todo.save(function(err){
        if(!err){
            res.redirect('/tasks');
        }else{
            res.redirect('/tasks/new')
        }
    })
});

module.exports = router;
