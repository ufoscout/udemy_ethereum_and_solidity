// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {console} from "forge-std/console.sol";
import {stdStorage, StdStorage, Test} from "forge-std/Test.sol";
import "../src/lottery.sol";
import "openzeppelin/utils/Strings.sol";

contract LotteryTest is Test {

    address owner = address(0x1223);
    address alice = address(0x1889);
    address bob = address(0x1778);
    Lottery lottery;

    function setUp() public virtual {
        vm.startPrank(owner);
        lottery = new Lottery();
        vm.stopPrank(); 

        vm.label(owner, "Owner");
        vm.label(alice, "Alice");
        vm.label(bob, "Bob");
    }

    function testshouldReturnRandomNumber() public {
        uint rand = lottery.random();
        emit log_uint(rand);
        console.log(string.concat("Rand is [", Strings.toString(rand), "]"));
        assert(rand >= 0);
    }

    function testShouldEntryTheLottery() public {
        
        vm.startPrank(address(alice));
        vm.deal(alice, 1 ether);
        lottery.enter{value: 0.01 ether}();

        emit log_uint(address(alice).balance);
        
        assertEq(0.99 ether, address(alice).balance);
        assertEq(1, lottery.getPlayers().length);
    }

    function testCannotEntryTheLotteryWithoutValue() public {
        
        vm.startPrank(address(alice));
        vm.deal(alice, 1 ether);

        vm.expectRevert(InsufficentFunds.selector);
        lottery.enter();

        assertEq(0, lottery.getPlayers().length);
    }

    function testMoreUsersShouldEntryTheLottery() public {
        
        vm.deal(alice, 1 ether);
        vm.prank(address(alice));
        lottery.enter{value: 0.01 ether}();

        vm.deal(bob, 1 ether);
        vm.prank(address(bob));
        lottery.enter{value: 0.01 ether}();

        assertEq(2, lottery.getPlayers().length);
    }

    function testOneUserShouldWinTheLottery() public {
        
        vm.deal(alice, 1 ether);
        vm.prank(address(alice));
        lottery.enter{value: 0.01 ether}();

        vm.deal(bob, 1 ether);
        vm.prank(address(bob));
        lottery.enter{value: 0.01 ether}();

        vm.startPrank(owner);
        vm.deal(owner, 1 ether);
        lottery.enter{value: 0.01 ether}();

        lottery.pickWinner();

        uint alice_balance = address(alice).balance;
        uint bob_balance = address(bob).balance;
        uint owner_balance = address(owner).balance;

        assertEq(3 ether, alice_balance + bob_balance + owner_balance);
        assert( (alice_balance == 1.02 ether) || (bob_balance == 1.02 ether) || (owner_balance == 1.02 ether) );

    }

    function testShouldResetStateAfterPickWinner() public {
        
        vm.deal(alice, 1 ether);
        vm.prank(address(alice));
        lottery.enter{value: 0.01 ether}();

        vm.startPrank(owner);
        vm.deal(owner, 1 ether);
        lottery.enter{value: 0.01 ether}();

        lottery.pickWinner();

        assertEq(0, lottery.getPlayers().length);

    }

    function testShouldPickWinnerWithNoPlayers() public {
        vm.startPrank(owner);
        lottery.pickWinner();
    }

    function testOwnerShouldPickWinner() public {
        vm.deal(alice, 1 ether);
        vm.prank(address(alice));
        lottery.enter{value: 0.01 ether}();

        vm.startPrank(owner);
        lottery.pickWinner();
    }

    function testPickWinnerIfNotOwner() public {
        vm.startPrank(alice);
        vm.deal(alice, 1 ether);
        lottery.enter{value: 0.01 ether}();

        vm.expectRevert(Unauthorized.selector);
        lottery.pickWinner();

        assertEq(1, lottery.getPlayers().length);
    }
}
