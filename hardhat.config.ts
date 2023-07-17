import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import { resolve } from 'path'
import { config as dotenvConfig } from 'dotenv'
dotenvConfig({ path: resolve(__dirname, './.env') })
export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    arbitrumRinkeby: {
      url: `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    arbitrum: {
      url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    optimismKovan: {
      url: `https://optimism-kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    bnb: {
      url: `https://bsc-dataseed.binance.org/`,
    },
    "base-goerli": {
      url: `https://goerli.base.org/`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    pulse: {
      url: `https://rpc.pulsechain.com/`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    base: {
      url: `https://developer-access-mainnet.base.org/`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // apiKey: process.env.ETHERSCAN_API_KEY,
    apiKey: {
      // Basescan doesn't require an API key, however
      // Hardhat still expects an arbitrary string to be provided.
      "base-goerli": "PLACEHOLDER_STRING",
      base: "HD54H9V45ED1SQ9PND2SFSZCVK1IZKBDFZ",
      pulse: "abc"
     },
     customChains: [
      {
        network: "base-goerli",
        chainId: 84531,
        urls: {
         apiURL: "https://api-goerli.basescan.org/api",
         browserURL: "https://goerli.basescan.org"
        }
      },
      {
        network: "pulse",
        chainId: 369,
        urls: {
         apiURL: "https://scan.pulsechain.com/api",
         browserURL: "https://scan.pulsechain.com"
        }
      },
      {
        network: "base",
        chainId: 8453,
        urls: {
         apiURL: "https://api.basescan.org/api",
         browserURL: "https://basescan.org"
        }
      },
    ]
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
  namedAccounts: {
    deployer: 0,
    // deployer: `ledger://${process.env.LEDGER_WALLET}`
  },
}
