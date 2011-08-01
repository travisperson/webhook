# Installation

     npm install hook.io-webhook -g

# Usage

     hookio-webhook

*Starts up a webserver which takes all incoming HTTP requests and emits the request headers and body to your hook.io cloud*

    
## Example

```javascript
#! /usr/bin/env node
var Webhook = require('../lib/webhook').Webhook;

var webhookServer = new Webhook({
  name: 'webhook-server',
  port: 9001,
  debug: true
});

webhookServer.on('hook::ready', function(){

  webhookServer.log(this.name, 'http server listening', "9001");

  webhookServer.on('*::request', function(data) {

    webhookServer.log(this.name, event, data);

  });

});

webhookServer.start();
```

