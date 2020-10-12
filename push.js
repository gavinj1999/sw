var push = require('web-push')

let vapidKeys = {
    publicKey: 'BAvdqKP7orkaot9_i--QYlACMr1o0jnlPEdp7WspKbAWDHYP6Xct46JZ5_XXgw5tejPXFB9WdKVLneccPvacJZw',
    privateKey: 'HcmFoeQyH2MmHJU-zga2ys6K1R-BQpb5ZWrqJUMTw3k'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotifications(sub, test)