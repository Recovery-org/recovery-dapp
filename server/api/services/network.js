// const appRoot = require('app-root-path');
// const config = require(appRoot + 'config.json');

const providers = require('ethers').providers;
const config = require('../../../config.json');


class Network {
    constructor() {
        this.network = providers.networks.ropsten;
        this.infuraProvider = new providers.InfuraProvider(this.network, config.infuraApiToken);
        this.etherscanProvider = new providers.EtherscanProvider(this.network);

        this.fallbackProvider = new providers.FallbackProvider([
            this.infuraProvider,
            this.etherscanProvider
        ]);
    }
}

export default Network;
