const fs = require('fs');
const path = require('path');

function loadProperties(filePath) {
    const properties = {};

    fs.readFileSync(filePath, 'utf8')
        .split('\n')
        .forEach(line => {
            line = line.trim();

            if (!line || line.startsWith('#')) return;

            const [key, ...value] = line.split('=');
            properties[key.trim()] = value.join('=').trim();
        });

    return properties;
}

const configDir = './properties';
let config = {};

fs.readdirSync(configDir)
    .filter(file => file.endsWith('.properties'))
    .forEach(file => {
        const props = loadProperties(path.join(configDir, file));
        config = { ...config, ...props };
    });
module.exports=config;
// console.log(config);