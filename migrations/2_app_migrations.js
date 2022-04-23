const DatabaseContract = artifacts.require("DatabaseContract");

module.exports = function (deployer) {
  deployer.deploy(DatabaseContract);
};
