export interface NftItem {
  NFTid: number;
  image: string;
  price: number;
  description: string;
  count: number;
  collectionID: number
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
    header: "/assets/images/Products/CollectionImages/MeinerColPic.png",
    productImage:
      "/assets/images/Products/CollectionImages/MeinerColPic.png",
    NFTS: [
      {
        NFTid: 1,
        image: "/assets/images/Products/MeinerNFT/GymPicNFT.png",
        price: 12,
        description: "Meiner in the gym",
        count: 1,
        collectionID: 1,
      },
      {
        NFTid: 2,
        image: "/assets/images/Products/MeinerNFT/PopsicleNFT.png",
        price: 12,
        description: "Meiner eating a popsicle",
        count: 1,
        collectionID: 1,
      },
      {
        NFTid: 3,
        image: "/assets/images/Products/MeinerNFT/LookAwayNFT.png",
        price: 12,
        description: "Meiner not looking at you",
        count: 1,
        collectionID: 1,
      },
      {
        NFTid: 4,
        image: "/assets/images/Products/MeinerNFT/TravelNFT.png",
        price: 12,
        description: "Meiner looking at something else",
        count: 1,
        collectionID: 1,
      },
      {
        NFTid: 5,
        image: "/assets/images/Products/MeinerNFT/StaringAtYouNFT.png",
        price: 12,
        description: "Meiner staring into your soul",
        count: 1,
        collectionID: 1,
      },
      {
        NFTid: 6,
        image: "/assets/images/Products/MeinerNFT/BellpepperNFT.png",
        price: 12,
        description: "Meiner eating a bell pepper",
        count: 1,
        collectionID: 1,
      },
    ],
  },
  {
    id: 2,
    name: "BakkumNFT",
    description: "Bakkums eld NFT, köp och få en blowie av Meiner",
    volumeTraded: 100,
    floorPrice: 50,
    header: "/assets/images/Products/CollectionImages/BakkumColPic.png",
    productImage:
      "/assets/images/Products/CollectionImages/BakkumColPic.png",
    NFTS: [
      {
        NFTid: 7,
        image: "/assets/images/Products/BakkumNFT/BlåtiraBakkumNFT.png",
        price: 12,
        description: "Bakkum with a black eye",
        count: 1,
        collectionID: 2,
      },
      {
        NFTid: 8,
        image:
          "/assets/images/Products/BakkumNFT/BlåtiraBilBakkumNFT.png",
        price: 12,
        description: "Bakkum with a black eye in the car",
        count: 1,
        collectionID: 2,
      },
      {
        NFTid: 9,
        image: "/assets/images/Products/BakkumNFT/ElvisBakkumNFT.png",
        price: 12,
        description: "The legendary Elvis",
        count: 1,
        collectionID: 2,
      },
      {
        NFTid: 10,
        image: "/assets/images/Products/BakkumNFT/FredBakkumNFT.png",
        price: 12,
        description: "Bakkum throwing a peace sign",
        count: 1,
        collectionID: 2,
      },
      {
        NFTid: 11,
        image: "/assets/images/Products/BakkumNFT/StaroBakkumNFT.png",
        price: 12,
        description: "Bakkum drinking Staro",
        count: 1,
        collectionID: 2,
      },
      {
        NFTid: 12,
        image: "/assets/images/Products/BakkumNFT/TungaBakkumNFT.png",
        price: 12,
        description: "Bakkum sticking out his tongue",
        count: 1,
        collectionID: 2,
      },
    ],
  },
  {
    id: 3,
    name: "PappaNFT",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 73,
    header: "/assets/images/Products/CollectionImages/PappaColPic.png",
    productImage:
      "/assets/images/Products/CollectionImages/PappaColPic.png",
    NFTS: [
      {
        NFTid: 13,
        image: "/assets/images/Products/PappaNFT/FullPappaNFT.png",
        price: 12,
        description: "Pappa surrounded by smoke",
        count: 1,
        collectionID: 3,
      },
      {
        NFTid: 14,
        image: "/assets/images/Products/PappaNFT/GladPappaNFT.png",
        price: 12,
        description: "Pappa very happy",
        count: 1,
        collectionID: 3,
      },
      {
        NFTid: 15,
        image: "/assets/images/Products/PappaNFT/HawkingPappaNFT.png",
        price: 12,
        description: "Pappa very relaxed",
        count: 1,
        collectionID: 3,
      },
      {
        NFTid: 16,
        image: "/assets/images/Products/PappaNFT/SovaPappaNFT.png",
        price: 12,
        description: "Pappa very sleepy",
        count: 1,
        collectionID: 3,
      },
      {
        NFTid: 17,
        image:
          "/assets/images/Products/PappaNFT/StaringAtYouPappaNFT.png",
        price: 12,
        description: "Pappa staring into your soul",
        count: 1,
        collectionID: 3,
      },
      {
        NFTid: 18,
        image: "/assets/images/Products/PappaNFT/VectorPappaNFT.png",
        price: 12,
        description: "Pappa very fresh",
        count: 1,
        collectionID: 3,
      },
    ],
  },
  {
    id: 4,
    name: "F1NFT",
    description: "F1s egna NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 73,
    header: "/assets/images/Products/CollectionImages/F1ColPic.png",
    productImage:
      "/assets/images/Products/CollectionImages/F1ColPic.png",
    NFTS: [
      {
        NFTid: 19,
        image: "/assets/images/Products/F1NFT/afF1NFT.png",
        price: 12,
        description: "Alfa Romeo livery 2022",
        count: 1,
        collectionID: 4,
      },
      {
        NFTid: 20,
        image: "/assets/images/Products/F1NFT/atF1NFT.png",
        price: 12,
        description: "AlphaTauri livery 2022",
        count: 1,
        collectionID: 4,
      },
      {
        NFTid: 21,
        image: "/assets/images/Products/F1NFT/ferF1NFT.png",
        price: 12,
        description: "Ferrari livery 2022",
        count: 1,
        collectionID: 4,
      },
      {
        NFTid: 22,
        image: "/assets/images/Products/F1NFT/haasF1NFT.png",
        price: 12,
        description: "Haas livery 2022",
        count: 1,
        collectionID: 4,
      },
      {
        NFTid: 23,
        image:
          "/assets/images/Products/F1NFT/mercF1NFT.png",
        price: 12,
        description: "Mercedes livery 2022",
        count: 1,
        collectionID: 4,
      },
      {
        NFTid: 24,
        image: "/assets/images/Products/F1NFT/rbF1NFT.png",
        price: 12,
        description: "Redbull livery 2022",
        count: 1,
        collectionID: 4,
      },
    ],
  },
  {id: 5,
    name: "PappaNFT4",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 73,
    header: "/assets/images/Products/CollectionImages/PappaColPic.png",
    productImage:
      "/assets/images/Products/CollectionImages/PappaColPic.png",
    NFTS: [
      {
        NFTid: 25,
        image: "/assets/images/Products/PappaNFT/FullPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
        collectionID: 5,
      },
      {
        NFTid: 26,
        image: "/assets/images/Products/PappaNFT/GladPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
        collectionID: 5,
      },
      {
        NFTid: 27,
        image: "/assets/images/Products/PappaNFT/HawkingPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
        collectionID: 5,
      },
      {
        NFTid: 28,
        image: "/assets/images/Products/PappaNFT/SovaPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
        collectionID: 5,
      },
      {
        NFTid: 29,
        image:
          "/assets/images/Products/PappaNFT/StaringAtYouPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
        collectionID: 5,
      },
      {
        NFTid: 30,
        image: "/assets/images/Products/PappaNFT/VectorPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
        collectionID: 5,
      },
    ],
  },
  {id: 6,
    name: "PappaNFT5",
    description: "Pappas gamla NFT, köp och få en blowie av Meiner",
    volumeTraded: 30,
    floorPrice: 73,
    header: "/assets/images/Products/CollectionImages/PappaColPic.png",
    productImage:
      "/assets/images/Products/CollectionImages/PappaColPic.png",
    NFTS: [
      {
        NFTid: 31,
        image: "/assets/images/Products/PappaNFT/FullPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
        collectionID: 6,
      },
      {
        NFTid: 32,
        image: "/assets/images/Products/PappaNFT/GladPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
        collectionID: 6,
      },
      {
        NFTid: 33,
        image: "/assets/images/Products/PappaNFT/HawkingPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
        collectionID: 6,
      },
      {
        NFTid: 34,
        image: "/assets/images/Products/PappaNFT/SovaPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
        collectionID: 6,
      },
      {
        NFTid: 35,
        image:
          "/assets/images/Products/PappaNFT/StaringAtYouPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
        collectionID: 6,
      },
      {
        NFTid: 36,
        image: "/assets/images/Products/PappaNFT/VectorPappaNFT.png",
        price: 12,
        description: "testDesc",
        count: 1,
        collectionID: 6,
      },
    ],
  }
]