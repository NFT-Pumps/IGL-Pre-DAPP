export default function ContractABI() {
   return [
      {
         "inputs": [
            {
               "internalType": "string",
               "name": "contractName",
               "type": "string"
            },
            {
               "internalType": "string",
               "name": "contractSymbol",
               "type": "string"
            },
            {
               "internalType": "address",
               "name": "_vault",
               "type": "address"
            },
            {
               "internalType": "address",
               "name": "_signer",
               "type": "address"
            },
            {
               "internalType": "string",
               "name": "__baseTokenURI",
               "type": "string"
            },
            {
               "internalType": "string",
               "name": "_hiddenMetadataUri",
               "type": "string"
            }
         ],
         "stateMutability": "nonpayable",
         "type": "constructor"
      },
      {
         "anonymous": false,
         "inputs": [
            {
               "indexed": true,
               "internalType": "address",
               "name": "owner",
               "type": "address"
            },
            {
               "indexed": true,
               "internalType": "address",
               "name": "approved",
               "type": "address"
            },
            {
               "indexed": true,
               "internalType": "uint256",
               "name": "tokenId",
               "type": "uint256"
            }
         ],
         "name": "Approval",
         "type": "event"
      },
      {
         "anonymous": false,
         "inputs": [
            {
               "indexed": true,
               "internalType": "address",
               "name": "owner",
               "type": "address"
            },
            {
               "indexed": true,
               "internalType": "address",
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
         "name": "ApprovalForAll",
         "type": "event"
      },
      {
         "anonymous": false,
         "inputs": [
            {
               "indexed": true,
               "internalType": "address",
               "name": "previousOwner",
               "type": "address"
            },
            {
               "indexed": true,
               "internalType": "address",
               "name": "newOwner",
               "type": "address"
            }
         ],
         "name": "OwnershipTransferred",
         "type": "event"
      },
      {
         "anonymous": false,
         "inputs": [
            {
               "indexed": true,
               "internalType": "address",
               "name": "from",
               "type": "address"
            },
            {
               "indexed": true,
               "internalType": "address",
               "name": "to",
               "type": "address"
            },
            {
               "indexed": true,
               "internalType": "uint256",
               "name": "tokenId",
               "type": "uint256"
            }
         ],
         "name": "Transfer",
         "type": "event"
      },
      {
         "inputs": [],
         "name": "Author",
         "outputs": [
            {
               "internalType": "string",
               "name": "",
               "type": "string"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "MAX_TOKENS",
         "outputs": [
            {
               "internalType": "uint256",
               "name": "",
               "type": "uint256"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "ProjectTeam",
         "outputs": [
            {
               "internalType": "string",
               "name": "",
               "type": "string"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [
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
         "name": "approve",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "owner",
               "type": "address"
            }
         ],
         "name": "balanceOf",
         "outputs": [
            {
               "internalType": "uint256",
               "name": "",
               "type": "uint256"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "baseExtension",
         "outputs": [
            {
               "internalType": "string",
               "name": "",
               "type": "string"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "uint256",
               "name": "tokenId",
               "type": "uint256"
            }
         ],
         "name": "burn",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "",
               "type": "address"
            }
         ],
         "name": "claimedByOwner",
         "outputs": [
            {
               "internalType": "uint256",
               "name": "",
               "type": "uint256"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "uint256",
               "name": "tokenId",
               "type": "uint256"
            }
         ],
         "name": "getApproved",
         "outputs": [
            {
               "internalType": "address",
               "name": "",
               "type": "address"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "hiddenMetadataUri",
         "outputs": [
            {
               "internalType": "string",
               "name": "",
               "type": "string"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "owner",
               "type": "address"
            },
            {
               "internalType": "address",
               "name": "operator",
               "type": "address"
            }
         ],
         "name": "isApprovedForAll",
         "outputs": [
            {
               "internalType": "bool",
               "name": "",
               "type": "bool"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "name",
         "outputs": [
            {
               "internalType": "string",
               "name": "",
               "type": "string"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "uint256",
               "name": "quantity",
               "type": "uint256"
            }
         ],
         "name": "openMint",
         "outputs": [],
         "stateMutability": "payable",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "owner",
         "outputs": [
            {
               "internalType": "address",
               "name": "",
               "type": "address"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "uint256",
               "name": "tokenId",
               "type": "uint256"
            }
         ],
         "name": "ownerOf",
         "outputs": [
            {
               "internalType": "address",
               "name": "",
               "type": "address"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "publicMintIsOpen",
         "outputs": [
            {
               "internalType": "bool",
               "name": "",
               "type": "bool"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "publicMintMaxLimit",
         "outputs": [
            {
               "internalType": "uint256",
               "name": "",
               "type": "uint256"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "renounceOwnership",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "revealed",
         "outputs": [
            {
               "internalType": "bool",
               "name": "",
               "type": "bool"
            }
         ],
         "stateMutability": "view",
         "type": "function"
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
               "name": "to",
               "type": "address"
            },
            {
               "internalType": "uint256",
               "name": "tokenId",
               "type": "uint256"
            }
         ],
         "name": "safeTransferFrom",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
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
               "name": "to",
               "type": "address"
            },
            {
               "internalType": "uint256",
               "name": "tokenId",
               "type": "uint256"
            },
            {
               "internalType": "bytes",
               "name": "_data",
               "type": "bytes"
            }
         ],
         "name": "safeTransferFrom",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "operator",
               "type": "address"
            },
            {
               "internalType": "bool",
               "name": "approved",
               "type": "bool"
            }
         ],
         "name": "setApprovalForAll",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "string",
               "name": "_baseExtension",
               "type": "string"
            }
         ],
         "name": "setBaseExtension",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "string",
               "name": "newBaseURI",
               "type": "string"
            }
         ],
         "name": "setBaseURI",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "string",
               "name": "_hiddenMetadataUri",
               "type": "string"
            }
         ],
         "name": "setHiddenMetadataUri",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "uint256",
               "name": "newPrice",
               "type": "uint256"
            },
            {
               "internalType": "uint256",
               "name": "setOpenMintLimit",
               "type": "uint256"
            },
            {
               "internalType": "bool",
               "name": "setPublicMintState",
               "type": "bool"
            }
         ],
         "name": "setParams",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "bool",
               "name": "_state",
               "type": "bool"
            }
         ],
         "name": "setRevealed",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "newSigner",
               "type": "address"
            }
         ],
         "name": "setSignerAddress",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "uint256",
               "name": "newPrice",
               "type": "uint256"
            }
         ],
         "name": "setTokenPrice",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "uint256",
               "name": "newMintLimit",
               "type": "uint256"
            }
         ],
         "name": "setTransactionMintLimit",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "newVault",
               "type": "address"
            }
         ],
         "name": "setVaultAddress",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "bytes4",
               "name": "interfaceId",
               "type": "bytes4"
            }
         ],
         "name": "supportsInterface",
         "outputs": [
            {
               "internalType": "bool",
               "name": "",
               "type": "bool"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "symbol",
         "outputs": [
            {
               "internalType": "string",
               "name": "",
               "type": "string"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "to",
               "type": "address"
            },
            {
               "internalType": "uint256",
               "name": "amount",
               "type": "uint256"
            }
         ],
         "name": "teamMint",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "togglePublicMint",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "tokenPrice",
         "outputs": [
            {
               "internalType": "uint256",
               "name": "",
               "type": "uint256"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "uint256",
               "name": "_tokenId",
               "type": "uint256"
            }
         ],
         "name": "tokenURI",
         "outputs": [
            {
               "internalType": "string",
               "name": "",
               "type": "string"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "totalSupply",
         "outputs": [
            {
               "internalType": "uint256",
               "name": "",
               "type": "uint256"
            }
         ],
         "stateMutability": "view",
         "type": "function"
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
               "name": "to",
               "type": "address"
            },
            {
               "internalType": "uint256",
               "name": "tokenId",
               "type": "uint256"
            }
         ],
         "name": "transferFrom",
         "outputs": [],
         "stateMutability": "nonpayable",
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
         "name": "transferOwnership",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "withdraw",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      }
   ]
}
