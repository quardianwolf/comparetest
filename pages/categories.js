import React from "react";

import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Tab,
  Transition
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon
} from "@heroicons/react/20/solid";

import { Kategori, Navbar } from "../components";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone."
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
        }
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" }
          ]
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" }
          ]
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" }
          ]
        }
      ]
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding."
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
        }
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" }
          ]
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" }
          ]
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" }
          ]
        }
      ]
    }
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" }
  ]
};
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false }
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" }
];
const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "hats", label: "Hats" },
      { value: "bundles", label: "Bundles" },
      { value: "carry", label: "Carry" },
      { value: "objects", label: "Objects" }
    ]
  },
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "clothing-company", label: "Clothing Company" },
      { value: "fashion-inc", label: "Fashion Inc." },
      { value: "shoes-n-more", label: "Shoes 'n More" },
      { value: "supplies-n-stuff", label: "Supplies 'n Stuff" }
    ]
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "blue", label: "Blue" },
      { value: "olive", label: "Olive" },
      { value: "tan", label: "Tan" }
    ]
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" }
    ]
  }
];
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
    name: "MC100 Wireless Charge Pad (Gunmetal Aluminum / Black Coated Canvas)",
    href: "#",
    price: "$50",
    availability: "White and Black",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MC100_G1_hero_800x800_629d612d-38d6-471b-b1db-eede9eaedff7.png?v=1656681848&width=400",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop."
  }

  // More products...
];
const products1 = [
  {
    id: 1,
    name: "Focus Paper Refill",
    href: "#",
    price: "$13",
    description: "3 sizes available",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card."
  },
  {
    id: 2,
    name: "Focus Card Holder",
    href: "#",
    price: "$64",
    description: "Walnut",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk."
  },
  {
    id: 3,
    name: "Focus Carry Pouch",
    href: "#",
    price: "$32",
    description: "Heather Gray",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop."
  }
  // More products...
];
const products2 = [
  {
    id: 7,
    name: "Electric Kettle",
    href: "#",
    price: "$149",
    description: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-07.jpg",
    imageAlt:
      "Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee."
  },
  {
    id: 8,
    name: "Leather Workspace Pad",
    href: "#",
    price: "$165",
    description: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-08.jpg",
    imageAlt:
      "Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals."
  },
  {
    id: 9,
    name: "Leather Long Wallet",
    href: "#",
    price: "$118",
    description: "Natural",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-09.jpg",
    imageAlt:
      "Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure."
  }
  // More products...
];

function classs(...classes) {
  return classes.filter(Boolean).join(" ");
}

const categories = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoriess = [
    {
      name: "Headphones",
      href: "#",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MG20B1_Hero_800x800_1_2.jpg?v=1657269450&width=300"
    },
    {
      name: "Earphones",
      href: "#",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MW08SportGR_Angle_Right_800x800_8a72d3f1-7771-4cb1-8ceb-3106713e47d6_800x800_2.jpg?v=1657269636&width=300"
    },
    {
      name: "Speaker",
      href: "#",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MA770_Front_800x800_6fa371dc-5be6-4991-87b2-a70272cdea96_800x800_1.jpg?v=1657269756&width=300"
    },
    {
      name: "Collaborations",
      href: "#",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0646/2118/3226/files/1200x1200.jpg?v=1657270122&width=300"
    },
    {
      name: "Accessories",
      href: "#",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MC100_S3_hero_800x800_1.jpg?v=1657269855&width=300"
    }
  ];

  return (

    <>
  <Navbar />
    <main role="main" id="main" className="anchor">
     
      <section
        id="shopify-section-template--16701007397114__banner"
        className="shopify-section shopify-section--collection-banner"
      >
        <div className="section   section-blends section-full text-custom">
          <div
            className="collection-banner content-over-media content-over-media--md full-bleed  text-custom"
            reveal-on-scroll="true"
            parallax={0.3}
          >
            <img
              src="//cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=3200"
              alt="banner"
              srcSet="//cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=200 200w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=300 300w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=400 400w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=500 500w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=600 600w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=700 700w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=800 800w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=900 900w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=1000 1000w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=1200 1200w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=1400 1400w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=1600 1600w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=1800 1800w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=2000 2000w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=2200 2200w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=2400 2400w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=2600 2600w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=2800 2800w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=3000 3000w, 
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016.jpg?v=1659364130&amp;width=3200 3200w"
              width={3200}
              height={1600}
              fetchpriority="high"
              sizes="130vw"
              className="hidden sm:block"
            />
            <img
              src="//cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016_1_mobile.jpg?v=1659364540&amp;width=1300"
              alt="aaa"
              srcSet="//cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016_1_mobile.jpg?v=1659364540&amp;width=200 200w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016_1_mobile.jpg?v=1659364540&amp;width=300 300w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016_1_mobile.jpg?v=1659364540&amp;width=400 400w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016_1_mobile.jpg?v=1659364540&amp;width=500 500w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016_1_mobile.jpg?v=1659364540&amp;width=600 600w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016_1_mobile.jpg?v=1659364540&amp;width=700 700w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016_1_mobile.jpg?v=1659364540&amp;width=800 800w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016_1_mobile.jpg?v=1659364540&amp;width=900 900w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016_1_mobile.jpg?v=1659364540&amp;width=1000 1000w,
          //cdn.shopify.com/s/files/1/0646/2118/3226/files/MH30S5_MH40G1_DaisyChain_2016_1_mobile.jpg?v=1659364540&amp;width=1200 1200w"
              width={1300}
              height={1500}
              fetchpriority="high"
              sizes="130vw"
              className="sm:hidden"
            />
            <div className="place-self-center text-center sm:place-self-center-start sm:text-start">
              <div className="v-stack gap-4 sm:gap-6">
                <h1
                  className="h0"
                  reveal-on-scroll="true"
                  style={{ opacity: "1" }}
                >
                  <div className="split-name mobile-name">Accessories</div>
                </h1>
                <div className="prose">
                  <meta charSet="utf-8" />
                  <span
                    data-metadata="<!--(figmeta)eyJmaWxlS2V5Ijoib2FQRzAxa3g3elVjYWkwaVBjZ2taTiIsInBhc3RlSUQiOjEwODI1NzU3MjgsImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)-->"
                    data-mce-fragment="1"
                  ></span>
                  <span data-mce-fragment="1"></span>
                  <span data-mce-fragment="1" className="span-last">
                    Access the widest selection of accessories for your
                    headphones, earphones and speakers.
                  </span>
                </div>
              </div>
            </div>
            <div className="place-self-end hidden md:block">
              <div className="collection-featured-product">
                <p className="collection-featured-product__title text-xs bold">
                  Featured product
                </p>
                <a
                  href="/products/3-5mm-to-3-5mm-audio-cable-black"
                  className="collection-featured-product__content"
                >
                  <div className="horizontal-product horizontal-product--sm rounded-xs snap-start">
                    <img
                      src="//cdn.shopify.com/s/files/1/0646/2118/3226/products/CRD2BLK_1600x1600_800x800_885c4152-89c6-4c64-9710-42b8663bf446.png?v=1656680424&amp;width=800"
                      alt="3.5mm To 3.5mm Audio Cable (Black)"
                      srcSet="//cdn.shopify.com/s/files/1/0646/2118/3226/products/CRD2BLK_1600x1600_800x800_885c4152-89c6-4c64-9710-42b8663bf446.png?v=1656680424&amp;width=64 64w, //cdn.shopify.com/s/files/1/0646/2118/3226/products/CRD2BLK_1600x1600_800x800_885c4152-89c6-4c64-9710-42b8663bf446.png?v=1656680424&amp;width=128 128w, //cdn.shopify.com/s/files/1/0646/2118/3226/products/CRD2BLK_1600x1600_800x800_885c4152-89c6-4c64-9710-42b8663bf446.png?v=1656680424&amp;width=80 80w, //cdn.shopify.com/s/files/1/0646/2118/3226/products/CRD2BLK_1600x1600_800x800_885c4152-89c6-4c64-9710-42b8663bf446.png?v=1656680424&amp;width=160 160w"
                      width="800"
                      height="800"
                      loading="lazy"
                      sizes="(max-width: 740px) 64px, 80px"
                      className="horizontal-product__image rounded-xs"
                    />
                    <div className="horizontal-product__info">
                      <div className="v-stack gap-0.5">
                        <span className="text-sm bold">
                          3.5mm To 3.5mm Audio Cable (Black)
                        </span>
                        <p className="text-sm text-subdued">$29.00</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="shopify-section-template--16701007397114__banner"
        className="shopify-section shopify-section--collection-banner"
      >
        <div className="">
          <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-[96%] xl:px-48 sub-cat">
            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                  <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                    {categoriess.map((category) => (
                      <a
                        key={category.name}
                        href={category.href}
                        className="relative flex h-[201px] w-[201px] flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 "
                      >
                        <span aria-hidden="true" className="absolute inset-0">
                          <img
                            src={category.imageSrc}
                            alt="image"
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                        />
                        <span className="relative mt-auto text-center text-xl font-bold text-white">
                          {category.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="shopify-section-template--16701007397114__16593450233d33b840"
        className="shopify-section shopify-section--image-link-blocks"
      >
        <div className="shopify-section">
          <div className="s">
            <div className="container_pro mx-auto">
              <div className="mx-auto  px-4  sm:px-6  lg:px-0">
                <h2 className="sr-only">Products</h2>


                <div class="collection__top-bar py-8 mx-auto">
                  <div class="facets-summary">
                    <form
                      is="facet-form"
                      update-on-change=""
                      section-id="template--16701007397114__main"
                      method="GET"
                      action="/collections/accessories"
                      class="contents"
                    >
                      <div class="availability-facet">
                        <label
                          htmlFor="facets-105373666-filter.v.availability"
                          class="bold"
                        >
                          In stock only
                        </label>
                        <input
                          id="facets-105373666-filter.v.availability"
                          type="checkbox"
                          class="switch"
                          name="filter.v.availability"
                         
                        />
                      </div>
                      <div class="facets-horizontal">
                        <button
                          type="button"
                          class="text-with-icon group"
                          aria-controls="filter-dialog-filter.p.product_type"
                          aria-expanded="false"
                        >
                          <span class="bold">Product type</span>
                          <span class="circle-chevron group-expanded:rotate">
                            <svg
                              role="presentation"
                              focusable="false"
                              width="8"
                              height="6"
                              class="icon icon-chevron-bottom-small reverse-icon"
                              viewBox="0 0 8 6"
                            >
                              <path
                                d="m1 1.5 3 3 3-3"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              ></path>
                            </svg>
                          </span>
                        </button>

                        <facet-dialog
                          id="filter-dialog-filter.p.product_type"
                          class="facet-dialog shadow"
                          role="dialog"
                        >
                          <div class="h-stack gap-2 justify-center wrap">
                            <input
                              id="checkbox-106514352"
                              class="sr-only"
                              type="checkbox"
                              name="filter.p.product_type"
                              
                            />
                            <label
                              htmlFor="checkbox-106514352"
                              class="facet-dialog-option"
                            >
                              Accessories (18)
                            </label>
                          </div>
                        </facet-dialog>
                        <button
                          type="button"
                          class="text-with-icon group"
                          aria-controls="filter-dialog-filter.v.option.color"
                          aria-expanded="false"
                        >
                          <span class="bold">Color</span>
                          <span class="circle-chevron group-expanded:rotate">
                            <svg
                              role="presentation"
                              focusable="false"
                              width="8"
                              height="6"
                              class="icon icon-chevron-bottom-small reverse-icon"
                              viewBox="0 0 8 6"
                            >
                              <path
                                d="m1 1.5 3 3 3-3"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              ></path>
                            </svg>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="text-with-icon group"
                          aria-controls="filter-dialog-filter.p.m.custom.bluetooth"
                          aria-expanded="false"
                        >
                          <span class="bold">Bluetooth</span>
                          <span class="circle-chevron group-expanded:rotate">
                            <svg
                              role="presentation"
                              focusable="false"
                              width="8"
                              height="6"
                              class="icon icon-chevron-bottom-small reverse-icon"
                              viewBox="0 0 8 6"
                            >
                              <path
                                d="m1 1.5 3 3 3-3"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              ></path>
                            </svg>
                          </span>
                        </button>

                        <facet-dialog
                          id="filter-dialog-filter.p.m.custom.bluetooth"
                          class="facet-dialog shadow"
                          role="dialog"
                        >
                          <div class="h-stack gap-2 justify-center wrap">
                            <input
                              id="checkbox-138053472"
                              class="sr-only"
                              type="checkbox"
                              name="filter.p.m.custom.bluetooth"
                             
                            />
                            <label
                              htmlFor="checkbox-138053472"
                              class="facet-dialog-option"
                            >
                              Bluetooth 5.0 (1)
                            </label>
                          </div>
                        </facet-dialog>
                        <button
                          type="button"
                          class="text-with-icon group"
                          aria-controls="filter-dialog-filter.v.price"
                          aria-expanded="false"
                        >
                          <span class="bold">Price</span>
                          <span class="circle-chevron group-expanded:rotate">
                            <svg
                              role="presentation"
                              focusable="false"
                              width="8"
                              height="6"
                              class="icon icon-chevron-bottom-small reverse-icon"
                              viewBox="0 0 8 6"
                            >
                              <path
                                d="m1 1.5 3 3 3-3"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              ></path>
                            </svg>
                          </span>
                        </button>
                        <facet-dialog
                          id="filter-dialog-filter.v.price"
                          class="facet-dialog shadow"
                          role="dialog"
                        >
                          <price-range class="price-range price-range--inline">
                            <label class="input-prefix text-sm">
                              <span class="prefix text-subdued">$</span>
                              <input
                                aria-label="From price"
                                class="field"
                                type="number"
                                inputMode="numeric"
                                name="filter.v.price.gte"
                                id="filter.v.price.gte"
                                min="0"
                                max="149"
                                step="2"
                                placeholder="0"
                                autoComplete="off"
                              />
                            </label>
                            <div class="range-group no-js:hidden custom_range">
                              <input
                                type="range"
                                aria-label="From price"
                                class="range"
                                min="0"
                                max="149"
                                step="2"
                               
                              />
                              <input
                                type="range"
                                aria-label="To price"
                                class="range"
                                min="0"
                                max="149"
                                step="2"
                              
                              />
                            </div>
                            <label class="input-prefix text-sm">
                              <span class="prefix text-subdued">$</span>
                              <input
                                aria-label="To price"
                                class="field"
                                type="number"
                                inputMode="numeric"
                                name="filter.v.price.lte"
                                id="filter.v.price.lte"
                                min="0"
                                max="149"
                                step="2"
                                placeholder="149"
                                autoComplete="off"
                              />
                            </label>
                          </price-range>
                        </facet-dialog>
                      </div>
                    </form>
                    <facet-sort-by class="sort-by-facet">
                      <span class="bold">Sort by:</span>
                      <button
                        type="button"
                        class="text-with-icon group"
                        aria-controls="popover-139773493"
                        aria-expanded="false"
                        aria-haspopup="dialog"
                      >
                        <span
                          id="popover-139773493-value"
                          class="reversed-link"
                        >
                          Featured
                        </span>
                        <span class="circle-chevron group-hover:colors group-expanded:rotate">
                          <svg
                            role="presentation"
                            focusable="false"
                            width="8"
                            height="6"
                            class="icon icon-chevron-bottom-small reverse-icon"
                            viewBox="0 0 8 6"
                          >
                            <path
                              d="m1 1.5 3 3 3-3"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            ></path>
                          </svg>
                        </span>
                      </button>
                      <x-popover
                        id="popover-139773493"
                        class="popover"
                        close-on-listbox-select=""
                        anchor-horizontal="end"
                        anchor-vertical="end"
                        role="dialog"
                      >
                        <x-listbox
                          class="popover-listbox"
                          aria-owns="popover-139773493-value"
                          role="listbox"
                          aria-activedescendant="option-12b22ba1-56da-43dd-8900-802ebd74bcb0"
                        >
                          <button
                            type="button"
                            class="popover-listbox__option group"
                            role="option"
                           
                            aria-selected="true"
                            id="option-12b22ba1-56da-43dd-8900-802ebd74bcb0"
                          >
                            <span class="reversed-link">Featured</span>
                          </button>
                          <button
                            type="button"
                            class="popover-listbox__option group"
                            role="option"
                           
                            id="option-22d390d9-3416-4f15-a622-71e1257deb8f"
                          >
                            <span class="reversed-link">Best selling</span>
                          </button>
                          <button
                            type="button"
                            class="popover-listbox__option group"
                            role="option"
                           
                            id="option-4830e73c-b1c6-4fcb-b050-0d1ca5c352ef"
                          >
                            <span class="reversed-link">
                              Alphabetically, A-Z
                            </span>
                          </button>
                          <button
                            type="button"
                            class="popover-listbox__option group"
                            role="option"
                           
                            id="option-57368398-8877-4c5f-99e7-ca5120d24c03"
                          >
                            <span class="reversed-link">
                              Alphabetically, Z-A
                            </span>
                          </button>
                          <button
                            type="button"
                            class="popover-listbox__option group"
                            role="option"
                           
                            id="option-5ef2a99e-b2b8-40ff-a743-c8611bcb0eb7"
                          >
                            <span class="reversed-link">
                              Price, low to high
                            </span>
                          </button>
                          <button
                            type="button"
                            class="popover-listbox__option group"
                            role="option"
                           
                            id="option-1aea1961-11ef-4e65-a41b-ec5a09024dc1"
                          >
                            <span class="reversed-link">
                              Price, high to low
                            </span>
                          </button>
                          <button
                            type="button"
                            class="popover-listbox__option group"
                            role="option"
                          
                            id="option-3acea77d-d6af-4c09-9caa-b41d5d248bd7"
                          >
                            <span class="reversed-link">Date, old to new</span>
                          </button>
                          <button
                            type="button"
                            class="popover-listbox__option group"
                            role="option"
                          
                            id="option-34858cb4-f2e5-4668-891d-76e92e0c2af1"
                          >
                            <span class="reversed-link">Date, new to old</span>
                          </button>
                        </x-listbox>
                      </x-popover>
                    </facet-sort-by>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white custom_he"
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
       
      </section>

    </main>
    </>
  );
};

export default categories;
