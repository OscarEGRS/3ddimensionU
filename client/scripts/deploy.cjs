
const hre = require("hardhat");

async function main() {
  const Pagar = await hre.ethers.getContractFactory("pagar"); //fetching bytecode and ABI
  const pagar = await Pagar.deploy(); //creating an instance of our smart contract

  await pagar.deployed();//deploying your smart contract

  console.log("Deployed contract address:",`${pagar.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});