import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const config: HardhatUserConfig = {
	solidity: {
		version:'0.8.17',
		settings: {
			optimizer: {
			  enabled: true,
			  runs: 10000,
			},
		},
	},
	gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
    },
};

export default config;
