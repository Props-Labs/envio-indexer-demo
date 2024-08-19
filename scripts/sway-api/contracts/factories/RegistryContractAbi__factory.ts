/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.93.0
  Forc version: 0.62.0
  Fuel-Core version: 0.31.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot, DeployContractResult } from "fuels";
import type { RegistryContractAbi, RegistryContractAbiInterface } from "../RegistryContractAbi";

const _abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "struct Address",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "struct ContractId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "struct InitContractEvent",
      "components": [
        {
          "name": "contract_id",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "name",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct String",
      "components": [
        {
          "name": "bytes",
          "type": 5,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "contract_id",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "owner",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "name",
          "type": 9,
          "typeArguments": null
        }
      ],
      "name": "init_contract",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "302287730502511803",
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [];

export const RegistryContractAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): RegistryContractAbiInterface {
    return new Interface(_abi) as unknown as RegistryContractAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): RegistryContractAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as RegistryContractAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<RegistryContractAbi>> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    return factory.deployContract<RegistryContractAbi>({
      storageSlots: _storageSlots,
      ...options,
    });
  },
}
