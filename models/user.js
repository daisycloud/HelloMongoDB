/**
 * Created by yyzeng on 2015/8/12.
 */
/*
* 用作实体类映射数据库的users集合
* */
var mongoose = require('mongoose');
var Schema = mongoose.Schema; //创建模型
var userScheMa = new Schema({
    name: String,
    password: String
}); // 定义了一个新的模型，但是此模式还未和users集合有关联

exports.user = mongoose.model('users', userScheMa); //  与users集合关联
