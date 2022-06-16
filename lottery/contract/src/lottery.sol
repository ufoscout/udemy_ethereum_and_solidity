// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0;

error Unauthorized();
error InsufficentFunds();

/** 
 * @title Lottery
 * @dev Bet and win tokens 
 */
contract Lottery {
    
    address public manager;
    address payable[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        if (msg.value < 0.01 ether) {
            revert InsufficentFunds();
        }
        players.push(payable(msg.sender));
    }

    function pickWinner() public restricted {
        uint players_length = players.length;
        if (players_length != 0) {
            uint winnerIndex = random() % players.length;
            address payable winnerPlayer = players[winnerIndex];
            winnerPlayer.transfer(address(this).balance);
            players = new address payable[](0);
        }
    }

    function random() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    modifier restricted() {
        if (msg.sender != manager) {
            revert Unauthorized();
        }
        _;
    }
    
    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }
} 