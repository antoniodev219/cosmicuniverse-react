import mapj from "./map.json";

export const CONTRACT_ABI = [
    {
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "string",
                "type": "string",
                "name": "name"
            },
            {
                "type": "string",
                "name": "symbol",
                "internalType": "string"
            },
            {
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            },
            {
                "name": "magic",
                "type": "address",
                "internalType": "address"
            }
        ],
        "type": "constructor"
    },
    {
        "type": "event",
        "inputs": [
            {
                "name": "owner",
                "internalType": "address",
                "type": "address",
                "indexed": true
            },
            {
                "name": "approved",
                "indexed": true,
                "type": "address",
                "internalType": "address"
            },
            {
                "indexed": true,
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ],
        "anonymous": false,
        "name": "Approval"
    },
    {
        "name": "ApprovalForAll",
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "internalType": "address",
                "indexed": true,
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "anonymous": false,
        "type": "event"
    },
    {
        "anonymous": false,
        "name": "OwnershipTransferred",
        "type": "event",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "internalType": "address",
                "indexed": true
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ]
    },
    {
        "inputs": [
            {
                "name": "receiver",
                "indexed": false,
                "type": "address",
                "internalType": "address"
            },
            {
                "internalType": "uint256",
                "indexed": false,
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Purchase",
        "anonymous": false,
        "type": "event"
    },
    {
        "name": "SetStartTime",
        "type": "event",
        "inputs": [
            {
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256",
                "name": "_timestamp"
            }
        ],
        "anonymous": false
    },
    {
        "name": "Transfer",
        "type": "event",
        "anonymous": false,
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "indexed": true,
                "name": "from"
            },
            {
                "type": "address",
                "internalType": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true,
                "internalType": "uint256"
            }
        ]
    },
    {
        "name": "NFT_MAX",
        "type": "function",
        "inputs": [],
        "stateMutability": "view",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ]
    },
    {
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": ""
            }
        ],
        "name": "_startTime",
        "type": "function",
        "inputs": []
    },
    {
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "approve",
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "to"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            {
                "name": "owner",
                "internalType": "address",
                "type": "address"
            }
        ],
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "getApproved",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "name": "isApprovedForAll",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "type": "address",
                "name": "operator"
            }
        ],
        "stateMutability": "view"
    },
    {
        "stateMutability": "view",
        "type": "function",
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "landPrice",
        "inputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ]
    },
    {
        "stateMutability": "view",
        "name": "mintCount",
        "type": "function",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ]
    },
    {
        "name": "name",
        "type": "function",
        "outputs": [
            {
                "type": "string",
                "name": "",
                "internalType": "string"
            }
        ],
        "inputs": [],
        "stateMutability": "view"
    },
    {
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": ""
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "tokenId",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "name": "ownerOf",
        "type": "function",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "outputs": [],
        "name": "renounceOwnership",
        "inputs": [],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "inputs": [
            {
                "name": "from",
                "internalType": "address",
                "type": "address"
            },
            {
                "internalType": "address",
                "type": "address",
                "name": "to"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "type": "address",
                "name": "to"
            },
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "outputs": [],
        "type": "function",
        "stateMutability": "nonpayable",
        "name": "safeTransferFrom"
    },
    {
        "name": "setApprovalForAll",
        "type": "function",
        "outputs": [],
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": "operator"
            },
            {
                "name": "approved",
                "internalType": "bool",
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "soldTokens",
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "supportsInterface",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "type": "function"
    },
    {
        "name": "symbol",
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "internalType": "string",
                "name": ""
            }
        ],
        "type": "function",
        "stateMutability": "view"
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "index"
            }
        ],
        "name": "tokenByIndex"
    },
    {
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address"
            },
            {
                "name": "index",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": ""
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "stateMutability": "view",
        "type": "function"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "type": "function",
        "inputs": [],
        "stateMutability": "view",
        "name": "totalSupply"
    },
    {
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": "from"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "type": "function",
        "name": "transferFrom",
        "outputs": []
    },
    {
        "name": "transferOwnership",
        "type": "function",
        "outputs": [],
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "address",
                "name": "newOwner",
                "internalType": "address"
            }
        ]
    },
    {
        "stateMutability": "view",
        "type": "function",
        "name": "whitelistUser",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ]
    },
    {
        "name": "isLandAvailable",
        "stateMutability": "view",
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "type": "function"
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "tokenId",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "name": "purchase",
        "outputs": []
    },
    {
        "stateMutability": "view",
        "inputs": [],
        "type": "function",
        "outputs": [
            {
                "type": "uint256[]",
                "name": "",
                "internalType": "uint256[]"
            }
        ],
        "name": "soldTokensAll"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "price"
            },
            {
                "name": "arr",
                "internalType": "uint256[]",
                "type": "uint256[]"
            }
        ],
        "name": "setLandPriceArr",
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setWhiteListArr",
        "inputs": [
            {
                "type": "uint256",
                "name": "tier",
                "internalType": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "arr",
                "type": "address[]"
            }
        ]
    },
    {
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setStartTime",
        "type": "function",
        "inputs": [
            {
                "name": "newTime",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "stateMutability": "nonpayable",
        "type": "function",
        "inputs": [
            {
                "internalType": "string",
                "type": "string",
                "name": "uri"
            }
        ],
        "outputs": [],
        "name": "setBaseURI"
    },
    {
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "string",
                "type": "string",
                "name": "_revealedBaseURI"
            }
        ],
        "type": "function",
        "outputs": [],
        "name": "setRevealedBaseURI"
    },
    {
        "inputs": [
            {
                "name": "_tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "name": "tokenURI",
        "stateMutability": "view",
        "type": "function"
    }
]

export const CONTRACT_ADDRESS = '0x41e928ef2f2523518172f4fedde59c815398faab';

export const ERC20_CONTRACT_ABI =  [
    {
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_symbol",
                "type": "string",
                "internalType": "string"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "cap_"
            },
            {
                "name": "_manualMintLimit",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_lockFromBlock",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "_lockToBlock"
            }
        ],
        "type": "constructor"
    },
    {
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "internalType": "address",
                "type": "address",
                "indexed": true
            },
            {
                "internalType": "address",
                "type": "address",
                "indexed": true,
                "name": "spender"
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "type": "event"
    },
    {
        "anonymous": false,
        "name": "DelegateChanged",
        "type": "event",
        "inputs": [
            {
                "type": "address",
                "indexed": true,
                "name": "delegator",
                "internalType": "address"
            },
            {
                "type": "address",
                "indexed": true,
                "internalType": "address",
                "name": "fromDelegate"
            },
            {
                "name": "toDelegate",
                "internalType": "address",
                "indexed": true,
                "type": "address"
            }
        ]
    },
    {
        "type": "event",
        "inputs": [
            {
                "name": "delegate",
                "indexed": true,
                "internalType": "address",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "previousBalance",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "type": "uint256",
                "name": "newBalance",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false,
        "name": "DelegateVotesChanged"
    },
    {
        "name": "Lock",
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "to",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "value",
                "internalType": "uint256",
                "indexed": false,
                "type": "uint256"
            }
        ],
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "previousOwner",
                "type": "address",
                "indexed": true
            },
            {
                "indexed": true,
                "type": "address",
                "internalType": "address",
                "name": "newOwner"
            }
        ],
        "anonymous": false,
        "type": "event",
        "name": "OwnershipTransferred"
    },
    {
        "anonymous": false,
        "type": "event",
        "inputs": [
            {
                "internalType": "address",
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address",
                "indexed": true
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "name": "Transfer"
    },
    {
        "type": "function",
        "name": "DELEGATION_TYPEHASH",
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view",
        "inputs": []
    },
    {
        "stateMutability": "view",
        "inputs": [],
        "type": "function",
        "name": "DOMAIN_TYPEHASH",
        "outputs": [
            {
                "type": "bytes32",
                "name": "",
                "internalType": "bytes32"
            }
        ]
    },
    {
        "outputs": [],
        "name": "addAuthorized",
        "type": "function",
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": "_toAdd"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view",
        "name": "allowance",
        "type": "function",
        "inputs": [
            {
                "name": "owner",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "spender",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "name": "approve",
        "stateMutability": "nonpayable",
        "type": "function",
        "outputs": [
            {
                "internalType": "bool",
                "type": "bool",
                "name": ""
            }
        ],
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": "spender"
            },
            {
                "name": "amount",
                "internalType": "uint256",
                "type": "uint256"
            }
        ]
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": ""
            }
        ],
        "type": "function",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "name": "authorized",
        "stateMutability": "view"
    },
    {
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "name": "balanceOf",
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "outputs": [
            {
                "type": "uint32",
                "name": "fromBlock",
                "internalType": "uint32"
            },
            {
                "name": "votes",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "name": "checkpoints",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "type": "uint32",
                "name": "",
                "internalType": "uint32"
            }
        ]
    },
    {
        "type": "function",
        "name": "decimals",
        "stateMutability": "view",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "inputs": []
    },
    {
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "spender"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "subtractedValue"
            }
        ],
        "name": "decreaseAllowance",
        "stateMutability": "nonpayable",
        "type": "function",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ]
    },
    {
        "outputs": [
            {
                "internalType": "bool",
                "type": "bool",
                "name": ""
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "spender"
            },
            {
                "name": "addedValue",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "increaseAllowance"
    },
    {
        "stateMutability": "view",
        "type": "function",
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "lockFromBlock"
    },
    {
        "stateMutability": "view",
        "name": "lockToBlock",
        "type": "function",
        "inputs": [],
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ]
    },
    {
        "inputs": [],
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "manualMintLimit"
    },
    {
        "name": "manualMinted",
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": ""
            }
        ],
        "inputs": []
    },
    {
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "name": "name",
        "type": "function"
    },
    {
        "name": "nonces",
        "inputs": [
            {
                "name": "",
                "internalType": "address",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "outputs": [
            {
                "internalType": "uint32",
                "type": "uint32",
                "name": ""
            }
        ],
        "stateMutability": "view",
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": ""
            }
        ],
        "name": "numCheckpoints",
        "type": "function"
    },
    {
        "outputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": ""
            }
        ],
        "inputs": [],
        "type": "function",
        "name": "owner",
        "stateMutability": "view"
    },
    {
        "name": "removeAuthorized",
        "stateMutability": "nonpayable",
        "outputs": [],
        "inputs": [
            {
                "name": "_toRemove",
                "type": "address",
                "internalType": "address"
            }
        ],
        "type": "function"
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "renounceOwnership",
        "inputs": []
    },
    {
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "type": "function",
        "stateMutability": "view",
        "name": "symbol",
        "inputs": []
    },
    {
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "totalSupply",
        "inputs": [],
        "type": "function",
        "stateMutability": "view"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "bool",
                "type": "bool"
            }
        ],
        "name": "transfer",
        "inputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": "recipient"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "outputs": [
            {
                "type": "bool",
                "internalType": "bool",
                "name": ""
            }
        ],
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "sender",
                "internalType": "address",
                "type": "address"
            },
            {
                "type": "address",
                "internalType": "address",
                "name": "recipient"
            },
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": "amount"
            }
        ],
        "name": "transferFrom",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "outputs": [],
        "name": "transferOwnership",
        "type": "function",
        "stateMutability": "nonpayable"
    },
    {
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "inputs": [],
        "type": "function",
        "name": "cap"
    },
    {
        "inputs": [
            {
                "name": "_newCap",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "name": "capUpdate",
        "type": "function",
        "outputs": []
    },
    {
        "type": "function",
        "name": "lockFromUpdate",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "_newLockFrom"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "lockToUpdate",
        "inputs": [
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "_newLockTo"
            }
        ],
        "stateMutability": "nonpayable",
        "outputs": []
    },
    {
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "name": "unlockedSupply",
        "type": "function"
    },
    {
        "stateMutability": "view",
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "inputs": [],
        "type": "function",
        "name": "lockedSupply"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "name": "circulatingSupply",
        "inputs": [],
        "type": "function"
    },
    {
        "type": "function",
        "inputs": [],
        "stateMutability": "view",
        "name": "totalLock",
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "outputs": [],
        "name": "mint",
        "type": "function",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "_to"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ]
    },
    {
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_amount",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "manualMint",
        "type": "function"
    },
    {
        "name": "totalBalanceOf",
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "_holder"
            }
        ],
        "outputs": [
            {
                "internalType": "uint256",
                "type": "uint256",
                "name": ""
            }
        ],
        "type": "function",
        "stateMutability": "view"
    },
    {
        "outputs": [
            {
                "name": "",
                "internalType": "uint256",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "inputs": [
            {
                "type": "address",
                "name": "_holder",
                "internalType": "address"
            }
        ],
        "name": "lockOf"
    },
    {
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "_holder"
            }
        ],
        "name": "lastUnlockBlock",
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "stateMutability": "nonpayable",
        "type": "function",
        "outputs": [],
        "name": "lock",
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            },
            {
                "name": "_amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "inputs": [
            {
                "name": "_holder",
                "type": "address",
                "internalType": "address"
            }
        ],
        "name": "canUnlockAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function",
        "stateMutability": "view"
    },
    {
        "inputs": [],
        "name": "unlock",
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": []
    },
    {
        "type": "function",
        "outputs": [],
        "name": "transferAll",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "_to",
                "internalType": "address",
                "type": "address"
            }
        ]
    },
    {
        "inputs": [
            {
                "name": "delegator",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "internalType": "address",
                "type": "address",
                "name": ""
            }
        ],
        "stateMutability": "view",
        "name": "delegates",
        "type": "function"
    },
    {
        "name": "delegate",
        "inputs": [
            {
                "name": "delegatee",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "outputs": []
    },
    {
        "name": "delegateBySig",
        "type": "function",
        "outputs": [],
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "delegatee"
            },
            {
                "type": "uint256",
                "internalType": "uint256",
                "name": "nonce"
            },
            {
                "name": "expiry",
                "internalType": "uint256",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "type": "uint8",
                "name": "v"
            },
            {
                "name": "r",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "s",
                "internalType": "bytes32",
                "type": "bytes32"
            }
        ]
    },
    {
        "name": "getCurrentVotes",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "type": "function",
        "inputs": [
            {
                "type": "address",
                "internalType": "address",
                "name": "account"
            }
        ],
        "stateMutability": "view"
    },
    {
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "name": "getPriorVotes",
        "type": "function",
        "stateMutability": "view",
        "inputs": [
            {
                "name": "account",
                "internalType": "address",
                "type": "address"
            },
            {
                "name": "blockNumber",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    }
]

export const ERC20_ADDRESS = '0x892d81221484f690c0a97d3dd18b9144a3ecdfb7';

export const RPC_URL = 'https://rpc.cosmicuniverse.io';

export const REGION = {
    'w':"Water",
    'ef': "Elysian Fields",
    'efr':"Enchanted Forest",
    'ma':"Mystic Alpines",
    'ce':"Cosmic Enchanters",
    'fw':"Forest of Whimsy"
};

export const MapDetail = mapj;