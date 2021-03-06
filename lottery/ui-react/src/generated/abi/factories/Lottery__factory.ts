/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Lottery, LotteryInterface } from "../Lottery";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InsufficentFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "enter",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlayers",
    outputs: [
      {
        internalType: "address payable[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pickWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "players",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "random",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556104b1806100326000396000f3fe6080604052600436106100555760003560e01c8063481c6a751461005a5780635d495aea146100975780635ec01e4d146100ae5780638b5b9ccc146100d1578063e97dcb62146100f3578063f71d96cb146100fb575b600080fd5b34801561006657600080fd5b5060005461007a906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100a357600080fd5b506100ac61011b565b005b3480156100ba57600080fd5b506100c36101e6565b60405190815260200161008e565b3480156100dd57600080fd5b506100e661021c565b60405161008e919061038d565b6100ac61027e565b34801561010757600080fd5b5061007a6101163660046103da565b6102e9565b6000546001600160a01b03163314610145576040516282b42960e81b815260040160405180910390fd5b60015480156101e35760015460009061015c6101e6565b61016691906103f3565b905060006001828154811061017d5761017d610415565b60009182526020822001546040516001600160a01b03909116925082914780156108fc02929091818181858888f193505050501580156101c1573d6000803e3d6000fd5b5060408051600081526020810191829052516101df91600191610313565b5050505b50565b6000444260016040516020016101fe9392919061042b565b6040516020818303038152906040528051906020012060001c905090565b6060600180548060200260200160405190810160405280929190818152602001828054801561027457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610256575b5050505050905090565b662386f26fc100003410156102a65760405163217916b760e21b815260040160405180910390fd5b6001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b03191633179055565b600181815481106102f957600080fd5b6000918252602090912001546001600160a01b0316905081565b828054828255906000526020600020908101928215610368579160200282015b8281111561036857825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190610333565b50610374929150610378565b5090565b5b808211156103745760008155600101610379565b6020808252825182820181905260009190848201906040850190845b818110156103ce5783516001600160a01b0316835292840192918401916001016103a9565b50909695505050505050565b6000602082840312156103ec57600080fd5b5035919050565b60008261041057634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052603260045260246000fd5b838152600060208481840152604083018454856000528260002060005b8281101561046d5781546001600160a01b031684529284019260019182019101610448565b50919897505050505050505056fea2646970667358221220ba82ddb6c09c26d68d6f70e41f741908714345e88ec0854d14dd3a92571ea3ec64736f6c634300080e0033";

type LotteryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LotteryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lottery__factory extends ContractFactory {
  constructor(...args: LotteryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Lottery> {
    return super.deploy(overrides || {}) as Promise<Lottery>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Lottery {
    return super.attach(address) as Lottery;
  }
  override connect(signer: Signer): Lottery__factory {
    return super.connect(signer) as Lottery__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryInterface {
    return new utils.Interface(_abi) as LotteryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lottery {
    return new Contract(address, _abi, signerOrProvider) as Lottery;
  }
}
