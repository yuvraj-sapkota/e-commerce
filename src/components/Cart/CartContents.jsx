import { IoTrashBinOutline } from "react-icons/io5";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      quantity: 1,
      price: 15,
      color: "white",
      image:
        "https://i.pinimg.com/736x/9b/c4/56/9bc456defd98b9e8233660d52d09dc73.jpg",
    },
    {
      productId: 2,
      name: "Shirt",
      size: "M",
      quantity: 1,
      price: 15,
      color: "white",
      image:
        "https://i.pinimg.com/736x/9b/c4/56/9bc456defd98b9e8233660d52d09dc73.jpg",
    },
  ];
  return (
    <>
      <div>
        {cartProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row flex-start justify-between space-x-4 py-4 border-b"
          >
            <div>
              <img
                src={product.image}
                alt=""
                className="h-36 w-36 object-cover rounded-lg"
              />
            </div>
            <div>
              <div>
                <h3>{product.name}</h3>
                <p className="text-sm">
                  size: {product.size} | color: {product.color}
                </p>
                <div className="flex space-x-2 items-center">
                  <button className="text-xl font-medium mt-2 border text-center rounded px-2 py-1 ">
                    -
                  </button>
                  <span className="">{product.quantity}</span>
                  <button className="text-xl font-medium mt-2 border text-center rounded px-2 py-1 ">
                    +
                  </button>
                </div>
              </div>
              <div className="flex  mt-2 items-center space-x-2  space-y-2">
                <p className="font-bold text-xl">${product.price}</p>
                <IoTrashBinOutline className="w-5 h-5 hover:text-red-400 text-red-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartContents;
