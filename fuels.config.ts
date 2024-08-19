import { createConfig } from 'fuels';
import dotenv from 'dotenv';

dotenv.config({
	path: ['.env']
});


const fuelCorePort = +(process.env.PUBLIC_FUEL_NODE_PORT as string) || 4000;

export default createConfig({
  contracts: [
    "sway-programs/Contract-contract",
    "sway-programs/Registry-contract",
  ],
  output: "./scripts/sway-api",
  fuelCorePort
});

/**
 * Check the docs:
 * https://docs.fuel.network/docs/fuels-ts/fuels-cli/config-file/
 */
