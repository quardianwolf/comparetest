import { useState, useRef } from "react";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const product = {
  name: "MW08 Sport (Green Sapphire Glass / Black Kevlar® Case)",
  price: "$140",
  rating: 1,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MW08Sport-Case_Fit_800x800_800x800_aa6c9338-5209-4bfe-a2b3-0b27d32e7fea.png?v=1661857113&width=800",
      alt: "Angled front view with bag zipped and handles upright."
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MW08SportGR_Angle_Right_800x800_800x800_cda2c6e3-6fa7-4f7a-a63c-4a1d8294e94f.png?v=1656941071&width=800",
      alt: "Angled front view with bag zipped and handles upright."
    },
    {
      id: 3,
      name: "Angled view",
      src: "https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MW08SportGR_Fit_800x800_800x800_9ca2ae5e-7803-4483-860e-5a072d8abf58.png?v=1661857113&width=800",
      alt: "Angled front view with bag zipped and handles upright."
    },
    {
      id: 4,
      name: "Angled view",
      src: "https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MW08SportGR_Inside-ChargingCase_800x800_800x800_5a07bbc5-08b2-48eb-a796-53409b2b9553.png?v=1661857113&width=800",
      alt: "Angled front view with bag zipped and handles upright."
    },
    {
      id: 5,
      name: "Angled view",
      src: "https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MW08SportGR_Generic_IPhone_800x800_800x800_e79c31a6-ec74-4564-9279-c0a95021c69c.png?v=1661857113&width=800",
      alt: "Angled front view with bag zipped and handles upright."
    },
    {
      id: 6,
      name: "Angled view",
      src: "https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MW08-SPORT_OnModel-Green_800x800_0989482c-1356-45fa-a614-0c4bba6cca1f.jpg?v=1661857113&width=800",
      alt: "Angled front view with bag zipped and handles upright."
    }
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700"
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500"
    }
  ],
  description: `
    <p>aciklama aciklama</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant"
      ]
    }
    // More sections...
  ]
};
const question = {
  details: [
    {
      name: "Do you ship overseas?",
      items: [
        "Yes, we ship all over the world. Shipping costs will apply, and will be added at checkout. We run discounts and promotions all year, so stay tuned for exclusive deals."
      ]
    },
    {
      name: "Do i need to setup an account to place an order?",
      items: [
        "You do not need to set up an account to place an order. However creating an account allows you to store your shipping information, see order history, and view your product’s warranty information. Additional features will be added to the account page in the near future."
      ]
    },
    {
      name: "Do you offer gift wrapping?",
      items: [
        "Yes, we can wrap your item in our signature box with tissue paper, and include a card with your personal message. The option is available during checkout for an additional $5. Please note this service is not available for wireless speaker purchases."
      ]
    },
    {
      name: "How long will it take to get my orders?",
      items: [
        "It depends on where you are. Orders processed here will take 5-7 business days to arrive. Overseas deliveries can take anywhere from 7-16 days. Delivery details will be provided in your confirmation email."
      ]
    },
    {
      name: "What is your return policy?",
      items: [
        "All products purchased from our website may be returned within 14 days of purchase for a full refund less shipping costs, no questions asked. International return orders may be subject to return shipping fees. To initiate such a return please contact us."
      ]
    },
    {
      name: "Any question?",
      items: [
        "You can contact us through our  contact page! </link> We will be happy to assist you."
      ]
    }
  ]
};

const products = [
  {
    id: 1,
    name: "MC100 Wireless Charge Pad (Gunmetal Aluminum / Black Coated Canvas)",
    href: "#",
    price: "$50",
    availability: "White and Black",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MC100_G1_hero_800x800_629d612d-38d6-471b-b1db-eede9eaedff7.png?v=1656681848&width=400",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop."
  },
  {
    id: 1,
    name: "MC100 Wireless Charge Pad (Gunmetal Aluminum / Black Coated Canvas)",
    href: "#",
    price: "$50",
    availability: "White and Black",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MC100_G1_hero_800x800_629d612d-38d6-471b-b1db-eede9eaedff7.png?v=1656681848&width=400",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop."
  },
  {
    id: 1,
    name: "MC100 Wireless Charge Pad (Gunmetal Aluminum / Black Coated Canvas)",
    href: "#",
    price: "$50",
    availability: "White and Black",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MC100_G1_hero_800x800_629d612d-38d6-471b-b1db-eede9eaedff7.png?v=1656681848&width=400",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop."
  },
  {
    id: 1,
    name: "MC100 Wireless Charge Pad (Gunmetal Aluminum / Black Coated Canvas)",
    href: "#",
    price: "$50",
    availability: "White and Black",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MC100_G1_hero_800x800_629d612d-38d6-471b-b1db-eede9eaedff7.png?v=1656681848&width=400",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop."
  },
  

  // More products...
];

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { Navbar } from "../components";

function classNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

const slug = () => {
  const categories = [
    {
      name: "Headphones",
      href: "#",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MG20B1_Hero_800x800_1_2.jpg?v=1657269450&width=300",
      price: "150"
    },
    {
      name: "Earphones",
      href: "#",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MW08SportGR_Angle_Right_800x800_8a72d3f1-7771-4cb1-8ceb-3106713e47d6_800x800_2.jpg?v=1657269636&width=300",
      price: "150"
    },
    {
      name: "Speaker",
      href: "#",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MA770_Front_800x800_6fa371dc-5be6-4991-87b2-a70272cdea96_800x800_1.jpg?v=1657269756&width=300",
      price: "150"
    },
    {
      name: "Collaborations",
      href: "#",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0646/2118/3226/files/1200x1200.jpg?v=1657270122&width=300",
      price: "150"
    },
    {
      name: "Accessories",
      href: "#",
      price: "150",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MC100_S3_hero_800x800_1.jpg?v=1657269855&width=300"
    }
  ];

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <>
    <Navbar/>
    <main className="anchor" id="main" role="main">
      <section
        id="shopify-section-template--16701008806138__main"
        className="shopify-section shopify-section--main-product py-24"
      >
        <div className="">
          <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-screen-2xl lg:px-8 bg-white roundedT">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-120 gridMob">
              {/* Image gallery */}
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                  <Tab.List className="flex flex-col-reverse absolute top-48 w-16 hori">
                    {product.images.map((image) => (
                      <Tab
                        key={image.id}
                        className="relative flex h-16 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 "
                      >
                        {({ selected }) => (
                          <>
                            <span className="sr-only"> {image.name} </span>
                            <span className="absolute inset-0 overflow-hidden rounded-md">
                              <img
                                src={image.src}
                                alt=""
                                className="h-16 w-16 object-cover object-center"
                              />
                            </span>
                            <span
                              className={classNames(
                                selected
                                  ? "border-b-4 border-black"
                                  : "ring-transparent",
                                "pointer-events-none absolute inset-0 rounded-md "
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>

                <Tab.Panels className="aspect-w-1 aspect-h-1 w-full anaresim">
                  {product.images.map((image) => (
                    <Tab.Panel key={image.id}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="anaresim object-cover object-center sm:rounded-lg"
                      />
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              {/* Product info */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 urun-isim">
                  {product.name}
                </h1>
                <div className="price-review">
                  <div className="mt-3">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-2xl tracking-tight text-gray-900 font-normal">
                      {product.price}
                    </p>
                  </div>

                  {/* Reviews */}
                  <div className="mt-3">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              product.rating > rating
                                ? "text-[#ffb74a]"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{product.rating} out of 5 stars</p>
                    </div>
                  </div>
                  
                </div>
                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>

                  <div
                    className="space-y-6 text-base text-gray-700"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>

                <form className="mt-6">
                  {/* Colors */}
                  <div>
                    <h3 className="text-sm text-gray-600">Color</h3>

                    <RadioGroup
                      defaultValue={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-2"
                    >
                      <RadioGroup.Label className="sr-only">
                        {" "}
                        Choose a color{" "}
                      </RadioGroup.Label>
                      <span className="flex items-center space-x-3">
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            defaultValue={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedColor,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {" "}
                              {color.name}{" "}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.bgColor,
                                "h-8 w-8 border border-black border-opacity-10 rounded-full"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </span>
                    </RadioGroup>
                  </div>

                  <div className="sm:flex-col-1 mt-10 flex">
                  <button type="button" className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-16 py-3.5 mr-2 mb-2 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 button_slug">Add to cart</button>

                  <button type="button" className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-16 py-3.5 mr-2 mb-2 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 button_slug">Add to cart</button>

                    
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="shopify-section-template--16701008806138__1657709004c2ed8cf5"
        className="shopify-section shopify-section--feature-chart"
      >
        <div className="container">
          <div className="section   section-blends section-full">
            <div className="section-stack section-stack--horizontal ">
              <div className="section-stack__intro">
                <div className="prose ">
                  <p className="bold">About the MW08 Sport</p>
                  <h2 className="h2">
                    <span
                      className="text-gradient gradi"
                      style={{ fontSize: "30px" }}
                    >
                      Designed with shatter-resistant sapphire glass and a
                      custom Kevlar® fiber charging case compatible with our
                      MC100 Wireless Charge Pad, MW08 Sport is built to endure.
                    </span>
                  </h2>
                </div>
              </div>

              <div className="section-stack__main main_tab">
                <feature-chart max-rows="6" className="feature-chart">
                  <div className="feature-chart__table   divide-y scroll-area">
                    <div className="feature-chart__table-row tablo_row_flex">
                      <div className="feature-chart__heading bold">Model</div>
                      <div className="feature-chart__defaultValue text-subdued">
                        <p>MC100 Wireless Charge Pad</p>
                      </div>
                    </div>
                    <div className="feature-chart__table-row tablo_row_flex">
                      <div className="feature-chart__heading bold">
                        Dimensions
                      </div>
                      <div className="feature-chart__defaultValue text-subdued">
                        <p>100mm x 100mm x 9.9mm</p>
                      </div>
                    </div>
                    <div className="feature-chart__table-row tablo_row_flex">
                      <div className="feature-chart__heading bold">Weight</div>
                      <div className="feature-chart__defaultValue text-subdued">
                        <p>90.7g</p>
                      </div>
                    </div>
                    <div className="feature-chart__table-row tablo_row_flex">
                      <div className="feature-chart__heading bold">
                        Max output
                      </div>
                      <div className="feature-chart__defaultValue text-subdued">
                        <p>10 Watts</p>
                      </div>
                    </div>
                    <div className="feature-chart__table-row tablo_row_flex">
                      <div className="feature-chart__heading bold">Input</div>
                      <div className="feature-chart__defaultValue text-subdued">
                        <p>5V/1.2~1.5A, 9V/1.2~1.5A</p>
                      </div>
                    </div>
                    <div className="feature-chart__table-row tablo_row_flex">
                      <div className="feature-chart__heading bold">
                        Compatibility
                      </div>
                      <div className="feature-chart__defaultValue text-subdued">
                        <p>MW08 Sport and compatible products</p>
                      </div>
                    </div>
                  </div>
                </feature-chart>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="shopify-section-template--16701008806138__1662643194e86f0ef6"
        className="shopify-section shopify-section--apps"
      >
        <div className="container">
          <div className="section   section-blends section-full">
            <div
              id="shopify-block-dbc711fd-9563-484a-ac23-d96ce292957e"
              className="shopify-block shopify-app-block"
            >
              <div
                id="shopify-product-reviews"
                data-id="7664878846202"
                className="custom-spr"
                style={{}}
              >
                <custom-spr-header
                  product-id="7664878846202"
                  review-count="5"
                  className="custom-spr__header bg-gradient gradi3"
                >
                  <div className="v-stack gap-2">
                    <div className="custom-spr__rating text-center">
                      <span className="custom-spr__rating-defaultValue bold">4.8</span>
                      <span className="custom-spr__rating-max bold">/ 5.0</span>
                    </div>
                    <div className="custom-spr__info text-center">
                      <p>
                        This product is rated 4.8 of 5.0 stars.
                        <br />
                        It has received 5 reviews.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button button--xl"
                    is="custom-button"
                  >
                    <a className="button button--lg mr-2" href="/">
                      Leave a review
                    </a>
                    <span className="button__loader">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </button>
                </custom-spr-header>

                <div className="spr-container">
                  <div className="spr-header">
                    <h2 className="spr-header-title">Customer Reviews</h2>
                    <div className="spr-summary rte">
                      <span
                        className="spr-starrating spr-summary-starrating"
                        aria-label="4.8 of 5 stars"
                        role="img"
                      >
                        <i
                          className="spr-icon spr-icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="spr-icon spr-icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="spr-icon spr-icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="spr-icon spr-icon-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="spr-icon spr-icon-star"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span className="spr-summary-caption">
                        <span className="spr-summary-actions-togglereviews">
                          Based on 5 reviews
                        </span>
                      </span>
                      <span className="spr-summary-actions">
                        <a
                          href="#"
                          className="spr-summary-actions-newreview"
                         
                        >
                          Write a review
                        </a>
                      </span>
                    </div>
                  </div>

                  <div className="spr-content">
                    <div
                      className="spr-form"
                      id="form_7664878846202"
                      style={{ display: "none" }}
                    >
                      <form
                        method="post"
                        action=""
                        id="new-review-form_7664878846202"
                        className="new-review-form"
                       
                      >
                        <input type="hidden" name="review[rating]" />
                        <input
                          type="hidden"
                          name="product_id"
                          defaultValue="7664878846202"
                        />
                        <h3 className="spr-form-title">Write a review</h3>
                        <fieldset className="spr-form-contact input-row">
                          <div className="spr-form-contact-name">
                            <input
                              className="input is-floating"
                              id="review_author_7664878846202"
                              type="text"
                              name="review[author]"
                              defaultValue=""
                              placeholder=" "
                            />
                            <label
                              className="floating-label"
                              htmlFor="review_author_7664878846202"
                            >
                              Name
                            </label>
                          </div>
                          <div className="spr-form-contact-email">
                            <input
                              className="input is-floating"
                              id="review_email_7664878846202"
                              type="email"
                              name="review[email]"
                              defaultValue=""
                              placeholder=" "
                            />
                            <label
                              className="floating-label"
                              htmlFor="review_email_7664878846202"
                            >
                              Email
                            </label>
                          </div>
                        </fieldset>

                        <fieldset className="spr-form-review fieldset">
                          <div className="spr-form-review-rating">
                            <label
                              className="spr-form-label"
                              htmlFor="review[rating]"
                            >
                              Rating
                            </label>
                            <div className="spr-form-input spr-starrating ">
                              <a
                                href="#"
                               
                                className="spr-icon spr-icon-star spr-icon-star-empty"
                                data-defaultvalue="1"
                                aria-label="1 of 5 stars"
                              >
                                &nbsp;
                              </a>
                              <a
                                href="#"
                               
                                className="spr-icon spr-icon-star spr-icon-star-empty"
                                data-defaultvalue="2"
                                aria-label="2 of 5 stars"
                              >
                                &nbsp;
                              </a>
                              <a
                                href="#"
                               
                                className="spr-icon spr-icon-star spr-icon-star-empty"
                                data-defaultvalue="3"
                                aria-label="3 of 5 stars"
                              >
                                &nbsp;
                              </a>
                              <a
                                href="#"
                               
                                className="spr-icon spr-icon-star spr-icon-star-empty"
                                data-defaultvalue="4"
                                aria-label="4 of 5 stars"
                              >
                                &nbsp;
                              </a>
                              <a
                                href="#"
                               
                                className="spr-icon spr-icon-star spr-icon-star-empty"
                                data-defaultvalue="5"
                                aria-label="5 of 5 stars"
                              >
                                &nbsp;
                              </a>
                            </div>
                          </div>

                          <div className="spr-form-review-title">
                            <input
                              className="input is-floating"
                              id="review_title_7664878846202"
                              type="text"
                              name="review[title]"
                              defaultValue=""
                              placeholder=" "
                            />
                            <label
                              className="floating-label"
                              htmlFor="review_title_7664878846202"
                            >
                              Review Title
                            </label>
                          </div>

                          <div className="spr-form-review-body">
                            <div className="spr-form-input">
                              <textarea
                                className="textarea is-floating"
                                id="review_body_7664878846202"
                                data-product-id="7664878846202"
                                name="review[body]"
                                rows="5"
                                placeholder=" "
                              ></textarea>
                              <label
                                className="floating-label"
                                htmlFor="review_body_7664878846202"
                              >
                                Body of Review
                                <span
                                  role="status"
                                  aria-live="polite"
                                  aria-atomic="true"
                                >
                                  <span className="spr-form-review-body-charactersremaining">
                                    (1500)
                                  </span>
                                  <span className="visuallyhidden">
                                    characters remaining
                                  </span>
                                </span>
                              </label>
                            </div>
                          </div>
                        </fieldset>

                        <fieldset className="spr-form-actions">
                          <input
                            type="submit"
                            className="spr-button spr-button-primary button button-primary btn btn-primary button--primary button--xl"
                            defaultValue="Submit Review"
                          />
                        </fieldset>
                      </form>
                    </div>
                    <div className="spr-reviews" id="reviews_7664878846202">
                      <div className="spr-review" id="spr-review-162881780">
                        <div className="spr-review-header">
                          <span
                            className="spr-starratings spr-review-header-starratings"
                            aria-label="4 of 5 stars"
                            role="img"
                          >
                            <i
                              className="spr-icon spr-icon-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="spr-icon spr-icon-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="spr-icon spr-icon-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="spr-icon spr-icon-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="spr-icon spr-icon-star-empty"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h3 className="spr-review-header-title">
                            Great fit, great sounding
                          </h3>
                          <span className="spr-review-header-byline">
                            <strong>Michele A.</strong> on{" "}
                            <strong>Aug 23, 2022</strong>
                          </span>
                        </div>

                        <div className="spr-review-content">
                          <p className="spr-review-content-body">
                            They fit quite well and I don't even find myself
                            having to adjust them. The sound quality is also
                            great. I do wish the app was a bit more
                            streamlined/functional (need to manually select my
                            only pair of earbuds in the app every time I open it
                            - and there's no EQ options), so I took a star off
                            for that. But I really can't complain about anything
                            else.
                          </p>
                        </div>
                        <div className="spr-review-footer rte">
                          <a
                            href="#"
                            className="spr-review-reportreview"
                           
                            id="report_162881780"
                            data-msg="This review has been reported"
                          >
                            Report as Inappropriate
                          </a>
                        </div>
                      </div>

                      <div className="spr-pagination">
                        <div className="border-black">
                          <span className="spr-pagination-page is-active">
                            1
                          </span>
                          <span className="spr-pagination-page">
                            <a
                              href="#shopify-product-reviews"
                             
                              data-product-id="7664878846202"
                              data-page="2"
                            >
                              2
                            </a>
                          </span>
                          <span className="spr-pagination-next">
                            <a
                              href="#shopify-product-reviews"
                             
                              data-product-id="7664878846202"
                              data-page="2"
                            >
                              Next »
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="question">
        <div className="container">
          <div className="QuestionSEc">
            <div className="container">
              <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    {/* Image gallery */}
                    <Tab.Group as="div" className="flex flex-col-reverse">
                      <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                        <Tab.Panel>
                          <h2 className="text-[2.5rem] py-2">
                            Have a question? We are here to help.
                          </h2>
                          <p className="text-[1rem] text-gray-600 py-2">
                            Check out the most common questions our customers
                            asked. Still have questions ? Contact our customer
                            support.
                          </p>
                          <img
                            alt="image"
                            src="https://cdn.shopify.com/s/files/1/0646/2118/3226/files/team-fff.png?v=1660227343&width=160"
                            className="py-2"
                          />
                          <p className="text-[1rem] text-gray-600 box2">
                            Our customer support is available monday to friday:
                            8am-8:30pm.
                          </p>
                          <p className="text-[1rem] text-gray-600 box2">
                            Average answer time: 24h
                          </p>
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>

                    {/* Product info */}
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 tablo">
                      <section className="mt-12 bg-gray-200 px-4">
                        <div className="divide-y divide-gray-200 border-t">
                          {question.details.map((detail) => (
                            <Disclosure as="div" key={detail.name}>
                              {({ open }) => (
                                <>
                                  <h3>
                                    <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                      <span
                                        className={classNames(
                                          open
                                            ? "text-indigo-600"
                                            : "text-gray-900",
                                          "text-sm font-medium"
                                        )}
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
                                  <Disclosure.Panel
                                    as="div"
                                    className="prose prose-sm pb-6"
                                  >
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
        </div>
      </section>

{/* 
      <section
        id="shopify-section-template--16701007397114__16593450233d33b840"
        className="shopify-section shopify-section--image-link-blocks"
      >
        <div className="shopify-section">
          <div className="s">
            <div className="container mx-auto">
              <div className="mx-auto  px-4  sm:px-6  lg:px-0">
                <h2 className="sr-only">Products</h2>
                

                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-2">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white custom_hee"
                    >
                      <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center sm:h-full sm:w-full p-10"
                          width={800}
                          height={800}
                        />
                      </div>
                      <div className="flex flex-1 flex-col space-y-2 p-4">
                        <div className="grid grid-cols-2 gap-60 items-baseline">
                        <h3 className="text-sm font-medium text-gray-900 product_name">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <a href="/products/mc100-wireless-charge-pad-silver-aluminum-grey-coated-canvas#shopify-product-reviews"
                        className="rating " title="3 reviews"><span className="text-sm">4.7</span>
                        <div className="rating__stars" role="img" aria-label="4.7 out of 5.0 stars">
                          <svg role="presentation" fill="none" focusable="false" width="12" height="12" className="rating__star icon icon-rating-star" viewBox="0 0 15 15">
                          <path d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z" fill="currentColor">                     
                          </path>
                        </svg>
                        </div>
                       </a>
                       </div>




                        <p className="text-sm text-gray-500">
                          {product.description}
                        </p>
                        <div className="flex flex-1 flex-col justify-end">
                          <p className="text-sm italic text-gray-500">
                            {product.options}
                          </p>
                          <p className="text-base font-medium text-gray-900">
                            {product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>  */}


      <section
        id="shopify-section-template--16701008445690__1658236941001e21e4"
        className="shopify-section shopify-section--image-with-text-overlay"
      >
        <div className="container">
          <div
            className="section   section-blends section-full text-custom"
            style={{ color: "255 255 255;" }}
          >
            <image-banner
              reveal-on-scroll="true"
              className="content-over-media content-over-media--lg shadow-block rounded-lg  text-custom"
              style={{ color: "255 255 255", opacity: "1;" }}
            >
              <img
                src="//cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=3200"
                alt=""
                srcSet="//cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=200 200w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=300 300w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=400 400w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=500 500w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=600 600w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=700 700w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=800 800w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=900 900w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=1000 1000w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=1400 1400w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=1600 1600w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=1800 1800w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=2000 2000w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=2200 2200w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=2400 2400w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=2600 2600w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=2800 2800w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=3000 3000w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1.jpg?v=1658236957&amp;width=3200 3200w"
                width="3200"
                height="1600"
                
                sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(1600px, 100vw - 96px)"
                className="hidden sm:block"
              />
              <img
                src="//cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1_mobile.jpg?v=1658237340&amp;width=1300"
                alt=""
                srcSet="//cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1_mobile.jpg?v=1658237340&amp;width=200 200w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1_mobile.jpg?v=1658237340&amp;width=300 300w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1_mobile.jpg?v=1658237340&amp;width=400 400w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1_mobile.jpg?v=1658237340&amp;width=500 500w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1_mobile.jpg?v=1658237340&amp;width=600 600w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1_mobile.jpg?v=1658237340&amp;width=700 700w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1_mobile.jpg?v=1658237340&amp;width=800 800w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1_mobile.jpg?v=1658237340&amp;width=900 900w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1_mobile.jpg?v=1658237340&amp;width=1000 1000w, //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S2_Outdoor-SanFran_2015_2_1_mobile.jpg?v=1658237340&amp;width=1200 1200w"
                width="1300"
                height="1500"
                
                sizes="(max-width: 740px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(1600px, 100vw - 96px)"
                className="sm:hidden"
              />
              <div className="place-self-center text-center sm:place-self-center sm:text-center">
                <div className="prose">
                  <p
                    className="h1"
                    reveal-on-scroll="true"
                    style={{ opacity: "1;", color: "white" }}
                  >
                    <split-lines>
                      Mastery is a never-ending exploration
                    </split-lines>
                  </p>
                  <div>
                    <p style={{ color: "white" }}>
                      Born of a love for music and a shared passion with his son
                      DJ, Jonathan Levinevoulait designed and manufactured
                      headphones that, in 50 years, would also stand the test of
                      time. Based on this idea and a pair of World War II
                      aviator headphones, Master &amp; Dynamic was born.
                    </p>
                  </div>
                  <a className="button button--lg img_panel" href="/pages/story">
                    Read more
                  </a>
                </div>
              </div>
            </image-banner>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default slug;
