var bip39 = require("bip39");
var ark = require('arkjs');
var argv = require('minimist')(process.argv.slice(2));

if (argv['n']) {
    ark.crypto.setNetworkVersion({
        mainnet: 23,
        testnet: 52,
        devnet: 30
    }[argv['n']]);
}

for (i = 0; i < argv['a']; i++) {
    var passphrase = bip39.generateMnemonic();
    var address = ark.crypto.getAddress(ark.crypto.getKeys(passphrase).publicKey);

    console.log("Address: " + address + " | Passphrase: " + passphrase);
}
