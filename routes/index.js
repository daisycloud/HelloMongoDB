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
    Task.find({}, function(err, docs){
        res.render('task/index', {title:'Todos view',docs: docs})
    })
});

router.get('/tasks/new', function(req, res){
    res.render('task/new',{title:'New Task!'});
});

router.post('/tasks',  function(req, res){

    var todo = new Task({'task':req.body.aaa});
    todo.save(function(err){
        if(!err){
            res.redirect('/tasks/index');
        }else{
            res.redirect('/tasks/new')
        }
    })
});

router.get('/tasks/:id/edit', function(req, res){
    Task.findById(req.params.id, function(err, doc){
        res.render('task/edit', {
            title: 'Edit Task View',
            task: doc
        });console.log('3333333333333333333333');
    });
});

router.put('/tasks/:id', function(req, res){ console.log('44444444444444444');
    //Task.findById(req.params.id, function(err, doc){
    //    doc.task = req.body.task.task;
    //    doc.save(function(err){
    //        if(!err){
    //             res.redirect('/tasks/index');
    //        }else{
    //            //err handling
    //        }
    //    })
    //});
});

router.del('/tasks/:id', function(req, res){
    Task.findById('req.params.id', function(err, doc){
        if(!doc) return next(new NotFound('Document not found'));
        doc.remove(function(){
            res.redirect('/tasks/index');
        })
    });
});

module.exports = router;
