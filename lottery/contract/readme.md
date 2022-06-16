# To deploy the contract on the local ganache network

Start ganache docker image:
> docker-compose up

deploy the contract (--legacy is required for ganache)
> forge create --rpc-url http://127.0.0.1:8545 --private-key 0x15382a42b5c90977a88facd908bfddcca49ebb11065fe2849eb08a4d2ffdf4c9 src/lottery.sol:Lottery --legacy