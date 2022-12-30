require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name rate stereo exact gesture local fringe genuine'; 
let testAccounts = [
"0x9716bbea37fbbe3aded2c0f063d14119c02482e998e7c06feec7fc3deda6b6fa",
"0x9b6b7b807f996c76c70c2ab63456ebf4aab09ca40b970523358faefdd5a2b5e4",
"0x8eabfa13f38d9ad90bba98c16529cce108d7679275fda783a9a84414c9f791e5",
"0x584c5b41875e38a185ff9726a43d9fc1d863c236319476e902b43a48faffdd2e",
"0xf78d24f24a46918c38d3c8ba6129303c8a6e83b8fc9386aa07093e335dce8723",
"0x5562230bb10a9aa34bf792da5acc0083c991268e2b8bd7d19074b9419d56b4cd",
"0xf4275c7a59b001e984b9243c50d2cafa80297fbb06e5f132dc00e497331a0c7c",
"0x133d84ce8cc4db801f20d514d72fd90eb4d1508907c34cdd363c537b349449f9",
"0x2639e8f593d3c9b2986fb3099048804e8e1a6f35a30dba2c7bebc2ba6173cf78",
"0x3d115a3aebc25b9858ca4118e9401786bd2bc6cf582b2c0602e3d4099c60fe26"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


