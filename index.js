import fs from "fs";
import path from "path";
import qrcode from "qrcode";

// Path to your WireGuard config file
const configFilePath = process.argv[2] || "./conf-sample.conf";

// Derive output PNG filename from the config file name (e.g. ivon.conf → ivon.png)
// Always output in the current working directory, regardless of the input file location
const outputFilePath = path.join(
    process.cwd(),
    `${path.basename(configFilePath, path.extname(configFilePath))}.png`
);

// Read the config file
fs.readFile(configFilePath, 'utf8', (err, config) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Trim any extra whitespace
    config = config.trim();

    // Generate and save QR code as PNG
    qrcode.toFile(outputFilePath, config, {
        type: 'png',
        width: 300,  // Adjust size as needed
    }, (err) => {
        if (err) {
            console.error('Error generating QR code:', err);
            return;
        }
        console.log(`QR code generated and saved as ${outputFilePath}`);

    });
});
