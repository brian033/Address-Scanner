# Usage:

```
$ git clone https://github.com/brian033/Address-Scanner
$ cd Address-Scanner
```

### Edit the constants in line 5, 6 [main.ts], default configuration is for FTX hot wallet address on mainnet.

### Then do the following:

```
$ yarn install
% yarn start
```

# What does it do?:

### When the targeted address has either eth outbound or erc20 outbound transfers.

### It will log it on the console.

# Example output:

### ETH Transfers from the targeted address

```
[ETH outbound] Transfered 0.12ETH to 0x7E8a6B9CB4be0B1847FE8d2A99E1b88FB12321d5
https://etherscan.io/tx/0x5cdf3685858c39c0f068e240a4def5a8111ee52d616dc00913c173ea555be640
```

### ERC20 Transfers from the targeted address

```
[ERC20 outbound] !!!!!!!!!
https://etherscan.io/tx/0x5cdf3685858c39c0f068e240a4def5a8111ee52d616dc00913c173ea555be640
```
