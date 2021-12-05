require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture strategy dash spider uncle hundred light army gate'; 
let testAccounts = [
"0xa96339a9af1dd1a5fbcd38486c6148273383f122193e5ec64dd8881304f7b9c9",
"0x362c27829876df1c4c9e474db9d2b9c493bdc8d44cb016423b22fa8a3b707919",
"0xb74c0946c792db87812816c4e00886d8b24e9941a767c4c4c4194597623801ae",
"0x421ac789319a8e89642c6fc23e4efcc4a44a1f9aedf967018061f0c7c8815907",
"0x5e970592ade979f828f6391674d1ab0e0ca2d7c4332d0836ab545b8dc8bf87b5",
"0x6a2c5c3c94f3736820e95c908855d738152551526efc82ecee4a9a80daa21bff",
"0x8ab871668b75d66463977e3da13d5eadcc1e937b07916af74c584520a7ddc9d1",
"0x4aea23bb43a9fc5738204da62a77b17b854dfafe8975ac70a9c85af5de750d6f",
"0x40797efbbee18ff2d340b12ae5b18c627dd25104a179d8247a01ed56dfcdcc90",
"0x238a3183c5fcdbf728e7df58d9ba7486e1d6a84d1d45f08d8f2df89040b23caf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

