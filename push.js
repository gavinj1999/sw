var push = require('web-push')

let vapidKeys = {
    publicKey: 'BAvdqKP7orkaot9_i--QYlACMr1o0jnlPEdp7WspKbAWDHYP6Xct46JZ5_XXgw5tejPXFB9WdKVLneccPvacJZw',
    privateKey: 'HcmFoeQyH2MmHJU-zga2ys6K1R-BQpb5ZWrqJUMTw3k'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cLbAAb4a9UY:APA91bF1rnvRcpitMWKyHvZrgLGo9_3V2YMGyoRgsCLVo85r0l_Ewd-pJqFoQ-Lkzcxksj2RGCDXugnnwc3LAyPSIRwk6Yjg7cRMNdquNeknuIujJbZiy9LXjU1vWOY2mPNi8u8zoVtM",
    "expirationTime": null,
    "keys": {
        "p256dh": "BAXjlfHZ2JAN4iN5cw4KebgyT49_3xwKpZaVO9TdfNWwbsorG0FkTM9dqw9v5cun4fLRqa5C_-JLLv8zvjoX4Rc",
        "auth": "rnfl5HiTsC6XyYbmJ-XPNQ"
    }
};

push.sendNotifications(sub, 'test message')