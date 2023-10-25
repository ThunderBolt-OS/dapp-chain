const CONTRACT_ADDRESS = "0xba294dAf29E6AE91A68c4933b60892Ef68a060ec"
const META_DATA_URL = "ipfs://bafkreic5uabxrx7s7thpb2ya3yk67rrcn7t3mba343ftcki6etmoz7dpzu/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to wallet address: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });