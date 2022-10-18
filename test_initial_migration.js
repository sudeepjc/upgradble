const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const MyContract = artifacts.require('MyContract');

module.exports = async function (deployer) {
  const existing = await MyContract.deployed();
  const x_value = await instance.x();
  console.log("Value", x_value);
};