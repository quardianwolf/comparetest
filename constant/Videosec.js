import React from 'react'

const Videosec = () => {
    return (
        <div className="videosec">
            <div className='container'>
            <div className="mx-auto  py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                    <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                        <video autoPlay={true} muted={true} loop={true} style={{ width: '700px', height: '500px' }} className="object-cover object-center group-hover:opacity-75 z-10" >
                            <source src='https://cdn.shopify.com/videos/c/vp/64f5e0c914284bc99dab99bcb9919e3b/64f5e0c914284bc99dab99bcb9919e3b.HD-720p-1.6Mbps-9182920.mp4' />
                        </video>
                        <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                    </div>
                    <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                            alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        />
                        <div
                            aria-hidden="true"
                            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                        />
                        <div className="flex items-end p-6 sm:absolute sm:inset-0">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        Accessories
                                    </a>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                            alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                        />
                        <div
                            aria-hidden="true"
                            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                        />
                        <div className="flex items-end p-6 sm:absolute sm:inset-0">
                            <div>
                                <h3 className="font-semibold text-white">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        Workspace
                                    </a>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:hidden">
                    <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                        Browse all categories
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Videosec