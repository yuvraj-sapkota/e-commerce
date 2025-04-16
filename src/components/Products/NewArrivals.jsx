import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
const NewArrivals = () => {
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 20,
      images: [
        {
          url:
            "https://i.pinimg.com/736x/14/36/93/143693518e595a55f4080138055924dd.jpg",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 20,
      images: [
        {
          url:
            "https://i.pinimg.com/736x/14/36/93/143693518e595a55f4080138055924dd.jpg",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 20,
      images: [
        {
          url:
            "https://i.pinimg.com/736x/14/36/93/143693518e595a55f4080138055924dd.jpg",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 20,
      images: [
        {
          url:
            "https://i.pinimg.com/736x/14/36/93/143693518e595a55f4080138055924dd.jpg",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 20,
      images: [
        {
          url:
            "https://i.pinimg.com/736x/14/36/93/143693518e595a55f4080138055924dd.jpg",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 20,
      images: [
        {
          url:
            "https://i.pinimg.com/736x/14/36/93/143693518e595a55f4080138055924dd.jpg",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: 20,
      images: [
        {
          url:
            "https://i.pinimg.com/736x/14/36/93/143693518e595a55f4080138055924dd.jpg",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 ">
          Discover the latest straight off the runwa, freshly added to keep your
          wardobe on the cutting edge of fashion.
        </p>

        {/* scroll button  */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2 ">
          <button className="p-2 rounded border bg-white text-black">
            <CiCircleChevLeft className="text-2xl" />
          </button>
          <button className="p-2 rounded border bg-white text-black">
            <CiCircleChevRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable content  */}
      <div className="container mx-auto overflow-scroll flex space-x-6 relative">
        {newArrivals.map((product) => (
          <div key={product.id}>
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText}
            />
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md backdrop-opacity-50 text-white p-4 rounded-b-lg">
              <Link to={`/porduct/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
