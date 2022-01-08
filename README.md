1. Run yarn

2. Make cocoapods work (option #2)
   https://dev.to/staceypyee/installing-cocoapods-on-m1-macbook-air-big-sur-h0l

3. Put a server config for dev at <root>/dev-server-config.json

```json
{
  "server": {
    "url": "[your-local-network-computer-ip]:3000",
    "cleartext": true
  }
}
```

4. Run web server

```
$ yarn dev
```

5. Run mobile versions (make sure you have your virtual devices setup)

```
$ yarn run android -> choose the device
$ yarn run ios -> choose the device
```
