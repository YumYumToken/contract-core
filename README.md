# YumYumSwap

[![Lint](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/lint.yml/badge.svg)](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/lint.yml)
[![Tests](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/tests.yml/badge.svg)](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/tests.yml)
[![Fuzz Testing](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/fuzz-testing.yml/badge.svg)](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/fuzz-testing.yml)
[![Mythx](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/mythx.yml/badge.svg)](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/mythx.yml)
[![npm version](https://img.shields.io/npm/v/@yumyumswap/contract-core/latest.svg)](https://www.npmjs.com/package/@yumyumswap/contract-core/v/latest)

This repository contains the core smart contracts for the YumYumSwap Protocol.
For higher level contracts, see the [uniswap-v3-periphery](https://github.com/Uniswap/uniswap-v3-periphery)
repository.

## Bug bounty

This repository is subject to the YumYumSwap bug bounty program, per the terms defined [here](./bug-bounty.md).

## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@yumyumswap/contract-core`
and import the factory bytecode located at
`@yumyumswap/contract-core/artifacts/contracts/YumyumSwapFactory.sol/YumyumSwapFactory.json`.
For example:

```typescript
import {
  abi as FACTORY_ABI,
  bytecode as FACTORY_BYTECODE,
} from '@yumyumswap/contract-core/artifacts/contracts/YumyumSwapFactory.sol/YumyumSwapFactory.json'

// deploy the bytecode
```

This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all Uniswap code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The YumYumSwap interfaces are available for import into solidity smart contracts
via the npm artifact `@yumyumswap/contract-core`, e.g.:

```solidity
import '@yumyumswap/contract-core/contracts/interfaces/IYumyumSwapPool.sol';

contract MyContract {
  IYumyumSwapPool pool;

  function doSomethingWithPool() {
    // pool.swap(...);
  }
}

```

## Licensing

The primary license for YumYumSwap Core is the Business Source License 1.1 (`BUSL-1.1`), see [`LICENSE`](./LICENSE). However, some files are dual licensed under `GPL-2.0-or-later`:

- All files in `contracts/interfaces/` may also be licensed under `GPL-2.0-or-later` (as indicated in their SPDX headers), see [`contracts/interfaces/LICENSE`](./contracts/interfaces/LICENSE)
- Several files in `contracts/libraries/` may also be licensed under `GPL-2.0-or-later` (as indicated in their SPDX headers), see [`contracts/libraries/LICENSE`](contracts/libraries/LICENSE)

### Other Exceptions

- `contracts/libraries/FullMath.sol` is licensed under `MIT` (as indicated in its SPDX header), see [`contracts/libraries/LICENSE_MIT`](contracts/libraries/LICENSE_MIT)
- All files in `contracts/test` remain unlicensed (as indicated in their SPDX headers).


## deployment address 
  - base testnet  YumyumSwapFactory deployed to: 0xB79E08735DDE71B58A489d7f1e8CF7f97402c5e0
  - pulse mainnet YumyumSwapFactory deployed to: 0x06393b72873077c523ed10B3Db69087875AF61ef
  - Base mainnet  YumyumSwapFactory deployed to: 0xf6C96aC4251905572c7083B1804825850B9BC9e6
## deploy with ledger
  - node 14.18.2
  - package "hardhat-deploy": "^0.7.9", "@ethersproject/hardware-wallets": "^5.7.0",
  - npm rebuild