// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Looper {
    function doStuff(uint256 i) private pure returns (uint256) {
        return i;
    }

    function loop() external pure {
        uint256 length = 100;
        for (uint256 i; i < length; ) {
            doStuff(i);
            unchecked {
                ++i;
            }
        }
    }
}
