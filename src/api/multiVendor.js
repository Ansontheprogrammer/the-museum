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

    const products = resp.data.items.map((item) => {
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
            originalSrc:
              "https://static.wixstatic.com/media/7b0a34_d29a4da9e0374f1cb497fadcc64185c7~mv2_d_8192_5461_s_4_2.jpg#originWidth=300&originHeight=300",
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

/**
 * id
                  title
                  vendor
                  productType
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                  description
                  images {
                    originalSrc
                  }
                  availableForSale
                  variants {
                    selectedOptions {
                      name
                      value
                    }
                    image {
                      originalSrc
                    }
                    title
                    availableForSale
                  }
 */
// mainMedia: "wix:image://v1/7b0a34_d82907223bc449e9be53d5a3e421a422~mv2.jpg/file.jpg#originWidth=300&originHeight=300";
