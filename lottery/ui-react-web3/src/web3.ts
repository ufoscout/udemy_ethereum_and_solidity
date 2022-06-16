import Web3 from "web3";

// window.ethereum is the web3 provider injected by metamask in the page
window.ethereum.request({ method: "eth_requestAccounts" });

// Matemask injects a full web3 instance in the page, We could use it by using the window.web3 variable.
// Here, instead, we are creating our own web3 instance using the provider of metamask
const web3 = new Web3(window.ethereum);

export default web3;
