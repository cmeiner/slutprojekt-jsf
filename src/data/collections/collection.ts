export interface collectionDataItem {
  id: number;
  name: string;
  description: string;
  volumeTraded: number;
  floorPrice: number;
  header: string;
  productImage: string;
  NFTS: [{}];
}

export const collectionData: collectionDataItem[] = [
  {
    id: 1,
    name: "MeinerNFT",
    description: "Meiners kuksugar NFT, köp och få en blowie",
    volumeTraded: 0.2,
    floorPrice: 0.003,
    header: "./assets/images/Products/rareEmilNFT.jpg",
    productImage: "./assets/images/Products/rareEmilNFT.jpg",
    NFTS: [{id:1, image: "test"}],
  },
  {
    id: 2,
    name: "BakkumNFT",
    description: "Bakkums eld NFT, köp och få en blowie av Meiner",
    volumeTraded: 100,
    floorPrice: 50,
    header: "./assets/images/Products/rareEmilNFT.jpg",
    productImage: "./assets/images/Products/rareEmilNFT.jpg",
    NFTS: [{id:1, image: "test"}],
  },
  {
    id: 3,
    name: "PappaNFT2",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 73,
    header: "./assets/images/Products/rareEmilNFT.jpg",
    productImage: "./assets/images/Products/rareEmilNFT.jpg",
    NFTS: [{id:1, image: "test"}],
  },
  {
    id: 4,
    name: "PappaNFT3",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 69,
    header: "./assets/images/Products/rareEmilNFT.jpg",
    productImage: "./assets/images/Products/rareEmilNFT.jpg",
    NFTS: [{id:1, image: "test"}],
  },
  {
    id: 5,
    name: "PappaNFT4",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 20,
    header: "./assets/images/Products/rareEmilNFT.jpg",
    productImage: "./assets/images/Products/rareEmilNFT.jpg",
    NFTS: [{id:1, image: "test"}],
  },
  {
    id: 6,
    name: "PappaNFT5",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 420,
    floorPrice: 420,
    header: "./assets/images/Products/rareEmilNFT.jpg",
    productImage: "./assets/images/Products/rareEmilNFT.jpg",
    NFTS: [{id:1, image: "test"}],
  },
];
