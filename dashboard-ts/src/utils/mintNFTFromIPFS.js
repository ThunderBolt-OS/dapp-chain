import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import contractArtifact from "./artifacts/contracts/ExampleNFT.sol/ExampleNFT.json";
const CONTRACT_ADDRESS = "0x3Fbe035eb0FF09f1DFA696d94A6AB5Da26eCc686";
const CONTRACT_ABI = contractArtifact.abi;

export async function NFTKoMintMaar(metaDataURL) {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);

        // Use eth_requestAccounts to request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const signer = await provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        const nftTx = await contract.mintNFT(window.ethereum.selectedAddress, metaDataURL);
        await nftTx.wait();
        // const totalTokens = await contract.methods.getTokenCount().call();
        // console.log("total tokens",totalTokens)
        console.log(nftTx)
        const getAddr = await signer.getAddress();
        console.log("NFT minted! address:", getAddr.toString());
        return { address: getAddr.toString() };
    } catch (error) {
        console.error("Error minting NFT:", error);
        return null;
    }
}
