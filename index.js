import fs from "fs";
import qrcode from "qrcode";

// Path to your WireGuard config file
const configFilePath = './conf-sample.conf';

// Read the config file
fs.readFile(configFilePath, 'utf8', (err, config) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Trim any extra whitespace
    config = config.trim();

    // Generate and save QR code as PNG
    qrcode.toFile('wireguard_qr.png', config, {
        type: 'png',
        width: 300,  // Adjust size as needed
    }, (err) => {
        if (err) {
            console.error('Error generating QR code:', err);
            return;
        }
        console.log('QR code generated and saved as wireguard_qr.png');
        console.log('Config content:');
        console.log(config);
    });
});
