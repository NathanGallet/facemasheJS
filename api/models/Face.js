/**
 * Face.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
//TODO : shortname + link other photo + video

module.exports = {

    attributes: {
        url: {
            type     : 'string',
            required : true,
            unique   : true
        },
        name: {
            type     : 'string',
            required : true
        },
        rank: {
            type     : 'int',
        },
    },

    beforeValidate: function(input_val, cb){
        var reg_exp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g


        if (!reg_exp.test(input_val.url)) {
            return cb(`url not valid : ${input_val.url}`);
        }
        cb();
    },

    beforeCreate: function(input_val, cb) {
        input_val.rank = 1000;
        cb();
    }
};

