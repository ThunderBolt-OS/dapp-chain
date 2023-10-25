import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const { NFT_STORAGE_API_KEY } = process.env

export async function storeAsset(title, description, image) {
    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })
    const metadata = await client.store({
        name: title,
        description: description,
        image: new File(
            [await fs.promises.readFile('assets/soham.png')],
            'adityapai.jpg',
            { type: 'image/jpg' }
        ),
    })
    console.log(await fs.promises.readFile('assets/soham.png'))
    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

// storeAsset()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });