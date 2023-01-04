import React, { lazy } from 'react'

import {Navbar} from '../components';

const compare = () => {
  return (
    <>
    <Navbar/>
      <section className='section'>
        <div className='container compare_head'>
          <div className='prose justify-items-center text-center'>
            <h1 className='h0'>Headphone</h1>
            <p>Compare our most popular headphones below.</p>
            <a className='button button--lg'>Accessories</a>
          </div>
        </div>
      </section>
      <section id='compare_section' className='seection seection_tablo_ic'>
        <div className='hom_compare'>
          <div className='main_table main_table_hori'>

            <div className='tablo'>
              <div className='tablo_inner bg-custom text-custom'>
                <div className='tablo_inner_row scroll-area text-custom divide-y'>
                  <div className='tablo_row row_to'>
                    <div className='tablo_ic'>
                      <a href='/'>
                        <img src='https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MW65S2_Angle_800x800_800x800_b3e750fe-677c-4be8-b429-46dbaf957119.png?v=1656929522&width=800' alt='compare' srcSet='//cdn.shopify.com/s/files/1/0646/2118/3226/products/MW50S1__Angle_800x800_800x800_ff349d7c-b6b5-4611-aa0d-7ca2296c0bb8.png?v=1656927990&width=80 80w, //cdn.shopify.com/s/files/1/0646/2118/3226/products/MW50S1__Angle_800x800_800x800_ff349d7c-b6b5-4611-aa0d-7ca2296c0bb8.png?v=1656927990&width=150 150w, //cdn.shopify.com/s/files/1/0646/2118/3226/products/MW50S1__Angle_800x800_800x800_ff349d7c-b6b5-4611-aa0d-7ca2296c0bb8.png?v=1656927990&width=160 160w, //cdn.shopify.com/s/files/1/0646/2118/3226/products/MW50S1__Angle_800x800_800x800_ff349d7c-b6b5-4611-aa0d-7ca2296c0bb8.png?v=1656927990&width=300 300w' width={800} height={800}  sizes="(max-width: 699px) 80px, 150px" />
                      </a>
                      <div className='v-stack gap-6'>
                        <div className='v-stack gap-2'>
                          <div className='v-stack sm:gap-0.5'>
                            <a href='/' className='bold line-clamp'>MW65 (Silver Metal / Brown Leather)</a>
                            <div className='price-list'>
                              <div className='sale-price text-subdued'>
                                <span className='sr-only'>Sale price $499.00</span>
                              </div>
                            </div>
                          </div>
                          <div className='h-stack gap-2 sm:gap-2-5'>
                            <a href='/' className='color-swatch color-swatch--sm rounded-full a_bisi'>
                              <span className='sr-only'>Silver Metal / Brown Leather</span>
                            </a>
                          </div>
                        </div>
                        <div className='buton_container'>
                          <a href='/' className='button button--subdued justify-self-start'>View</a>
                        </div>
                      </div>
                    </div>
                    <div className='tablo_ic'>
                      <a href='/'>
                        <img src='https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MW50S1__Angle_800x800_800x800_ff349d7c-b6b5-4611-aa0d-7ca2296c0bb8.png?v=1656927990&width=150' alt='urun_2' srcSet='//cdn.shopify.com/s/files/1/0646/2118/3226/products/MW50S1__Angle_800x800_800x800_ff349d7c-b6b5-4611-aa0d-7ca2296c0bb8.png?v=1656927990&width=80 80w, //cdn.shopify.com/s/files/1/0646/2118/3226/products/MW50S1__Angle_800x800_800x800_ff349d7c-b6b5-4611-aa0d-7ca2296c0bb8.png?v=1656927990&width=150 150w, //cdn.shopify.com/s/files/1/0646/2118/3226/products/MW50S1__Angle_800x800_800x800_ff349d7c-b6b5-4611-aa0d-7ca2296c0bb8.png?v=1656927990&width=160 160w, //cdn.shopify.com/s/files/1/0646/2118/3226/products/MW50S1__Angle_800x800_800x800_ff349d7c-b6b5-4611-aa0d-7ca2296c0bb8.png?v=1656927990&width=300 300w' width={800} height={800}  sizes="(max-width:699px) 80px, 150px" />
                      </a>
                      <div className='v-stack gap-6'>
                        <div className='v-stack gap-2'>
                          <div className='v-stack sm:gap-0.5'>
                            <a href='/' className='bold line-clamp'>MW50+ (Silver Metal / Black Leather)</a>
                            <div className='price-list'>
                              <div className='sale-price text-subdued'>
                                <span className='sr-only'>Sale price $499.00</span>
                              </div>
                            </div>
                          </div>
                          <div className='h-stack gap-2 sm:gap-2-5'>
                            <a href='/' className='color-swatch color-swatch--sm rounded-full'>
                              <span className='sr-only'>Silver Metal / Black Leather</span>
                            </a>
                          </div>
                        </div>
                        <div className='buton_container'>
                          <a className='button button--subdued' href='/'>View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='tablo_row'>
                    <div className='row_heading bold'>Driver</div>
                    <div className='row_value text-subdued'><p>40mm Beryllium</p></div>
                    <div className='row_value text-subdued'><p>40mm Beryllium</p></div>
                  </div>
                  <div className='tablo_row'>
                    <div className='row_heading bold'>Weight</div>
                    <div className='row_value text-subdued'><p>245g</p></div>
                    <div className='row_value text-subdued'><p>205g (On-Ear), 239g (Over-Ear)</p></div>
                  </div>
                  <div className='tablo_row'>
                    <div className='row_heading bold'>Dimensions</div>
                    <div className='row_value text-subdued'><p>165mm x 190mm x 66m</p></div>
                    <div className='row_value text-subdued'><p>190mm x 155mm x 34mm (On-Ear), 200mm x 165mm x 40mm (Over-Ear)</p></div>
                  </div>
                  <div className='tablo_row'>
                    <div className='row_heading bold'>Battery</div>
                    <div className='row_value text-subdued'><p>24 hours</p></div>
                    <div className='row_value text-subdued'><p>16 hours</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default compare
