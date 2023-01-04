import React from 'react'

const Categories = () => {
    const categories = [
        {
          name: 'Headphones',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MG20B1_Hero_800x800_1_2.jpg?v=1657269450&width=300',
        },
        {
          name: 'Earphones',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MW08SportGR_Angle_Right_800x800_8a72d3f1-7771-4cb1-8ceb-3106713e47d6_800x800_2.jpg?v=1657269636&width=300',
        },
        {
          name: 'Speaker',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MA770_Front_800x800_6fa371dc-5be6-4991-87b2-a70272cdea96_800x800_1.jpg?v=1657269756&width=300',
        },
        {
          name: 'Collaborations',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/1200x1200.jpg?v=1657270122&width=300',
        },
        { name: 'Accessories', href: '#', imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MC100_S3_hero_800x800_1.jpg?v=1657269855&width=300' },
      ]
  return (
    <div>
    <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-full xl:px-48">
      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                >
                  <span aria-hidden="true" className="absolute inset-0">
                    <img src={category.imageSrc} alt='image' className="h-full w-full object-cover object-center" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3  from-gray-800 opacity-50"
                  />
                  <span className="relative mt-auto text-center text-xl font-bold text-black">{category.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 px-4 sm:hidden">
        <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Categories