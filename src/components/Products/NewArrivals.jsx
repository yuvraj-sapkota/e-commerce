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
            <FiChevronLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
