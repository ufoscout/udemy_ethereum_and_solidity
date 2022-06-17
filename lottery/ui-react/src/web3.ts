import { ethers } from "ethers";

// window.ethereum is the web3 provider injected by metamask in the page
window.ethereum.request({ method: "eth_requestAccounts" });

// Matemask injects a full web3 instance in the page, We could use it by using the window.web3 variable.
// Here, instead, we are creating our own web3 instance using the provider of metamask
const web3 = new ethers.providers.Web3Provider(window.ethereum);

export default web3;
