import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const product = {
  details: [
    {
      name: 'Do you ship overseas?',
      items: ['Yes, we ship all over the world. Shipping costs will apply, and will be added at checkout. We run discounts and promotions all year, so stay tuned for exclusive deals.']
    },
    {
        name: 'Do i need to setup an account to place an order?',
        items: ['You do not need to set up an account to place an order. However creating an account allows you to store your shipping information, see order history, and view your product’s warranty information. Additional features will be added to the account page in the near future.']
    },
    {
    name: 'Do you offer gift wrapping?',
    items: ['Yes, we can wrap your item in our signature box with tissue paper, and include a card with your personal message. The option is available during checkout for an additional $5. Please note this service is not available for wireless speaker purchases.']
    },
    {
    name: 'How long will it take to get my orders?',
    items: ['It depends on where you are. Orders processed here will take 5-7 business days to arrive. Overseas deliveries can take anywhere from 7-16 days. Delivery details will be provided in your confirmation email.']
    },
    {
    name: 'What is your return policy?',
    items: ['All products purchased from our website may be returned within 14 days of purchase for a full refund less shipping costs, no questions asked. International return orders may be subject to return shipping fees. To initiate such a return please contact us.']
    },
    {
        name: 'Any question?',
        items: ['You can contact us through our  contact page! </link> We will be happy to assist you.']
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Question = () => {
  
    
  return (
    <div className='QuestionSEc'> 
    <div className='container'>
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {/* Image gallery */}
        <Tab.Group as="div" className="flex flex-col-reverse">
          <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
      
              <Tab.Panel>
               <h2 className='text-[2.5rem] py-2'>Have a question? We are here to help.</h2>
               <p className='text-[1rem] text-gray-600 py-2'>Check out the most common questions our customers asked. Still have questions ? Contact our customer support.</p>
               <img alt='image' src="https://cdn.shopify.com/s/files/1/0646/2118/3226/files/team-fff.png?v=1660227343&width=160" className='py-2' />
               <p className='text-[1rem] text-gray-600 box2'>Our customer support is available monday to friday: 8am-8:30pm.</p>
               <p className='text-[1rem] text-gray-600 box2'>Average answer time: 24h</p>
              </Tab.Panel>

          </Tab.Panels>
        </Tab.Group>

        {/* Product info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 tablo">
          <section  className="mt-12 bg-gray-200 px-4">
            <div className="divide-y divide-gray-200 border-t">
              {product.details.map((detail) => (
                <Disclosure as="div" key={detail.name}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span
                            className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                          >
                            {detail.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                        <ul role="list">
                          {detail.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
  )
}

export default Question