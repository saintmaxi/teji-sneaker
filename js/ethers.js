/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const nftAddress = "0x54218f89Ee0283Dd56F39A128A02fCa5f8d73cC7";
const nftAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhiteList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintState","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextIndexToAssign","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"setWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whiteListMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]`;
};

const tejiAddress = "0x74FDce4a5AbAA0c8C6933e80Ad4fEc50A0270D11";
const discount1Address = "0x28D0a1D3125f9132Efa6C1c09Ab446b8c63f3dDf";
const discount2Address = "0xA3088D8a04071974b86f910A4058f077aC34D386";
const discount3Address = "0x28BE4f6E3B41e483A0bbaD5e52A1e0af1cabCDAa";
const discount4Address = "0xf07468eAd8cf26c752C676E43C814FEe9c8CF402";
const discount5Address = "0xA82F3a61F002F83Eba7D184c50bB2a8B359cA1cE";
const discount6Address = "0x235d49774139c218034c0571Ba8f717773eDD923";
const discount7Address = "0xb7D405BEE01C70A9577316C1B9C2505F146e8842";
const discount8Address = "0x3ceB6868BfBf99F6b76FE5bB37343C075677C698";
const discount9Address = "0x282BDD42f4eb70e7A9D9F40c8fEA0825B7f68C5D";
const discount10Address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

const baseERC721Abi = () => {
    return `[{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
};

const etherscanBase = `https://etherscan.io/tx/`;
const correctChain = 1;
const MAX_MINT = 5;
const MAX_SUPPLY = 500;
const openseaLink = "https://opensea.io/collection/phunk-force-1-v2-by-teji";

/*********************************************************************************/
/********************************DEV CONFIG********************************/
/*********************************************************************************/

// const nftAddress = "0x1Bd25770A819c73Cf31Fa20463837701767E1c73";
// const nftAbi = () => {
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhiteList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintState","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextIndexToAssign","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"setWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whiteListMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]`;
// };

// const tejiAddress = "0x85252f525456D3fCe3654e56f6EAF034075e231C";
// const discount1Address = "0x85252f525456D3fCe3654e56f6EAF034075e231C";
// const discount2Address = "0x85252f525456D3fCe3654e56f6EAF034075e231C";
// const discount3Address = "0x85252f525456D3fCe3654e56f6EAF034075e231C";
// const discount4Address = "0x85252f525456D3fCe3654e56f6EAF034075e231C";
// const discount5Address = "0x85252f525456D3fCe3654e56f6EAF034075e231C";
// const discount6Address = "0x85252f525456D3fCe3654e56f6EAF034075e231C";
// const discount7Address = "0x85252f525456D3fCe3654e56f6EAF034075e231C";
// const discount8Address = "0x85252f525456D3fCe3654e56f6EAF034075e231C";
// const discount9Address = "0x85252f525456D3fCe3654e56f6EAF034075e231C";
// const discount10Address = "0x85252f525456D3fCe3654e56f6EAF034075e231C";

// const baseERC721Abi = () => {
//     return `[{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
// const correctChain = 4;
// const MAX_MINT = 5;
// const MAX_SUPPLY = 500;
// const openseaLink = "#";

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    $("#mint-button").attr("onclick", `displayErrorMessage('Use a web3-enabled browser like MetaMask/Coinbase to mint!')`);
    $("#account").attr("onclick", `displayErrorMessage('Use a web3-enabled browser like MetaMask/Coinbase to connect!')`);
}

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();
const nft = new ethers.Contract(nftAddress, nftAbi(), signer);
const teji = new ethers.Contract(tejiAddress, baseERC721Abi(), signer);
const discount1 = new ethers.Contract(discount1Address, baseERC721Abi(), signer);
const discount2 = new ethers.Contract(discount2Address, baseERC721Abi(), signer);
const discount3 = new ethers.Contract(discount3Address, baseERC721Abi(), signer);
const discount4 = new ethers.Contract(discount4Address, baseERC721Abi(), signer);
const discount5 = new ethers.Contract(discount5Address, baseERC721Abi(), signer);
const discount6 = new ethers.Contract(discount6Address, baseERC721Abi(), signer);
const discount7 = new ethers.Contract(discount7Address, baseERC721Abi(), signer);
const discount8 = new ethers.Contract(discount8Address, baseERC721Abi(), signer);
const discount9 = new ethers.Contract(discount9Address, baseERC721Abi(), signer);
const discount10 = new ethers.Contract(discount10Address, baseERC721Abi(), signer);


const connect = async () => {
    await provider.send("eth_requestAccounts", []);
};

const getAddress = async () => {
    try {
        return await signer.getAddress();
    }
    catch {
        return false;
    }
};

const formatEther = (balance_) => {
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_) => {
    return ethers.utils.parseEther(eth_)
};

const getChainId = async () => {
    return await signer.getChainId()
};

// ============ MINTING CONTROLS ===============

let numberToMint = 1;

function setNumberToMint(val) {
    numberToMint = val;
}

function decrementClaim() {
    let currentClaim = numberToMint;
    if (currentClaim > 1) {
        numberToMint -= 1;
        $("#number-to-mint").text(numberToMint);
        updatePrice();
    }
}

const setMaxMint = async () => {
    numberToMint = MAX_MINT;
    $("#number-to-mint").text(numberToMint);
    updatePrice();
}

function incrementClaim() {
    let max = MAX_MINT;
    if (numberToMint != max) {
        numberToMint += 1;
        $("#number-to-mint").text(numberToMint);
        updatePrice();
    }
}

const updatePrice = async () => {
    $("#current-cost").text(`${(priceEth * numberToMint).toFixed(1)} Ξ`);
}

const mint = async () => {
    const minted = Number(await nft.totalSupply()) + 53;
    try {
        if (minted == MAX_SUPPLY) {
            await displayErrorMessage("Sorry, no pairs remaining!")
        }
        else {
            if (numberToMint > MAX_MINT) {
                await displayErrorMessage(`Max ${MAX_MINT} mints per transaction!`);
            }

            const cost = ethers.BigNumber.from(priceWei).mul(numberToMint);

            const gasLimit = await nft.estimateGas.publicMint(numberToMint, { value: cost })
            const newGasLimit = parseInt((gasLimit * 1.2)).toString();

            await nft.publicMint(numberToMint, { value: cost, gasLimit: newGasLimit }).then(async (tx_) => {
                await waitForTransaction(tx_);
            });
        }
    }
    catch (error) {
        if ((error.message).includes("No mints remaining")) {
            await displayErrorMessage(`Error: No mints remaining!`)
        }
        else if ((error.message).includes("Quantity exceeded. Maximum is 5")) {
            await displayErrorMessage(`Error: Max 5 mints!`)
        }
        else if ((error.message).includes("Exact payment is required")) {
            await displayErrorMessage(`Error: Exact payment is required!`)
        }
        else if ((error.message).includes("Mint is not active")) {
            await displayErrorMessage(`Error: Mint is not active!`)
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else if ((error.message).includes("User rejected the transaction")) {
            console.log("Transaction rejected.");
        }
        else if ((error.message).includes("insufficient funds")) {
            await displayErrorMessage(`Error: Insuffient ETH to mint!`)
        }
        else {
            await displayErrorMessage(`An error occurred. See window alert for details. If using a Ledger, open Settings on Ethereum App.
            Enable Blind Signing + Display Debug Data`);
            window.alert(error.toString());
            console.log(error.toString());
        }
    }
}

const checkIfWhitelisted = async () => {
    let userAddress = await getAddress();
    let whitelist = await nft.getWhiteList();
    if (whitelist.includes(userAddress)) {
        $("#whitelist-button").removeClass("hidden");
        $("#mint-button-wrapper").css("text-align", "left");
    }
    else {
        $("#whitelist-button").addClass("hidden");
        $("#whitelist-button").prop("onclick", "");
        $("#whitelist-button").addClass("disabled");
        if ($(window).width() <= 991) {
            $("#mint-button-wrapper").css("text-align", "center");
        }
        else {
            $("#mint-button-wrapper").css("text-align", "left");
        }
    }
}

const whitelistMint = async () => {
    const minted = Number(await nft.totalSupply()) + 53;
    try {
        let userAddress = await getAddress();
        if (minted == MAX_SUPPLY) {
            await displayErrorMessage("Sorry, no pairs remaining!")
        }
        else {
            const gasLimit = await nft.estimateGas.whiteListMint()
            const newGasLimit = parseInt((gasLimit * 1.2)).toString();

            await nft.whiteListMint({ gasLimit: newGasLimit }).then(async (tx_) => {
                await waitForTransaction(tx_);
            });
        }
    }
    catch (error) {
        if ((error.message).includes("No mints remaining")) {
            await displayErrorMessage(`Error: No mints remaining!`)
        }
        else if ((error.message).includes("not on whitelist")) {
            await displayErrorMessage(`Error: Not on whitelist or already minted whitelist!`)
        }
        else if ((error.message).includes("Mint is not active")) {
            await displayErrorMessage(`Error: Mint is not active!`)
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else if ((error.message).includes("User rejected the transaction")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage(`An error occurred. See window alert for details. If using a Ledger, open Settings on Ethereum App.
            Enable Blind Signing + Display Debug Data`);
            window.alert(error.toString());
            console.log(error.toString());
        }
    }
}

// const checkMintingLive = async () => {
//     const live = !(await nft.paused());
//     if (!live) {
//         $("#mint-button").addClass("hidden");
//         $("#quantity-controls").addClass("hidden");
//         $("#claim-button").addClass("hidden");
//         $("#mint-closed").removeClass("hidden");
//     }
//     else {
//         $("#mint-button").removeClass("hidden");
//         $("#quantity-controls").removeClass("hidden");
//         $("#mint-closed").addClass("hidden");
//     }
//     return live;
// }

const setPrice = async () => {
    let userAddress = await getAddress();
    let ownsDiscount1 = (await discount1.balanceOf(userAddress)) > 0;
    let ownsDiscount2 = (await discount2.balanceOf(userAddress)) > 0;
    let ownsDiscount3 = (await discount3.balanceOf(userAddress)) > 0;
    let ownsDiscount4 = (await discount4.balanceOf(userAddress)) > 0;
    let ownsDiscount5 = (await discount5.balanceOf(userAddress)) > 0;
    let ownsDiscount6 = (await discount6.balanceOf(userAddress)) > 0;
    let ownsDiscount7 = (await discount7.balanceOf(userAddress)) > 0;
    let ownsDiscount8 = (await discount8.balanceOf(userAddress)) > 0;
    let ownsDiscount9 = (await discount9.balanceOf(userAddress)) > 0;
    let ownsDiscount10 = (await discount10.balanceOf(userAddress)) > 0;

    let ownsTeji = (await teji.balanceOf(userAddress)) > 0;
    if (ownsDiscount1 || ownsTeji || ownsDiscount2 || ownsDiscount3 || ownsDiscount4 || ownsDiscount5 || ownsDiscount6
        || ownsDiscount7 || ownsDiscount8 || ownsDiscount9 || ownsDiscount10) {
        priceEth = .1;
        priceWei = "100000000000000000";
    }
    else {
        priceEth = .2;
        priceWei = "200000000000000000";
    }
    $("#current-cost").text(`${priceEth} Ξ`);
}

const updateMintInfo = async () => {
    let minted = Number(await nft.totalSupply()) + 53;
    $("#num-minted").html(minted);
    if (minted >= MAX_SUPPLY) {
        $("#right-pop-up > div.paragraphdiv > p > .bold-text-2").html(`SOLD OUT.<br>Available on secondary on <a href="${openseaLink}" target="_blank" class="link">Opensea</a>.<br>Please proceed to the <a href="https://discord.gg/TXtPXkWjSv" target="_blank" class="link">TEJIVERSE</a> discord <br class="hide-on-desktop">to claim your physical sneakers.`);
        $("#quantity-controls").remove();
        $("#mint-button").remove();
        $("#whitelist-button").remove();
        $("#range-container").remove();
    }
}

const updateCurrentChain = async () => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network! Switch to Ethereum Mainnet.", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

provider.on("network", async (newNetwork, oldNetwork) => {
    if (oldNetwork) {
        $("#refresh-notification").remove();
        location.reload();
    }
});

// Processing tx returns
const waitForTransaction = async (tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("TejiPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i = 0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("TejiPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("TejiPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
        await displayResultPopup(1);
        toggleMintPopup();
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
        await displayResultPopup(0);
        toggleMintPopup();
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateMintInfo();
    }
}

setInterval(async () => {
    await updateInfo();
    await updateMintInfo();
    // await checkMintingLive();
}, 5000)

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0, 9)}..`);
    $("#account").addClass(`connected`);
};

ethereum.on("accountsChanged", async (accounts_) => {
    location.reload();
});

window.onload = async () => {
    if ((await getAddress())) {
        await updateCurrentChain();
        await updateInfo();
        await checkIfWhitelisted();
        await setPrice();
        await updateMintInfo();
        // await checkMintingLive();
    }
};

window.onunload = async () => {
    cachePendingTransactions();
}
