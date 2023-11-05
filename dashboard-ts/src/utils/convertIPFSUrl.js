export function convertIPFSUrl(inputUrl) {
	// Replace "ipfs://" with "https://ipfs.io/ipfs/"
	const outputUrl = inputUrl.replace('ipfs://', 'https://ipfs.io/ipfs/');
	return outputUrl;
}
