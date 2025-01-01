import CountUp from "react-countup";
const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        About Annadata
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Bringing delicious food right to your doorstep
                    </p>
                </div>

                <div className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-8">
                        <div className="text-center">
                            <CountUp end={1000} duration={2.5} className="text-4xl font-bold text-indigo-600" />
                            <p className="mt-2">Happy Customers</p>
                        </div>
                        <div className="text-center">
                            <CountUp end={50} duration={2.5} className="text-4xl font-bold text-indigo-600" />
                            <p className="mt-2">Restaurant Partners</p>
                        </div>
                        <div className="text-center">
                            <CountUp end={100} duration={2.5} className="text-4xl font-bold text-indigo-600" />
                            <p className="mt-2">Cities Served</p>
                        </div>
                        <div className="text-center">
                            <CountUp end={24} duration={2.5} className="text-4xl font-bold text-indigo-600" />
                            <p className="mt-2">Hour Service</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
                        <div>
                            <dt className="text-2xl font-bold text-gray-900">Our Mission</dt>
                            <dd className="mt-3 text-gray-500">
                                To bridge the gap between exceptional food and busy lifestyles, ensuring every meal is a delightful experience.
                            </dd>
                        </div>

                        <div>
                            <dt className="text-2xl font-bold text-gray-900">Our Vision</dt>
                            <dd className="mt-3 text-gray-500">
                                Creating a world where quality food is accessible to everyone, anytime, anywhere.
                            </dd>
                        </div>

                        <div>
                            <dt className="text-2xl font-bold text-gray-900">What We Offer</dt>
                            <dd className="mt-3 text-gray-500">
                                From local favorites to international cuisines, we partner with top-rated restaurants to bring you diverse, exciting menu options.
                            </dd>
                        </div>

                        <div>
                            <dt className="text-2xl font-bold text-gray-900">Why Choose Us</dt>
                            <dd className="mt-3 text-gray-500">
                                Simple ordering process, reliable delivery, and a commitment to customer satisfaction make us your ideal food delivery partner.
                            </dd>
                        </div>
                    </dl>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-xl text-gray-600">
                        Join us in our journey to revolutionize food delivery. Your satisfaction is our top priority.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;