export function getDelivery(selectedOption: string) {
  let date = new Date();
  switch (selectedOption) {
    case "DHLOmbud": {
      return {
        image: "/assets/images/Icons/DHL.png",
        description:
          "Din beställning kommer att levereras till närmaste ombud baserat på din adress. Du kommer få en AVI på sms när paketet levererats.",
        time: `2022-${date.getMonth() + 1}-${date.getDate() + 2}`,
      };
    }
    case "DHLExpress": {
      return {
        image: "/assets/images/Icons/DHL.png",
        description: "Hemleverans inom 24 timmar",
        time: `2022-${date.getMonth() + 1}-${date.getDate() + 1}`,
      };
    }
    case "PostNordHem": {
      return {
        image: "/assets/images/Icons/postNord.png",
        description:
          "Hemleverans nästkommande dag. Levereras mellan kockan 10-21",
        time: `2022-${date.getMonth() + 1}-${date.getDate() + 1}`,
      };
    }
    case "PostNordOmbud": {
      return {
        image: "/assets/images/Icons/postNord.png",
        description:
          "Din beställning kommer att levereras till närmaste postombud baserat på din adress. Du kommer få en AVI på sms när paketet levererats.",
        time: `2022-${date.getMonth() + 1}-${date.getDate() + 2}`,
      };
    }
    default: {
      return { image: "", description: "", time: "" };
    }
  }
}
