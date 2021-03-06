/**
* Message.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    body : { type: 'text' },

    dateSent : { type: 'datetime' },

    chatSession: {
      model: 'chatSession'
    },

    sender: {
      model: 'user'
    }
  },

  beforeCreate: function(values, cb) {

    values.dateSent = new Date();
    cb();
  }
};

