import fs from "fs";
import path from "path";
import qrcode from "qrcode";
import minimist from "minimist";

// Parse cli arguments (ignoring the first 2: node + script)
const argv = minimist(process.argv.slice(2));

// config file path is the first non-option argument, defaulting to "./conf-sample.conf"
const configFilePath = argv._[0] || "./conf-sample.conf";

// DNS value is optional and will override the DNS line in the config if provided
const dnsOverride = argv.dns || null;

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

    // if --dns is provided, replace the DNS line in the config
    if (dnsOverride) {
        config = config.replace(
            /^(DNS\s*=\s*).*$/mi,
            `$1${dnsOverride}`
        );
        console.log(`DNS overridden with: ${dnsOverride}`);
    }

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
