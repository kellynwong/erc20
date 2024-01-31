// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OurToken is ERC20 {
    // if I say initial supply is 50, it will be 50 wei
    // initial supply 50e18
    // 50 * 10**18
    constructor(uint256 initialSupply) ERC20("OurToken", "OT") {
        // initialise with 0 token at this point, but after adding the code below, tokens will be minted (initial amount of tokens) and who owns all these tokens
        _mint(msg.sender, initialSupply);
    }
}
