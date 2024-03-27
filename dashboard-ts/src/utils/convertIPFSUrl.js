function addIpfsLink(url) {
	const parts = url.split('/');
	parts.splice(-1, 0, '.ipfs.dweb.link');
	return parts.join('/').replace(/\/(?=\.)/, '');
}

export function convertIPFSUrl(inputUrl, image = false) {
	// Replace "ipfs://" with "https://ipfs.io/ipfs/"
	console.log(inputUrl)
	const outputUrl = inputUrl.replace('ipfs://', 'https://');
	return image ? addIpfsLink(outputUrl) :
		outputUrl + '.ipfs.dweb.link';
}

