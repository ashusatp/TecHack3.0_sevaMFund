require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  networks: {
    goerli: {
      url: process.env.ENDPOINT_URL,
      accounts: [process.env.DEPLOYER_KEY]
    }
  },
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  }
}
