const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("OurToken", () => {
  let ourToken;
  let deployer;
  let initialSupply = "1000" + "0".repeat(18);
  beforeEach(async () => {
    // Setup accounts
    [deployer] = await ethers.getSigners();

    // Deploy contract
    const OurToken = await ethers.getContractFactory("OurToken");
    ourToken = await OurToken.deploy(initialSupply);
  });

  describe("Deployment", () => {
    // We cannot use the standard test below because there is no explicit owner variable or function in ERC20 contract
    // it("Sets the right owner", async () => {
    //   const owner = await ourToken.owner();
    //   expect(owner).to.equal(deployer.address);
    // });

    it("Assigns the total supply of token to the owner", async () => {
      const deployerBalance = await ourToken.balanceOf(deployer.address);
      const contractSupply = await ourToken.totalSupply();
      expect(contractSupply).to.equal(deployerBalance);
    });
  });
});
