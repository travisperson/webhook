var Hook = require('hook.io').Hook,
    http = require('http'),
    util = require('util');

var Webhook = exports.Webhook = function(options){
  for(var o in options){
    this[o] = options[o];
  }
  Hook.call(this);

  var self = this;

  self.on('ready', function(){

     console.log('ready fired1');
     http.createServer(function(req, res){

        var body = '';

        req.on('data', function(data){
          body += data;
        });

        req.on('end', function(){
          self.emit('o.request', {
           request: {
             url: req.url
           },
           body: body 
          })
          res.end();
        });

      }).listen(9000);


  });
  
};

// Webhook inherits from Hook
//util.inherits(Webhook, Hook);

Webhook.prototype.__proto__ = Hook.prototype;
