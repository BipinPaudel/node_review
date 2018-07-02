var mongoose = require('mongoose');

var bookModel =mongoose.Schema({
	title:{
		type:String
	},
	author:{
		type:String
	},
	genre:{type:String},
	read:{type:Boolean,deault:false}
});

module.exports = mongoose.model('Book',bookModel);