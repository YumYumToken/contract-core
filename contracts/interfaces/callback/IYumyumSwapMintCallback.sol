// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

/// @title Callback for IYumyumSwapPoolActions#mint
/// @notice Any contract that calls IYumyumSwapPoolActions#mint must implement this interface
interface IYumyumSwapMintCallback {
    /// @notice Called to `msg.sender` after minting liquidity to a position from IYumyumSwapPool#mint.
    /// @dev In the implementation you must pay the pool tokens owed for the minted liquidity.
    /// The caller of this method must be checked to be a YumyumSwapPool deployed by the canonical YumyumSwapFactory.
    /// @param amount0Owed The amount of token0 due to the pool for the minted liquidity
    /// @param amount1Owed The amount of token1 due to the pool for the minted liquidity
    /// @param data Any data passed through by the caller via the IYumyumSwapPoolActions#mint call
    function yumyumswapMintCallback(
        uint256 amount0Owed,
        uint256 amount1Owed,
        bytes calldata data
    ) external;
}
