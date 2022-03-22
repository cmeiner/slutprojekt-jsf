export function getDelivery(selectedOption: string) {
  let date = new Date();
  switch (selectedOption) {
    case "DHLOmbud": {
      return {
        image: "/assets/images/Icons/DHL.png",
        description:
          "Your order will be delivered to the nearest postal agent based on your address. You will receive an AVI by text message when the package has been delivered.",
        time: ` Estimated delivery date: 2022-${date.getMonth() + 1}-${
          date.getDate() + 2
        }`,
      };
    }
    case "DHLExpress": {
      return {
        image: "/assets/images/Icons/DHL.png",
        description: "Home delivery within 24 hours",
        time: `Estimated delivery date: 2022-${date.getMonth() + 1}-${
          date.getDate() + 1
        }`,
      };
    }
    case "PostNordHem": {
      return {
        image: "/assets/images/Icons/postNord.png",
        description: "Home delivery next day. Delivered between 10AM-9PM",
        time: `Estimated delivery date: 2022-${date.getMonth() + 1}-${
          date.getDate() + 1
        }`,
      };
    }
    case "PostNordOmbud": {
      return {
        image: "/assets/images/Icons/postNord.png",
        description:
          "Your order will be delivered to the nearest postal agent based on your address. You will receive an AVI by text message when the package has been delivered.",
        time: `Estimated delivery date: 2022-${date.getMonth() + 1}-${
          date.getDate() + 2
        }`,
      };
    }
    default: {
      return { image: "", description: "", time: "" };
    }
  }
}
