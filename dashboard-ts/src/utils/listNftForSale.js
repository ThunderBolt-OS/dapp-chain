import { ethers, parseUnits } from 'ethers';

// const marketplaceAddress = "0xa5Fc06987A507f41768D5153D9E1Afd9681c29E1";

// bolt chain
import { MARKETPLACE_CONTRACT_ADDRESS } from 'src/constants';
// const marketplaceAddress = "0xED7c84E25Ef97B4561A1273eC9676b441E2543B0";
import NFTMarketplace from 'src/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';

export async function listNFTForSale(ifpsUrl, price, description) {
	const provider = new ethers.BrowserProvider(window.ethereum);
	const signer = await provider.getSigner();

	/* next, create the item */
	price = parseUnits(String(price), 'ether');
	let contract = new ethers.Contract(MARKETPLACE_CONTRACT_ADDRESS, NFTMarketplace.abi, signer);
	let listingPrice = await contract.getListingPrice();
	listingPrice = listingPrice.toString();
	let transaction = await contract.createToken(ifpsUrl, price, { value: listingPrice });
	await transaction.wait();
}
