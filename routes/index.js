var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var user = require('../models/user').user;

mongoose.connect('mongodb://localhost/hello-mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express4.0' });
});

/* login */
router.get('/login', function(req, res){
    res.render('login',{title:'logiin。。。'});
});
/* logout */
router.get('/logout', function(req, res){
    res.render('logout',{title:'logout。。。'});
});

/* homepage */
router.post('/homepage', function(req, res){
  var query_doc = {name: req.body.username, password: req.body.password};
    (function(){

        user.count(query_doc, function(err, doc){
            console.log('------------------------:',query_doc,doc);
          if(err){
              console.log(query_doc.name + ": login failed in " + new Date());
              res.redirect('/');
            }else{
                console.log(query_doc.name + ": login sucesse " + new Date());
              res.render('homepage', {title: query_doc.name});
            }
        })
   })(query_doc)
});
module.exports = router;
