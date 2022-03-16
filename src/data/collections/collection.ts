export interface NftItem {
  NFTid: number;
  image: string;
  price: number;
  description: string;
  count: number;
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
    header: "./assets/images/Products/CollectionImages/MeinerColPic.png",
    productImage: "./assets/images/Products/CollectionImages/MeinerColPic.png",
    NFTS: [
      {
        NFTid: 1,
        image: "./assets/images/Products/MeinerNFT/GymPicNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 2,
        image: "./assets/images/Products/MeinerNFT/PopsicleNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 3,
        image: "./assets/images/Products/MeinerNFT/LookAwayNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 4,
        image: "./assets/images/Products/MeinerNFT/TravelNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 5,
        image: "./assets/images/Products/MeinerNFT/StaringAtYouNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 6,
        image: "./assets/images/Products/MeinerNFT/BellpepperNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
    ],
  },
  {
    id: 2,
    name: "BakkumNFT",
    description: "Bakkums eld NFT, köp och få en blowie av Meiner",
    volumeTraded: 100,
    floorPrice: 50,
    header: "./assets/images/Products/CollectionImages/BakkumColPic.png",
    productImage: "./assets/images/Products/CollectionImages/BakkumColPic.png",
    NFTS: [
      {
        NFTid: 7,
        image: "./assets/images/Products/BakkumNFT/BlåtiraBakkumNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 8,
        image: "./assets/images/Products/BakkumNFT/BlåtiraBilBakkumNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 9,
        image: "./assets/images/Products/BakkumNFT/ElvisBakkumNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 10,
        image: "./assets/images/Products/BakkumNFT/FredBakkumNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 11,
        image: "./assets/images/Products/BakkumNFT/StaroBakkumNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 12,
        image: "./assets/images/Products/BakkumNFT/TungaBakkumNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
    ],
  },
  {
    id: 3,
    name: "PappaNFT2",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 73,
    header: "./assets/images/Products/CollectionImages/PappaColPic.png",
    productImage: "./assets/images/Products/CollectionImages/PappaColPic.png",
    NFTS: [
      {
        NFTid: 13,
        image: "./assets/images/Products/PappaNFT/FullPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 14,
        image: "./assets/images/Products/PappaNFT/GladPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 15,
        image: "./assets/images/Products/PappaNFT/HawkingPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 16,
        image: "./assets/images/Products/PappaNFT/SovaPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 17,
        image: "./assets/images/Products/PappaNFT/StaringAtYouPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
      {
        NFTid: 18,
        image: "./assets/images/Products/PappaNFT/VectorPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
    ],
  },
  {
    id: 4,
    name: "PappaNFT3",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 69,
    header: "./assets/images/Products/CollectionImages/PlaceholderColPic.jpg",
    productImage: "./assets/images/Products/CollectionImages/PlaceholderColPic.jpg",
    NFTS: [
      {
        NFTid: 9,
        image: "./assets/images/Products/BellpepperNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
    ],
  },
  {
    id: 5,
    name: "PappaNFT4",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 20,
    header: "./assets/images/Products/CollectionImages/PlaceholderColPic.jpg",
    productImage: "./assets/images/Products/CollectionImages/PlaceholderColPic.jpg",
    NFTS: [
      {
        NFTid: 10,
        image: "./assets/images/Products/BellpepperNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
      },
    ],
  },
  {
    id: 6,
    name: "PappaNFT5",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 420,
    floorPrice: 420,
    header: "./assets/images/Products/CollectionImages/PlaceholderColPic.jpg",
    productImage: "./assets/images/Products/CollectionImages/PlaceholderColPic.jpg",
    NFTS: [
      {
        NFTid: 11,
        image: "./assets/images/Products/CollectionImages/PlaceholderColPic.jpg",
        price: 12,
        description: "testDesc",
        count: 1,
      },
    ],
  },
];
