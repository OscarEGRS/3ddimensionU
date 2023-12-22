require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */


const { GOERLI_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [PRIVATE_KEY] 
    },
  },
};