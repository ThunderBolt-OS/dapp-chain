Here's a revised version of your README:

# HAS CHAIN NFT Minting Guide

## Deploy the Smart Contract

1. To deploy the smart contract, execute the following command:
   ```bash
   npx hardhat run scripts/deploy-contract.mjs --network PolygonMumbai
   ```
2. You will receive an output like this:
   ```
   Contract deployed to address: 0xF04aE873133f78ec2c82136D2DD204004C514862
   ```

## How to Mint an NFT on HAS CHAIN

Minting an NFT on HAS CHAIN is a simple process. Follow these steps to create and upload your NFT:

### 1. Create Your Asset

Start by creating your digital asset in the form of an image. Ensure that the image meets the required specifications and quality standards.

### 2. Upload Your Image

Upload the created image to the "assets" folder within your project directory. Make sure the image file is in the correct format and is named appropriately.

### 3. Update File Name in `store-assets.mjs`

Open the `store-assets.mjs` file located in your project directory and update the file name (image name) within the script. Replace `<YOUR_FILE_NAME>` with the name of your image file, including its extension. Also, replace `<type_of_image>` with the actual file type of your image.

Here's the updated script:

```javascript
// ... (previous code)

const metadata = await client.store({
  name: "Dave the Harshal",
  description: "My ExampleNFT is an awesome artwork!",
  image: new File(
    [await fs.promises.readFile("assets/<YOUR_FILE_NAME>.<type_of_image>")],
    "<YOUR_FILE_NAME>.<type_of_image>",
    { type: "image/<type_of_image>" }
  ),
});

// ... (rest of the code)
```

### 4. Run the Command

Open your terminal, navigate to your project directory, and execute the following command to mint your NFT:

```bash
node scripts/store-asset.mjs
```

### 5. Get the IPFS URL

After running the command, you will receive an output like this:

```bash
Metadata stored on Filecoin and IPFS with URL: ipfs://bafyreide7jzio6pf63njjiohifym7ubihm52tnwpygjubq7jkw3bogmi4u/metadata.json
```

Copy this IPFS URL.

### 6. Update `mint-nft.mjs`

Open the `./scripts/mint-nft.mjs` file and replace `<YOUR_IPFS_URL>` with the IPFS URL you copied in the previous step (enclose it in double quotes).

Here's the updated script:

```javascript
// ... (previous code)

const CONTRACT_ADDRESS = "0xF04aE873133f78ec2c82136D2DD204004C514862";
const META_DATA_URL =
  "ipfs://bafyreide7jzio6pf63njjiohifym7ubihm52tnwpygjubq7jkw3bogmi4u/metadata.json";

// ... (rest of the code)
```

### 7. Mint Your NFT

Run the following command in your terminal to mint your NFT:

```bash
npx hardhat run scripts/mint-nft.mjs --network PolygonMumbai
```

### 8. Verify Minting

You will receive an output like this:

```bash
NFT minted to: 0xF5e7f33FD642076c62EdCEB2ad3680ea53b07B23
```

This indicates that your NFT has been successfully minted.

### 9. Congratulations!

You have minted an NFT at `http://localhost:4001/token/0xF04aE873133f78ec2c82136D2DD204004C514862/inventory`, where `0xF04aE873133f78ec2c82136D2DD204004C514862` is your contract's deploy address. Note that this address may change if you redeploy the contract or restart your system.

### 10. View Your NFT

You can view your minted NFT on Polygon zkEVM.

### 11. Add Your Minted NFT to Wallet (Metamask)

To add your minted NFT to your wallet (preferably Metamask):

1. Go to the NFTs tab in Metamask.
2. On the bottom left, click on 'Import NFT'.
3. Add your contract's address in the 'address' field.
4. Add the token ID in the 'token id' field. You can find the token ID by visiting the URL mentioned in step 9.

Enjoy your newly minted NFT on HAS CHAIN!

Q1. why blockchain
Q2. why polygon
Q3. why started with genesis
Q4.  