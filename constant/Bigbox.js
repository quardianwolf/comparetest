import React from 'react'

const Categories3 = () => {
    const categories = [
        {
          id: '1',
          name: 'Desk and Office',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/collection_list_earphones_6c56cc2c-171a-4e86-a967-b59464cc7820.jpg?v=1659615007&width=600',
          imageAlt: 'Lightweight luxury earphones',
          href: '#',
        },
        {
          id: '2',
          name: 'Self-Improvement',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/collection_list_headphones_b76f953b-698b-4257-9340-82efb5619f36.jpg?v=1659615056&width=600',
          imageAlt: 'Upgrade your listening experience',
          href: '#',
        },
        {
          id: '3',
          name: 'Travel',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/collection_list_leica.jpg?v=1659615075&width=600',
          imageAlt: 'Discover exclusive collabrations',
          href: '#',
        },
      ]
  return (
    <div className=" box33">
    <div className="mx-auto max-w-full py-16 px-4 sm:py-24 sm:px-6 lg:max-w-10xl lg:px-48">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {categories.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
          </a>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Categories3