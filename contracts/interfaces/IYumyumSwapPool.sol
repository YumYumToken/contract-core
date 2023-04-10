// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IYumyumSwapPoolImmutables.sol';
import './pool/IYumyumSwapPoolState.sol';
import './pool/IYumyumSwapPoolDerivedState.sol';
import './pool/IYumyumSwapPoolActions.sol';
import './pool/IYumyumSwapPoolOwnerActions.sol';
import './pool/IYumyumSwapPoolEvents.sol';

/// @title The interface for a YumYumSwap Pool
/// @notice A Uniswap pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface IYumyumSwapPool is
    IYumyumSwapPoolImmutables,
    IYumyumSwapPoolState,
    IYumyumSwapPoolDerivedState,
    IYumyumSwapPoolActions,
    IYumyumSwapPoolOwnerActions,
    IYumyumSwapPoolEvents
{

}
