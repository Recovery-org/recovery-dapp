import './common/env';
import Server from './common/server';
import routes from './routes';

export default new Server()
  .router(routes)
  .listen(process.env.PORT);

//Adresse du premier contrat de Typs (pas la factory)
const simpleContractAddress = '0x252327c7b5cC74841948c9c5e2E768B021133590';

import Network from './api/services/network.js';
import Contract from './api/services/contract.js';
const network = new Network();
const contract = new Contract(simpleContractAddress, network.infuraProvider)

console.log(network);
console.log(contract.contract);
