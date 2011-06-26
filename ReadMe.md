# Installation

     npm install hook.io-webhook

# Usage

## Command Line

    hookio-webhook
    
## Programmatically

```javascript
var Webhook = require('../lib/webhook').Webhook;

var webhookServer = new Webhook( { name: 'webhook-server', options: { port: 9001 } });

webhookServer.on('ready', function(){
  console.log('http webhook server started on port 9001');
});

webhookServer.start();
```

*Starts up a webserver which takes all incoming HTTP requests and emits the request headers and body to your hook.io cloud*