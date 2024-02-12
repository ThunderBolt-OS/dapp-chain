import { ethers, parseUnits } from 'ethers';
import axios from 'axios';
import { JSON_RPC_URL } from 'src/constants';
import { useChainDetails } from 'src/contexts/ChainDetailsContext';
// const marketplaceAddress = "0xa5Fc06987A507f41768D5153D9E1Afd9681c29E1";

// bolt chain
import { MARKETPLACE_CONTRACT_ADDRESS } from 'src/constants';
// const marketplaceAddress = "0xED7c84E25Ef97B4561A1273eC9676b441E2543B0";
import NFTMarketplace from 'src/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';



export async function listNFTForSale(ifpsUrl, price, description, chainDetails) {
	const provider = new ethers.BrowserProvider(window.ethereum);
	// const provider = new ethers.JsonRpcProvider(JSON_RPC_URL, { chainId: 100});
	const signer = await provider.getSigner();

	// /* next, create the item */
	price = parseUnits(String(price), 'ether');
	let contract = new ethers.Contract(MARKETPLACE_CONTRACT_ADDRESS, NFTMarketplace.abi, signer);
	let listingPrice = await contract.getListingPrice();
	listingPrice = listingPrice.toString();
	let transaction = await contract.createToken(ifpsUrl, price, { value: listingPrice });
	const receipt = await transaction.wait();

	// GET api call to get the cpu temperature
	let cpuTemp = null;

	try {
		const response = await axios.get('http://localhost:8000/cpu-metrics');
		cpuTemp = response.data;
		console.log('cpu temperature', response.data);
	} catch (error) {
		console.error('error in getting cpu metric', error);
	}

	// POST api call to send the transaction and the cpu temperature
	console.log('chain details inside mint nft func', chainDetails)
	let data = {
		receipt: JSON.stringify(receipt),
		transaction_type: 'Mint',
		block_difficulty: chainDetails.blockDifficulty,
		created_at: new Date(),
		...cpuTemp
	};
	console.log('this is data', data);

	try {
		const response = await axios.post('http://localhost:8000/create-cpu-temperature-transaction/', data);
		console.log('POST response', response);
	} catch (error) {
		console.error('error in posting txn', error);
	}

	// kundali mili
	console.log('receipt', receipt);
	console.log('string receipt', JSON.stringify(receipt));
}
