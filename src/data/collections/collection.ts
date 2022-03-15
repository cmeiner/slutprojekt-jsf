export interface NftItem {
  NFTid: number;
  image: string;
  price: number;
  description: string;
}

export interface collectionDataItem {
  id: number;
  name: string;
  description: string;
  volumeTraded: number;
  floorPrice: number;
  header: string;
  productImage: string;
  NFTS: NftItem[];
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
    NFTS: [
      { NFTid: 1, image: "testImage", price: 12, description:'testDesc' },
      { NFTid: 2, image: "testImage", price: 12, description:'testDesc' },
      { NFTid: 3, image: "testImage", price: 12, description:'testDesc' },
      { NFTid: 4, image: "testImage", price: 12, description:'testDesc' },
      { NFTid: 5, image: "testImage", price: 12, description:'testDesc' },
      { NFTid: 6, image: "testImage", price: 12, description:'testDesc' },
    ],
  },
  {
    id: 2,
    name: "BakkumNFT",
    description: "Bakkums eld NFT, köp och få en blowie av Meiner",
    volumeTraded: 100,
    floorPrice: 50,
    header: "./assets/images/Products/rareEmilNFT.jpg",
    productImage: "./assets/images/Products/rareEmilNFT.jpg",
    NFTS: [
      { NFTid: 1, image: "testImage", price: 12, description:'testDesc' },
    ],  },
  {
    id: 3,
    name: "PappaNFT2",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 73,
    header: "./assets/images/Products/rareEmilNFT.jpg",
    productImage: "./assets/images/Products/rareEmilNFT.jpg",
    NFTS: [
      { NFTid: 1, image: "testImage", price: 12, description:'testDesc' },
    ],  },
  {
    id: 4,
    name: "PappaNFT3",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 69,
    header: "./assets/images/Products/rareEmilNFT.jpg",
    productImage: "./assets/images/Products/rareEmilNFT.jpg",
    NFTS: [
      { NFTid: 1, image: "testImage", price: 12, description:'testDesc' },
    ],  },
  {
    id: 5,
    name: "PappaNFT4",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 20,
    header: "./assets/images/Products/rareEmilNFT.jpg",
    productImage: "./assets/images/Products/rareEmilNFT.jpg",
    NFTS: [
      { NFTid: 1, image: "testImage", price: 12, description:'testDesc' },
    ],  },
  {
    id: 6,
    name: "PappaNFT5",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 420,
    floorPrice: 420,
    header: "./assets/images/Products/rareEmilNFT.jpg",
    productImage: "./assets/images/Products/rareEmilNFT.jpg",
    NFTS: [
      { NFTid: 1, image: "./assets/images/Products/rareEmilNFT.jpg", price: 12, description:'testDesc' },],  
    },
];
