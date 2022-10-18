
// const { deployProxy } = require('@openzeppelin/truffle-upgrades');

// const MyContract = artifacts.require('MyContract');

// module.exports = async function (deployer) {
//   const instance = await deployProxy(MyContract, [42], { deployer });
//   console.log('Deployed', instance.address);
// };

const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const MyContract = artifacts.require('MyContract');
const MyContractV2 = artifacts.require('MyContractV2');

module.exports = async function (deployer) {
  const existing = await MyContract.deployed();
  const x = await existing.x();
  console.log(x.toString());
  const instance = await upgradeProxy(existing.address, MyContractV2, { deployer });
  console.log("Upgraded", instance.address);
  await instance.setX(100);
  const y = await instance.x();
  console.log(y.toString());
};