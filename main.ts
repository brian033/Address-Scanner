import { BlockWithTransactions } from "@ethersproject/abstract-provider";
import { ethers } from "ethers";

// edit these
const chainId = 1;
const ftxAddr = ethers.utils.getAddress("0x2FAF487A4414Fe77e2327F0bf4AE2a264a776AD2");
// =========
const provider = new ethers.providers.InfuraProvider(chainId);

function findERC20transferOut(txs: BlockWithTransactions, address: string) {
    const methodId = "0xa9059cbb";
    txs.transactions.forEach((tx) => {
        const data = tx.data;
        if (tx.from != address) {
            return;
        }
        if (data.length != 2) {
            if (data.slice(0, 10) === methodId) {
                console.log("[ERC20 outbound] !!!!!!!!!");
                console.log("https://etherscan.io/tx/" + tx.hash);
            }
        } else {
            console.log(
                `[ETH outbound] Transfered ${ethers.utils.formatEther(tx.value)}ETH to ${tx.to}`
            );
            console.log("https://etherscan.io/tx/" + tx.hash);
        }
    });
}

const main = async function () {
    provider.on("block", async (blockNum: number) => {
        console.log(`new block [${blockNum}], target [${ftxAddr}]`);
        const txs = await provider.getBlockWithTransactions(blockNum);
        findERC20transferOut(txs, ftxAddr);
    });
};

main();
