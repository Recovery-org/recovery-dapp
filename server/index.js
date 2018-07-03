import Network from './api/services/network';
import Contract from './api/services/contract';

import './common/env';
import Server from './common/server';
import routes from './routes';

export default new Server()
  .router(routes)
  .listen(process.env.PORT);

// Adresse et ABI du contrat "simple"
const simpleContractAddress = '0x252327c7b5cC74841948c9c5e2E768B021133590';
const simpleAbi = require('./abi/abi.json');

// Adresse et ABI de la factory
const factoryContractAddress = '0x49903870ab72e591618321d2026f78d1ef4ec6a8';
const factoryAbi = require('./abi/factory_v1_abi.json');

const network = new Network();
const simpleContract = new Contract(simpleContractAddress, simpleAbi, network.infuraProvider);// eslint-disable-line

// console.log(network);
// console.log(simpleContract.contract);
const factoryContract = new Contract(factoryContractAddress, factoryAbi, network.infuraProvider);// eslint-disable-line
// console.log(factoryContract);
