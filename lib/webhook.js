var Hook = require('hook.io').Hook,
    http = require('http'),
    util = require('util');

var Webhook = exports.Webhook = function(options){

  for (var o in options) {
    this[o] = options[o];
  }

  Hook.call(this);

  var self = this;

  // on ready, start up the httpServer
  self.on('ready', function(){
    self._startHTTPServer();
  });
  
};

// Webhook inherits from Hook
util.inherits(Webhook, Hook);

Webhook.prototype._startHTTPServer = function(){
  
    var self = this;
  
    http.createServer(function(req, res){

        var body = '';

        // 
        //  Buffer up all the body data from incoming request
        //
        req.on('data', function(data){
          body += data;
        });

        //
        // On the end of the request, emit a hook.io message with HTTP payload
        //
        req.on('end', function(){
          self.emit('o.request', {
           request: {
             url: req.url
           },
           body: body 
          });
          res.end('{"message":"OK"}');
        });

      }).listen(self.options.port);
};