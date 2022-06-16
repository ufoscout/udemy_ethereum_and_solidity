// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0;

/** 
 * @title Inbox
 * @dev Sets messages
 */
contract Inbox {
    
    string public message;

    constructor(string memory initialMessage ) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

}