import { collectionData, collectionDataItem } from "../data/collections/collection";

function getFeatured() {
    let newList = collectionData.sort(function(a, b){return a.floorPrice-b.floorPrice})
    while(newList.length > 3){
      newList.shift()
    }

    return newList
}

export default getFeatured