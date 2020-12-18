import axios from "axios";

export async function getKbuttaProducts() {
  const url = `https://www.k-butta.com/_functions/products`;
  try {
    const resp = await axios({
      url,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const images = {
      "7ff278c7-7122-db5a-dff4-19a3bc90b2f5":
        "https://static.wixstatic.com/media/7b0a34_d82907223bc449e9be53d5a3e421a422~mv2.jpg/v1/fill/w_420,h_420,al_c,lg_1,q_85/7b0a34_d82907223bc449e9be53d5a3e421a422~mv2.jpg",
      "c249ad3c-1e4e-de1e-b0e2-80e72abcce37":
        "https://static.wixstatic.com/media/7b0a34_15d496b01e5b4685812ecdd505ebb496~mv2.jpg/v1/fill/w_720,h_720,al_c,lg_1,q_85/7b0a34_15d496b01e5b4685812ecdd505ebb496~mv2.jpg",
      "d6fc5161-b39a-c714-976c-b4cbbe95cac4":
        "https://static.wixstatic.com/media/7b0a34_d29a4da9e0374f1cb497fadcc64185c7~mv2_d_8192_5461_s_4_2.jpg/v1/fill/w_1000,h_666,al_c,q_85,usm_0.66_1.00_0.01/7b0a34_d29a4da9e0374f1cb497fadcc64185c7~mv2_d_8192_5461_s_4_2.jpg",
      "c74417be-541f-aeab-ccf9-4016bce4978d":
        "https://static.wixstatic.com/media/11062b_bd98f947160d4fe4b371095f53c04f0b~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,usm_0.66_1.00_0.01/11062b_bd98f947160d4fe4b371095f53c04f0b~mv2.jpg",
      "4abf7609-426e-bfbd-237c-5c08c533c73b":
        "https://static.wixstatic.com/media/7b0a34_a06260c3b68342fc99b6a88dbaeb96ef~mv2.jpg/v1/fill/w_780,h_519,al_c,lg_1,q_85/7b0a34_a06260c3b68342fc99b6a88dbaeb96ef~mv2.jpg",
      "0d526cbd-9de4-2e4b-b7bf-77b627a029a1":
        "https://static.wixstatic.com/media/7b0a34_a34e95a7656a409b8fae1bc7f172ee3a~mv2_d_3456_4608_s_4_2.jpg/v1/fill/w_1000,h_1334,al_c,q_85,usm_0.66_1.00_0.01/7b0a34_a34e95a7656a409b8fae1bc7f172ee3a~mv2_d_3456_4608_s_4_2.jpg",
    };

    const products = resp.data.items
      .filter((item) => images[item._id])
      .map((item) => {
        return {
          id: item._id,
          title: item.name,
          vendor: "k-butta",
          productType: item.productType,
          priceRange: {
            minVariantPrice: {
              amount: item.price,
            },
          },
          description: item.description,
          images: [
            {
              originalSrc: images[item._id],
            },
          ],
          availableForSale: true,
          variants: [],
        };
      });

    return products;
  } catch (err) {
    console.error(err);
    return [];
  }
}
