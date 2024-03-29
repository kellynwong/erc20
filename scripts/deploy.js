// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat"); // hardhat runtime environment

async function main() {
  let ourToken;
  let initialSupply = "1000" + "0".repeat(18); // "50" + "0".repeat(18) is a way to represent 50 * 10**18 in JavaScript, creating a string with 50 followed by 18 zeros. This represents 50 units of your token, considering 18 decimal places. This way, when you input this value into your contract, it understands it as 50 whole tokens, not 50 wei (the smallest unit in Ethereum, analogous to cents in dollars or pence in pounds).

  // Setup accounts
  [deployer] = await ethers.getSigners();

  // Deploy contract
  const OurToken = await ethers.getContractFactory("OurToken");
  ourToken = await OurToken.deploy(initialSupply);
  console.log(`Deployed OurToken contract at: ${ourToken.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
