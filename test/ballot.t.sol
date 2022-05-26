// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "src/ballot.sol";

contract InboxTest is Test {

    Inbox inbox;

    function setUp() public {
        inbox = new Inbox("Hello");
    }

    function testInitialMessage() public {
        assertEq("Hello", inbox.getMessage());
    }

    function testSetMessage() public {
        inbox.setMessage("New Hello");
        assertEq("New Hello", inbox.getMessage());
    }
}
