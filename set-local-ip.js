const fs = require('fs');
const path = require('path');
const ip = require('local-ip');
const LOCAL_IP = ip();

const fileContent = {
  server: {
    url: `http://${LOCAL_IP}:3000`,
    cleartext: true,
  },
};

fs.writeFileSync(path.resolve(__dirname, './dev-server-config.json'), JSON.stringify(fileContent, null, 2));
