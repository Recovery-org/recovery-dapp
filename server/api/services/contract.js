const ethers = require('ethers');
const abi = require('../../abi/abi.json');

class Contract {
    constructor(_address, _provider) {
        this.contract = new ethers.Contract(_address, abi, _provider);
    }
}

export default Contract;
