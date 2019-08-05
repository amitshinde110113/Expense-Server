const mongoose=require('mongoose');

const groupSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
     name:{type:String,
        required:true,
        
    },
    users:[{type:Object}],
    expenses:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Expense' }],
    role:{type:String}

});



module.exports=mongoose.model('Group',groupSchema);