import ItemList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex();
    };
    return (
        <div className="max-w-3xl mx-auto my-6">
  <div className="bg-gray-100 shadow-md rounded-lg p-4">
    {/* Header Section */}
    <div
      className="flex justify-between items-center cursor-pointer hover:bg-gray-200 p-2 rounded-md transition"
      onClick={handleClick}
    >
      <span className="font-semibold text-lg text-gray-800">
        {data.title} ({data.itemCards.length})
      </span>
      <span className="text-gray-500 hover:text-gray-800 transition">
        <i
          className={`fa-solid ${
            showItems ? "fa-arrow-up" : "fa-arrow-down"
          }`}
        ></i>
      </span>
    </div>

    {/* Expandable Section */}
    {showItems && (
      <div className="mt-4">
        <ItemList items={data.itemCards} />
      </div>
    )}
  </div>
</div>

    );
};

export default RestaurantCategory;