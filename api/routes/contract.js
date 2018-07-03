// Initialise network
const Network = require('../services/network.js')
const network = new Network()

// Contract information
const factoryAbi = require('../abi/factory_v1_abi.json')
const factoryContractAddress = '0x49903870ab72e591618321d2026f78d1ef4ec6a8'

// Initialise contract
const Contract = require('../services/contract.js')
const factoryContract = new Contract(factoryContractAddress, factoryAbi, network.infuraProvider)

module.exports = function (router) {
  // Simple route exposing the contract in a json format
  router.get('/contract', function (req, res, next) {
    res.json(factoryContract)
  })
}
