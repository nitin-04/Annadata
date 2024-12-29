const Shimmer = () => {
    return (
        <div className="p-6">
            {/* Shimmer Header */}
            <div className="p-4 md:flex-row h-20 bg-gray-300 rounded-lg mb-6 mx-4 animate-pulse"></div>
            
            {/* Shimmer Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {Array(8) // Adjust the number to match the number of shimmer cards
                    .fill("")
                    .map((_, index) => (
                        <div
                            key={index}
                            className="m-4 p-1 w-[300px] bg-white shadow-md rounded-xl hover:shadow-lg transition duration-300"
                        >
                            {/* Image Section */}
                            <div className="rounded-lg w-full h-[300px] bg-gray-300 animate-pulse"></div>

                            {/* Content Section */}
                            <div className="mt-4 h-[120px] flex flex-col justify-between">
                                <div className="w-3/4 h-4 bg-gray-300 rounded-md animate-pulse"></div>
                                <div className="w-1/2 h-4 bg-gray-300 rounded-md animate-pulse mt-2"></div>
                                <div className="w-full h-4 bg-gray-300 rounded-md animate-pulse mt-2"></div>
                                <div className="w-1/2 h-4 bg-gray-300 rounded-md animate-pulse mt-2"></div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Shimmer;
