import * as Types from "../../Types";

export const addToCartAction = (product, quantity = 1) => async (dispatch) => {
  dispatch({ type: Types.POST_CARTS_LOADING, payload: true });
  const payloadData = "";
  addToCartData(product, quantity);

  setTimeout(() => {
    dispatch({ type: Types.POST_CARTS_DATA, payload: payloadData });
  }, 100);
};

export const getCartsAction = (page = 1, paginate = 24) => async (dispatch) => {
  dispatch({ type: Types.GET_CARTS_LOADING, payload: true });

  const cartStorageData = localStorage.getItem("carts");
  let carts = "";
  if (typeof cartStorageData !== "undefined" && cartStorageData !== null) {
    carts = JSON.parse(cartStorageData);
  }

  dispatch({ type: Types.GET_CARTS, payload: carts });
};

export const postEmptyCartMessage = () => async (dispatch) => {
  dispatch({ type: Types.EMPTY_CART_MESSAGE, payload: true });
};

function addToCartData(product, quantity) {
  // Find product first where product_id = this product_id and
  // then if exist increment that totalQuantity or add totalCount
  let products = [];
  const cartStorageData = localStorage.getItem("carts");
  if (typeof cartStorageData !== "undefined" && cartStorageData !== null) {
    let carts = JSON.parse(cartStorageData);
    if (carts.products.length > 0) {
      const findProducts = carts.products.filter(function (x) {
        return x.id === product.id;
      });
      if (findProducts.length > 0) {
        const getProductIndex = carts.products.indexOf(findProducts[0]);
        findProducts[0].qty = findProducts[0].qty + quantity;
        carts.products[getProductIndex] = findProducts[0];
        carts = {
          products: carts.products,
          totalCount: carts.totalCount,
          totalQuantity: carts.totalQuantity + quantity,
        };
      } else {
        product.qty = 1;
        carts.products.push(product);
        carts = {
          products: carts.products,
          totalCount: carts.totalCount + quantity,
          totalQuantity: carts.totalQuantity + quantity,
        };
      }
      localStorage.setItem("carts", JSON.stringify(carts));
    }
  } else {
    // Add as a first item in carts
    product.qty = 1;
    products.push(product);
    let carts = {
      products: products,
      totalCount: quantity,
      totalQuantity: quantity,
    };
    localStorage.setItem("carts", JSON.stringify(carts));
  }
}
