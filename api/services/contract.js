const ethers = require('ethers')

class Contract {
  constructor (_address, _abi, _provider) {
    this.contract = new ethers.Contract(_address, _abi, _provider)
  }
}

// export default Contract
module.exports = Contract
