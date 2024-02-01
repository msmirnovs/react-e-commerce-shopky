import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Products() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <div x-data='{ mobileNavOpen: false }'>
          <nav className='relative bg-white py-3 shadow-lg'>
            <div className='container mx-auto px-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <a href='#' className='inline-block mr-10'>
                    <img
                      className='h-18'
                      src='shopky-assets/logos/shopky-logo.svg'
                      alt=''
                    />
                  </a>
                  <ul className='hidden lg:flex items-center gap-10'>
                    <li>
                      <a
                        href='#'
                        className='text-black text-sm font-medium hover:text-opacity-80 transition duration-200'
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-black text-sm font-medium hover:text-opacity-80 transition duration-200'
                      >
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-black text-sm font-medium hover:text-opacity-80 transition duration-200'
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-black text-sm font-medium hover:text-opacity-80 transition duration-200'
                      >
                        Career
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='hidden lg:flex gap-6'>
                  <div className='border border-gray-200 rounded-full py-3 px-4 flex items-center gap-2 focus-within:ring focus-within:ring-gray-100 transition duration-200'>
                    <a href='#' className='inline-block h-6'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <path
                          d='M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z'
                          stroke='black'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M16.4438 16.4438L21.0001 21.0001'
                          stroke='black'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                    <input
                      type='text'
                      className='flex-1 outline-none'
                      placeholder='Search Product'
                    />
                  </div>
                  <a
                    href='#'
                    className='rounded-full bg-white border border-gray-200 p-3 flex items-center justify-between h-12 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition duration-200'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z'
                        fill='black'
                      />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='rounded-full bg-gray-900 p-3 flex items-center justify-between h-12 hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 transition duration-200'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M15.7105 12.7101C16.6909 11.9388 17.4065 10.881 17.7577 9.68407C18.109 8.48709 18.0784 7.21039 17.6703 6.03159C17.2621 4.85279 16.4967 3.83052 15.4806 3.10698C14.4644 2.38344 13.2479 1.99463 12.0005 1.99463C10.753 1.99463 9.5366 2.38344 8.52041 3.10698C7.50423 3.83052 6.73883 4.85279 6.3307 6.03159C5.92257 7.21039 5.892 8.48709 6.24325 9.68407C6.59449 10.881 7.31009 11.9388 8.29048 12.7101C6.61056 13.3832 5.14477 14.4995 4.04938 15.94C2.95398 17.3806 2.27005 19.0914 2.07048 20.8901C2.05604 21.0214 2.0676 21.1543 2.10451 21.2812C2.14142 21.408 2.20295 21.5264 2.2856 21.6294C2.4525 21.8376 2.69527 21.971 2.96049 22.0001C3.2257 22.0293 3.49164 21.9519 3.69981 21.785C3.90798 21.6181 4.04131 21.3753 4.07049 21.1101C4.29007 19.1553 5.22217 17.3499 6.6887 16.0389C8.15524 14.7279 10.0534 14.0032 12.0205 14.0032C13.9876 14.0032 15.8857 14.7279 17.3523 16.0389C18.8188 17.3499 19.7509 19.1553 19.9705 21.1101C19.9977 21.3558 20.1149 21.5828 20.2996 21.7471C20.4843 21.9115 20.7233 22.0016 20.9705 22.0001H21.0805C21.3426 21.97 21.5822 21.8374 21.747 21.6314C21.9119 21.4253 21.9886 21.1625 21.9605 20.9001C21.76 19.0963 21.0724 17.3811 19.9713 15.9383C18.8703 14.4955 17.3974 13.3796 15.7105 12.7101ZM12.0005 12.0001C11.2094 12.0001 10.436 11.7655 9.7782 11.326C9.12041 10.8865 8.60772 10.2618 8.30497 9.53086C8.00222 8.79995 7.923 7.99569 8.07734 7.21976C8.23168 6.44384 8.61265 5.73111 9.17206 5.1717C9.73147 4.61229 10.4442 4.23132 11.2201 4.07698C11.996 3.92264 12.8003 4.00186 13.5312 4.30461C14.2621 4.60736 14.8868 5.12005 15.3264 5.77784C15.7659 6.43564 16.0005 7.209 16.0005 8.00012C16.0005 9.06099 15.5791 10.0784 14.8289 10.8286C14.0788 11.5787 13.0614 12.0001 12.0005 12.0001Z'
                        fill='white'
                      />
                    </svg>
                  </a>
                </div>
                <button
                  x-on:click='mobileNavOpen = !mobileNavOpen'
                  className='lg:hidden'
                >
                  <svg
                    className='navbar-burger text-black'
                    width={51}
                    height={51}
                    viewBox='0 0 56 56'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width={56} height={56} rx={28} fill='currentColor' />
                    <path
                      d='M37 32H19M37 24H19'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <div
            x-show='mobileNavOpen'
            className='navbar-menu hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50'
          >
            <div
              x-on:click='mobileNavOpen = !mobileNavOpen'
              className='navbar-menu hidden fixed inset-0 bg-black opacity-20'
            />
            <nav className='relative p-8 w-full h-full bg-white overflow-y-auto'>
              <div className='flex items-center justify-between'>
                <a href='#' className='inline-block'>
                  <img
                    className='h-18'
                    src='shopky-assets/logos/shopky-logo.svg'
                    alt=''
                  />
                </a>
                <button x-on:click='mobileNavOpen = !mobileNavOpen'>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6 18L18 6M6 6L18 18'
                      stroke='#111827'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
              <ul className='flex flex-col gap-12 py-12'>
                <li>
                  <a href='#' className='text-sm font-medium'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm font-medium'>
                    Shop
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm font-medium'>
                    Product
                  </a>
                </li>
                <li>
                  <a href='#' className='text-sm font-medium'>
                    Career
                  </a>
                </li>
              </ul>
              <div className='flex flex-col gap-10'>
                <div className='border border-gray-200 rounded-full py-3 px-4 flex items-center gap-2 w-full focus-within:ring focus-within:ring-gray-100 transition duration-200'>
                  <a href='#' className='inline-block h-6'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z'
                        stroke='black'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M16.4438 16.4438L21.0001 21.0001'
                        stroke='black'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                  <input
                    type='text'
                    className='flex-1 outline-none'
                    placeholder='Search Product'
                  />
                </div>
                <div className='flex gap-4 flex-wrap'>
                  <a
                    href='#'
                    className='rounded-full bg-white border border-gray-200 p-3 flex items-center justify-between h-12 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition duration-200'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z'
                        fill='black'
                      />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='rounded-full bg-gray-900 p-3 flex items-center justify-between h-12 hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 transition duration-200'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M15.7105 12.7101C16.6909 11.9388 17.4065 10.881 17.7577 9.68407C18.109 8.48709 18.0784 7.21039 17.6703 6.03159C17.2621 4.85279 16.4967 3.83052 15.4806 3.10698C14.4644 2.38344 13.2479 1.99463 12.0005 1.99463C10.753 1.99463 9.5366 2.38344 8.52041 3.10698C7.50423 3.83052 6.73883 4.85279 6.3307 6.03159C5.92257 7.21039 5.892 8.48709 6.24325 9.68407C6.59449 10.881 7.31009 11.9388 8.29048 12.7101C6.61056 13.3832 5.14477 14.4995 4.04938 15.94C2.95398 17.3806 2.27005 19.0914 2.07048 20.8901C2.05604 21.0214 2.0676 21.1543 2.10451 21.2812C2.14142 21.408 2.20295 21.5264 2.2856 21.6294C2.4525 21.8376 2.69527 21.971 2.96049 22.0001C3.2257 22.0293 3.49164 21.9519 3.69981 21.785C3.90798 21.6181 4.04131 21.3753 4.07049 21.1101C4.29007 19.1553 5.22217 17.3499 6.6887 16.0389C8.15524 14.7279 10.0534 14.0032 12.0205 14.0032C13.9876 14.0032 15.8857 14.7279 17.3523 16.0389C18.8188 17.3499 19.7509 19.1553 19.9705 21.1101C19.9977 21.3558 20.1149 21.5828 20.2996 21.7471C20.4843 21.9115 20.7233 22.0016 20.9705 22.0001H21.0805C21.3426 21.97 21.5822 21.8374 21.747 21.6314C21.9119 21.4253 21.9886 21.1625 21.9605 20.9001C21.76 19.0963 21.0724 17.3811 19.9713 15.9383C18.8703 14.4955 17.3974 13.3796 15.7105 12.7101ZM12.0005 12.0001C11.2094 12.0001 10.436 11.7655 9.7782 11.326C9.12041 10.8865 8.60772 10.2618 8.30497 9.53086C8.00222 8.79995 7.923 7.99569 8.07734 7.21976C8.23168 6.44384 8.61265 5.73111 9.17206 5.1717C9.73147 4.61229 10.4442 4.23132 11.2201 4.07698C11.996 3.92264 12.8003 4.00186 13.5312 4.30461C14.2621 4.60736 14.8868 5.12005 15.3264 5.77784C15.7659 6.43564 16.0005 7.209 16.0005 8.00012C16.0005 9.06099 15.5791 10.0784 14.8289 10.8286C14.0788 11.5787 13.0614 12.0001 12.0005 12.0001Z'
                        fill='white'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <section className='overflow-hidden'>
          <div className='flex flex-wrap -m-4'>
            <div className='w-full md:w-1/3 xl:w-1/4 p-4'>
              <div className='px-7 md:px-14 py-8 md:py-16 border-r border-gray-200'>
                <p className='font-semibold mb-4'>Product Categories</p>
                <div className='flex flex-col gap-3 mb-10'>
                  <a href='#' className='inline-block text-sm font-semibold'>
                    All
                  </a>
                  <a
                    href='#'
                    className='inline-block max-w-max font-semibold text-gray-500 text-sm hover:text-gray-900 transition duration-200'
                  >
                    T-Shirts &amp; Tops
                  </a>
                  <a
                    href='#'
                    className='inline-block max-w-max font-semibold text-gray-500 text-sm hover:text-gray-900 transition duration-200'
                  >
                    Jackets
                  </a>
                  <a
                    href='#'
                    className='inline-block max-w-max font-semibold text-gray-500 text-sm hover:text-gray-900 transition duration-200'
                  >
                    Dresses
                  </a>
                  <a
                    href='#'
                    className='inline-block max-w-max font-semibold text-gray-500 text-sm hover:text-gray-900 transition duration-200'
                  >
                    Sweatshirts
                  </a>
                  <a
                    href='#'
                    className='inline-block max-w-max font-semibold text-gray-500 text-sm hover:text-gray-900 transition duration-200'
                  >
                    Jeans
                  </a>
                  <a
                    href='#'
                    className='inline-block max-w-max font-semibold text-gray-500 text-sm hover:text-gray-900 transition duration-200'
                  >
                    Men
                  </a>
                  <a
                    href='#'
                    className='inline-block max-w-max font-semibold text-gray-500 text-sm hover:text-gray-900 transition duration-200'
                  >
                    Shorts
                  </a>
                  <a
                    href='#'
                    className='inline-block max-w-max font-semibold text-gray-500 text-sm hover:text-gray-900 transition duration-200'
                  >
                    Swimwear
                  </a>
                  <a
                    href='#'
                    className='inline-block max-w-max font-semibold text-gray-500 text-sm hover:text-gray-900 transition duration-200'
                  >
                    Jumpers &amp; Cardigans
                  </a>
                  <a
                    href='#'
                    className='inline-block max-w-max font-semibold text-gray-500 text-sm hover:text-gray-900 transition duration-200'
                  >
                    Trousers
                  </a>
                </div>
                <p className='font-semibold mb-4'>Size</p>
                <div className='flex flex-wrap gap-4 mb-10'>
                  <a
                    href='#'
                    className='inline-block px-7 py-1 rounded-sm bg-green-700 hover:bg-green-800 transition duration-200'
                  >
                    XS
                  </a>
                  <a
                    href='#'
                    className='inline-block px-7 py-1 rounded-sm bg-gray-100 hover:bg-gray-200 transition duration-200'
                  >
                    S
                  </a>
                  <a
                    href='#'
                    className='inline-block px-7 py-1 rounded-sm bg-gray-100 hover:bg-gray-200 transition duration-200'
                  >
                    M
                  </a>
                  <a
                    href='#'
                    className='inline-block px-7 py-1 rounded-sm bg-gray-100 hover:bg-gray-200 transition duration-200'
                  >
                    L
                  </a>
                  <a
                    href='#'
                    className='inline-block px-7 py-1 rounded-sm bg-gray-100 hover:bg-gray-200 transition duration-200'
                  >
                    XL
                  </a>
                  <a
                    href='#'
                    className='inline-block px-7 py-1 rounded-sm bg-gray-100 hover:bg-gray-200 transition duration-200'
                  >
                    XXL
                  </a>
                </div>
                <p className='font-semibold mb-4'>Color</p>
                <div className='flex flex-wrap gap-8 mb-10'>
                  <a href='#'>
                    <div className='mx-auto rounded-md bg-gray-800 w-6 h-6 mb-3' />
                    <p className='text-center text-sm font-semibold'>
                      Blue Navy
                    </p>
                  </a>
                  <a href='#'>
                    <div className='mx-auto rounded-md bg-gray-100 w-6 h-6 mb-3' />
                    <p className='text-center text-sm font-semibold'>Gray</p>
                  </a>
                  <a href='#'>
                    <div className='mx-auto rounded-md bg-orange-700 w-6 h-6 mb-3' />
                    <p className='text-center text-sm font-semibold'>Orange</p>
                  </a>
                  <a href='#'>
                    <div className='mx-auto rounded-md bg-gray-900 w-6 h-6 mb-3' />
                    <p className='text-center text-sm font-semibold'>Black</p>
                  </a>
                  <a href='#'>
                    <div className='mx-auto rounded-md bg-white border border-gray-900 w-6 h-6 mb-3' />
                    <p className='text-center text-sm font-semibold'>White</p>
                  </a>
                </div>
                <p className='font-semibold mb-4'>Brands</p>
                <div className='flex flex-col gap-4'>
                  <label className='relative flex items-center max-w-max gap-2'>
                    <input
                      className='custom-checkbox-1 opacity-0 absolute h-5 w-5'
                      type='checkbox'
                    />
                    <span className='border border-gray-900 bg-gray-50 w-5 h-5 flex justify-center items-center rounded-md'>
                      <svg
                        className='fill-current hidden'
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M12.4736 4.80668C12.4117 4.7442 12.3379 4.6946 12.2567 4.66075C12.1754 4.62691 12.0883 4.60948 12.0003 4.60948C11.9123 4.60948 11.8252 4.62691 11.7439 4.66075C11.6627 4.6946 11.5889 4.7442 11.527 4.80668L6.5603 9.78001L4.47363 7.68668C4.40928 7.62452 4.33332 7.57565 4.25009 7.54284C4.16685 7.51004 4.07797 7.49395 3.98851 7.4955C3.89906 7.49705 3.81079 7.5162 3.72873 7.55186C3.64668 7.58753 3.57246 7.639 3.5103 7.70335C3.44814 7.7677 3.39926 7.84366 3.36646 7.92689C3.33366 8.01013 3.31757 8.09901 3.31912 8.18847C3.32067 8.27792 3.33982 8.36619 3.37548 8.44824C3.41114 8.5303 3.46262 8.60452 3.52696 8.66668L6.08696 11.2267C6.14894 11.2892 6.22267 11.3388 6.30391 11.3726C6.38515 11.4065 6.47229 11.4239 6.5603 11.4239C6.6483 11.4239 6.73544 11.4065 6.81668 11.3726C6.89792 11.3388 6.97166 11.2892 7.03363 11.2267L12.4736 5.78668C12.5413 5.72425 12.5953 5.64848 12.6322 5.56415C12.6692 5.47982 12.6883 5.38875 12.6883 5.29668C12.6883 5.20461 12.6692 5.11354 12.6322 5.02921C12.5953 4.94488 12.5413 4.86911 12.4736 4.80668Z'
                          fill='white'
                        />
                      </svg>
                    </span>
                    <span className='text-sm font-semibold text-gray-500'>
                      Nike
                    </span>
                  </label>
                  <label className='relative flex items-center max-w-max gap-2'>
                    <input
                      className='custom-checkbox-1 opacity-0 absolute h-5 w-5'
                      type='checkbox'
                    />
                    <span className='border border-gray-900 bg-gray-50 w-5 h-5 flex justify-center items-center rounded-md'>
                      <svg
                        className='fill-current hidden'
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M12.4736 4.80668C12.4117 4.7442 12.3379 4.6946 12.2567 4.66075C12.1754 4.62691 12.0883 4.60948 12.0003 4.60948C11.9123 4.60948 11.8252 4.62691 11.7439 4.66075C11.6627 4.6946 11.5889 4.7442 11.527 4.80668L6.5603 9.78001L4.47363 7.68668C4.40928 7.62452 4.33332 7.57565 4.25009 7.54284C4.16685 7.51004 4.07797 7.49395 3.98851 7.4955C3.89906 7.49705 3.81079 7.5162 3.72873 7.55186C3.64668 7.58753 3.57246 7.639 3.5103 7.70335C3.44814 7.7677 3.39926 7.84366 3.36646 7.92689C3.33366 8.01013 3.31757 8.09901 3.31912 8.18847C3.32067 8.27792 3.33982 8.36619 3.37548 8.44824C3.41114 8.5303 3.46262 8.60452 3.52696 8.66668L6.08696 11.2267C6.14894 11.2892 6.22267 11.3388 6.30391 11.3726C6.38515 11.4065 6.47229 11.4239 6.5603 11.4239C6.6483 11.4239 6.73544 11.4065 6.81668 11.3726C6.89792 11.3388 6.97166 11.2892 7.03363 11.2267L12.4736 5.78668C12.5413 5.72425 12.5953 5.64848 12.6322 5.56415C12.6692 5.47982 12.6883 5.38875 12.6883 5.29668C12.6883 5.20461 12.6692 5.11354 12.6322 5.02921C12.5953 4.94488 12.5413 4.86911 12.4736 4.80668Z'
                          fill='white'
                        />
                      </svg>
                    </span>
                    <span className='text-sm font-semibold text-gray-500'>
                      Adidas
                    </span>
                  </label>
                  <label className='relative flex items-center max-w-max gap-2'>
                    <input
                      className='custom-checkbox-1 opacity-0 absolute h-5 w-5'
                      type='checkbox'
                    />
                    <span className='border border-gray-900 bg-gray-50 w-5 h-5 flex justify-center items-center rounded-md'>
                      <svg
                        className='fill-current hidden'
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M12.4736 4.80668C12.4117 4.7442 12.3379 4.6946 12.2567 4.66075C12.1754 4.62691 12.0883 4.60948 12.0003 4.60948C11.9123 4.60948 11.8252 4.62691 11.7439 4.66075C11.6627 4.6946 11.5889 4.7442 11.527 4.80668L6.5603 9.78001L4.47363 7.68668C4.40928 7.62452 4.33332 7.57565 4.25009 7.54284C4.16685 7.51004 4.07797 7.49395 3.98851 7.4955C3.89906 7.49705 3.81079 7.5162 3.72873 7.55186C3.64668 7.58753 3.57246 7.639 3.5103 7.70335C3.44814 7.7677 3.39926 7.84366 3.36646 7.92689C3.33366 8.01013 3.31757 8.09901 3.31912 8.18847C3.32067 8.27792 3.33982 8.36619 3.37548 8.44824C3.41114 8.5303 3.46262 8.60452 3.52696 8.66668L6.08696 11.2267C6.14894 11.2892 6.22267 11.3388 6.30391 11.3726C6.38515 11.4065 6.47229 11.4239 6.5603 11.4239C6.6483 11.4239 6.73544 11.4065 6.81668 11.3726C6.89792 11.3388 6.97166 11.2892 7.03363 11.2267L12.4736 5.78668C12.5413 5.72425 12.5953 5.64848 12.6322 5.56415C12.6692 5.47982 12.6883 5.38875 12.6883 5.29668C12.6883 5.20461 12.6692 5.11354 12.6322 5.02921C12.5953 4.94488 12.5413 4.86911 12.4736 4.80668Z'
                          fill='white'
                        />
                      </svg>
                    </span>
                    <span className='text-sm font-semibold text-gray-500'>
                      3 Second
                    </span>
                  </label>
                  <label className='relative flex items-center max-w-max gap-2'>
                    <input
                      className='custom-checkbox-1 opacity-0 absolute h-5 w-5'
                      type='checkbox'
                    />
                    <span className='border border-gray-900 bg-gray-50 w-5 h-5 flex justify-center items-center rounded-md'>
                      <svg
                        className='fill-current hidden'
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M12.4736 4.80668C12.4117 4.7442 12.3379 4.6946 12.2567 4.66075C12.1754 4.62691 12.0883 4.60948 12.0003 4.60948C11.9123 4.60948 11.8252 4.62691 11.7439 4.66075C11.6627 4.6946 11.5889 4.7442 11.527 4.80668L6.5603 9.78001L4.47363 7.68668C4.40928 7.62452 4.33332 7.57565 4.25009 7.54284C4.16685 7.51004 4.07797 7.49395 3.98851 7.4955C3.89906 7.49705 3.81079 7.5162 3.72873 7.55186C3.64668 7.58753 3.57246 7.639 3.5103 7.70335C3.44814 7.7677 3.39926 7.84366 3.36646 7.92689C3.33366 8.01013 3.31757 8.09901 3.31912 8.18847C3.32067 8.27792 3.33982 8.36619 3.37548 8.44824C3.41114 8.5303 3.46262 8.60452 3.52696 8.66668L6.08696 11.2267C6.14894 11.2892 6.22267 11.3388 6.30391 11.3726C6.38515 11.4065 6.47229 11.4239 6.5603 11.4239C6.6483 11.4239 6.73544 11.4065 6.81668 11.3726C6.89792 11.3388 6.97166 11.2892 7.03363 11.2267L12.4736 5.78668C12.5413 5.72425 12.5953 5.64848 12.6322 5.56415C12.6692 5.47982 12.6883 5.38875 12.6883 5.29668C12.6883 5.20461 12.6692 5.11354 12.6322 5.02921C12.5953 4.94488 12.5413 4.86911 12.4736 4.80668Z'
                          fill='white'
                        />
                      </svg>
                    </span>
                    <span className='text-sm font-semibold text-gray-500'>
                      Lacoste
                    </span>
                  </label>
                  <label className='relative flex items-center max-w-max gap-2'>
                    <input
                      className='custom-checkbox-1 opacity-0 absolute h-5 w-5'
                      type='checkbox'
                    />
                    <span className='border border-gray-900 bg-gray-50 w-5 h-5 flex justify-center items-center rounded-md'>
                      <svg
                        className='fill-current hidden'
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M12.4736 4.80668C12.4117 4.7442 12.3379 4.6946 12.2567 4.66075C12.1754 4.62691 12.0883 4.60948 12.0003 4.60948C11.9123 4.60948 11.8252 4.62691 11.7439 4.66075C11.6627 4.6946 11.5889 4.7442 11.527 4.80668L6.5603 9.78001L4.47363 7.68668C4.40928 7.62452 4.33332 7.57565 4.25009 7.54284C4.16685 7.51004 4.07797 7.49395 3.98851 7.4955C3.89906 7.49705 3.81079 7.5162 3.72873 7.55186C3.64668 7.58753 3.57246 7.639 3.5103 7.70335C3.44814 7.7677 3.39926 7.84366 3.36646 7.92689C3.33366 8.01013 3.31757 8.09901 3.31912 8.18847C3.32067 8.27792 3.33982 8.36619 3.37548 8.44824C3.41114 8.5303 3.46262 8.60452 3.52696 8.66668L6.08696 11.2267C6.14894 11.2892 6.22267 11.3388 6.30391 11.3726C6.38515 11.4065 6.47229 11.4239 6.5603 11.4239C6.6483 11.4239 6.73544 11.4065 6.81668 11.3726C6.89792 11.3388 6.97166 11.2892 7.03363 11.2267L12.4736 5.78668C12.5413 5.72425 12.5953 5.64848 12.6322 5.56415C12.6692 5.47982 12.6883 5.38875 12.6883 5.29668C12.6883 5.20461 12.6692 5.11354 12.6322 5.02921C12.5953 4.94488 12.5413 4.86911 12.4736 4.80668Z'
                          fill='white'
                        />
                      </svg>
                    </span>
                    <span className='text-sm font-semibold text-gray-500'>
                      Erigo
                    </span>
                  </label>
                  <label className='relative flex items-center max-w-max gap-2'>
                    <input
                      className='custom-checkbox-1 opacity-0 absolute h-5 w-5'
                      type='checkbox'
                    />
                    <span className='border border-gray-900 bg-gray-50 w-5 h-5 flex justify-center items-center rounded-md'>
                      <svg
                        className='fill-current hidden'
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M12.4736 4.80668C12.4117 4.7442 12.3379 4.6946 12.2567 4.66075C12.1754 4.62691 12.0883 4.60948 12.0003 4.60948C11.9123 4.60948 11.8252 4.62691 11.7439 4.66075C11.6627 4.6946 11.5889 4.7442 11.527 4.80668L6.5603 9.78001L4.47363 7.68668C4.40928 7.62452 4.33332 7.57565 4.25009 7.54284C4.16685 7.51004 4.07797 7.49395 3.98851 7.4955C3.89906 7.49705 3.81079 7.5162 3.72873 7.55186C3.64668 7.58753 3.57246 7.639 3.5103 7.70335C3.44814 7.7677 3.39926 7.84366 3.36646 7.92689C3.33366 8.01013 3.31757 8.09901 3.31912 8.18847C3.32067 8.27792 3.33982 8.36619 3.37548 8.44824C3.41114 8.5303 3.46262 8.60452 3.52696 8.66668L6.08696 11.2267C6.14894 11.2892 6.22267 11.3388 6.30391 11.3726C6.38515 11.4065 6.47229 11.4239 6.5603 11.4239C6.6483 11.4239 6.73544 11.4065 6.81668 11.3726C6.89792 11.3388 6.97166 11.2892 7.03363 11.2267L12.4736 5.78668C12.5413 5.72425 12.5953 5.64848 12.6322 5.56415C12.6692 5.47982 12.6883 5.38875 12.6883 5.29668C12.6883 5.20461 12.6692 5.11354 12.6322 5.02921C12.5953 4.94488 12.5413 4.86911 12.4736 4.80668Z'
                          fill='white'
                        />
                      </svg>
                    </span>
                    <span className='text-sm font-semibold text-gray-500'>
                      Levi’s
                    </span>
                  </label>
                  <label className='relative flex items-center max-w-max gap-2'>
                    <input
                      className='custom-checkbox-1 opacity-0 absolute h-5 w-5'
                      type='checkbox'
                    />
                    <span className='border border-gray-900 bg-gray-50 w-5 h-5 flex justify-center items-center rounded-md'>
                      <svg
                        className='fill-current hidden'
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M12.4736 4.80668C12.4117 4.7442 12.3379 4.6946 12.2567 4.66075C12.1754 4.62691 12.0883 4.60948 12.0003 4.60948C11.9123 4.60948 11.8252 4.62691 11.7439 4.66075C11.6627 4.6946 11.5889 4.7442 11.527 4.80668L6.5603 9.78001L4.47363 7.68668C4.40928 7.62452 4.33332 7.57565 4.25009 7.54284C4.16685 7.51004 4.07797 7.49395 3.98851 7.4955C3.89906 7.49705 3.81079 7.5162 3.72873 7.55186C3.64668 7.58753 3.57246 7.639 3.5103 7.70335C3.44814 7.7677 3.39926 7.84366 3.36646 7.92689C3.33366 8.01013 3.31757 8.09901 3.31912 8.18847C3.32067 8.27792 3.33982 8.36619 3.37548 8.44824C3.41114 8.5303 3.46262 8.60452 3.52696 8.66668L6.08696 11.2267C6.14894 11.2892 6.22267 11.3388 6.30391 11.3726C6.38515 11.4065 6.47229 11.4239 6.5603 11.4239C6.6483 11.4239 6.73544 11.4065 6.81668 11.3726C6.89792 11.3388 6.97166 11.2892 7.03363 11.2267L12.4736 5.78668C12.5413 5.72425 12.5953 5.64848 12.6322 5.56415C12.6692 5.47982 12.6883 5.38875 12.6883 5.29668C12.6883 5.20461 12.6692 5.11354 12.6322 5.02921C12.5953 4.94488 12.5413 4.86911 12.4736 4.80668Z'
                          fill='white'
                        />
                      </svg>
                    </span>
                    <span className='text-sm font-semibold text-gray-500'>
                      Gucci
                    </span>
                  </label>
                  <label className='relative flex items-center max-w-max gap-2'>
                    <input
                      className='custom-checkbox-1 opacity-0 absolute h-5 w-5'
                      type='checkbox'
                    />
                    <span className='border border-gray-900 bg-gray-50 w-5 h-5 flex justify-center items-center rounded-md'>
                      <svg
                        className='fill-current hidden'
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M12.4736 4.80668C12.4117 4.7442 12.3379 4.6946 12.2567 4.66075C12.1754 4.62691 12.0883 4.60948 12.0003 4.60948C11.9123 4.60948 11.8252 4.62691 11.7439 4.66075C11.6627 4.6946 11.5889 4.7442 11.527 4.80668L6.5603 9.78001L4.47363 7.68668C4.40928 7.62452 4.33332 7.57565 4.25009 7.54284C4.16685 7.51004 4.07797 7.49395 3.98851 7.4955C3.89906 7.49705 3.81079 7.5162 3.72873 7.55186C3.64668 7.58753 3.57246 7.639 3.5103 7.70335C3.44814 7.7677 3.39926 7.84366 3.36646 7.92689C3.33366 8.01013 3.31757 8.09901 3.31912 8.18847C3.32067 8.27792 3.33982 8.36619 3.37548 8.44824C3.41114 8.5303 3.46262 8.60452 3.52696 8.66668L6.08696 11.2267C6.14894 11.2892 6.22267 11.3388 6.30391 11.3726C6.38515 11.4065 6.47229 11.4239 6.5603 11.4239C6.6483 11.4239 6.73544 11.4065 6.81668 11.3726C6.89792 11.3388 6.97166 11.2892 7.03363 11.2267L12.4736 5.78668C12.5413 5.72425 12.5953 5.64848 12.6322 5.56415C12.6692 5.47982 12.6883 5.38875 12.6883 5.29668C12.6883 5.20461 12.6692 5.11354 12.6322 5.02921C12.5953 4.94488 12.5413 4.86911 12.4736 4.80668Z'
                          fill='white'
                        />
                      </svg>
                    </span>
                    <span className='text-sm font-semibold text-gray-500'>
                      Chanel
                    </span>
                  </label>
                  <label className='relative flex items-center max-w-max gap-2'>
                    <input
                      className='custom-checkbox-1 opacity-0 absolute h-5 w-5'
                      type='checkbox'
                    />
                    <span className='border border-gray-900 bg-gray-50 w-5 h-5 flex justify-center items-center rounded-md'>
                      <svg
                        className='fill-current hidden'
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <path
                          d='M12.4736 4.80668C12.4117 4.7442 12.3379 4.6946 12.2567 4.66075C12.1754 4.62691 12.0883 4.60948 12.0003 4.60948C11.9123 4.60948 11.8252 4.62691 11.7439 4.66075C11.6627 4.6946 11.5889 4.7442 11.527 4.80668L6.5603 9.78001L4.47363 7.68668C4.40928 7.62452 4.33332 7.57565 4.25009 7.54284C4.16685 7.51004 4.07797 7.49395 3.98851 7.4955C3.89906 7.49705 3.81079 7.5162 3.72873 7.55186C3.64668 7.58753 3.57246 7.639 3.5103 7.70335C3.44814 7.7677 3.39926 7.84366 3.36646 7.92689C3.33366 8.01013 3.31757 8.09901 3.31912 8.18847C3.32067 8.27792 3.33982 8.36619 3.37548 8.44824C3.41114 8.5303 3.46262 8.60452 3.52696 8.66668L6.08696 11.2267C6.14894 11.2892 6.22267 11.3388 6.30391 11.3726C6.38515 11.4065 6.47229 11.4239 6.5603 11.4239C6.6483 11.4239 6.73544 11.4065 6.81668 11.3726C6.89792 11.3388 6.97166 11.2892 7.03363 11.2267L12.4736 5.78668C12.5413 5.72425 12.5953 5.64848 12.6322 5.56415C12.6692 5.47982 12.6883 5.38875 12.6883 5.29668C12.6883 5.20461 12.6692 5.11354 12.6322 5.02921C12.5953 4.94488 12.5413 4.86911 12.4736 4.80668Z'
                          fill='white'
                        />
                      </svg>
                    </span>
                    <span className='text-sm font-semibold text-gray-500'>
                      QuiqSilver
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className='w-full md:w-2/3 xl:w-3/4 p-4'>
              <div className='p-7 md:p-14'>
                <div className='flex flex-wrap -m-4'>
                  <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                    <div className='group'>
                      <div
                        className='relative overflow-hidden mb-2'
                        style={{ height: 315 }}
                      >
                        <img
                          className='object-cover w-full h-full transform group-hover:scale-105 transition duration-200'
                          src='shopky-assets/display-product/product4.png'
                          alt=''
                        />
                        <div className='absolute top-4 right-4'>
                          <a
                            href='#'
                            className='bg-gray-900 rounded-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 h-12 w-12 flex items-center justify-center transition duration-200'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <path
                                d='M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z'
                                fill='#EFF0F3'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between flex-wrap gap-2 mb-2'>
                      <h2 className='font-heading text-3xl'>Black Dresses</h2>
                      <div className='flex items-center flex-wrap gap-2'>
                        <h3 className='font-heading text-red-700 text-3xl'>
                          $350
                        </h3>
                        <p className='text-gray-500 text-sm line-through'>
                          $500
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200'>
                      <div className='flex gap-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                      </div>
                      <span className='font-semibold'>4.9</span>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                    <div className='group'>
                      <div
                        className='relative overflow-hidden mb-2'
                        style={{ height: 315 }}
                      >
                        <img
                          className='object-cover w-full h-full transform group-hover:scale-105 transition duration-200'
                          src='shopky-assets/categories/product4.png'
                          alt=''
                        />
                        <div className='absolute top-4 right-4'>
                          <a
                            href='#'
                            className='bg-gray-900 rounded-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 h-12 w-12 flex items-center justify-center transition duration-200'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <path
                                d='M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z'
                                fill='#EFF0F3'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between flex-wrap gap-2 mb-2'>
                      <h2 className='font-heading text-3xl'>Black Dresses</h2>
                      <div className='flex items-center flex-wrap gap-2'>
                        <h3 className='font-heading text-red-700 text-3xl'>
                          $350
                        </h3>
                        <p className='text-gray-500 text-sm line-through'>
                          $500
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200'>
                      <div className='flex gap-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                      </div>
                      <span className='font-semibold'>4.9</span>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                    <div className='group'>
                      <div
                        className='relative overflow-hidden mb-2'
                        style={{ height: 315 }}
                      >
                        <img
                          className='object-cover w-full h-full transform group-hover:scale-105 transition duration-200'
                          src='shopky-assets/display-product/product2.png'
                          alt=''
                        />
                        <div className='absolute top-4 right-4'>
                          <a
                            href='#'
                            className='bg-gray-900 rounded-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 h-12 w-12 flex items-center justify-center transition duration-200'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <path
                                d='M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z'
                                fill='#EFF0F3'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between flex-wrap gap-2 mb-2'>
                      <h2 className='font-heading text-3xl'>Black Dresses</h2>
                      <div className='flex items-center flex-wrap gap-2'>
                        <h3 className='font-heading text-red-700 text-3xl'>
                          $350
                        </h3>
                        <p className='text-gray-500 text-sm line-through'>
                          $500
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200'>
                      <div className='flex gap-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                      </div>
                      <span className='font-semibold'>4.9</span>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                    <div className='group'>
                      <div
                        className='relative overflow-hidden mb-2'
                        style={{ height: 315 }}
                      >
                        <img
                          className='object-cover w-full h-full transform group-hover:scale-105 transition duration-200'
                          src='shopky-assets/display-product/product3.png'
                          alt=''
                        />
                        <div className='absolute top-4 right-4'>
                          <a
                            href='#'
                            className='bg-gray-900 rounded-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 h-12 w-12 flex items-center justify-center transition duration-200'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <path
                                d='M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z'
                                fill='#EFF0F3'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between flex-wrap gap-2 mb-2'>
                      <h2 className='font-heading text-3xl'>Black Dresses</h2>
                      <div className='flex items-center flex-wrap gap-2'>
                        <h3 className='font-heading text-red-700 text-3xl'>
                          $350
                        </h3>
                        <p className='text-gray-500 text-sm line-through'>
                          $500
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200'>
                      <div className='flex gap-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                      </div>
                      <span className='font-semibold'>4.9</span>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                    <div className='group'>
                      <div
                        className='relative overflow-hidden mb-2'
                        style={{ height: 315 }}
                      >
                        <img
                          className='object-cover w-full h-full transform group-hover:scale-105 transition duration-200'
                          src='shopky-assets/categories/product5.png'
                          alt=''
                        />
                        <div className='absolute top-4 right-4'>
                          <a
                            href='#'
                            className='bg-gray-900 rounded-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 h-12 w-12 flex items-center justify-center transition duration-200'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <path
                                d='M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z'
                                fill='#EFF0F3'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between flex-wrap gap-2 mb-2'>
                      <h2 className='font-heading text-3xl'>Black Dresses</h2>
                      <div className='flex items-center flex-wrap gap-2'>
                        <h3 className='font-heading text-red-700 text-3xl'>
                          $350
                        </h3>
                        <p className='text-gray-500 text-sm line-through'>
                          $500
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200'>
                      <div className='flex gap-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                      </div>
                      <span className='font-semibold'>4.9</span>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                    <div className='group'>
                      <div
                        className='relative overflow-hidden mb-2'
                        style={{ height: 315 }}
                      >
                        <img
                          className='object-cover w-full h-full transform group-hover:scale-105 transition duration-200'
                          src='shopky-assets/display-product/product2.png'
                          alt=''
                        />
                        <div className='absolute top-4 right-4'>
                          <a
                            href='#'
                            className='bg-gray-900 rounded-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 h-12 w-12 flex items-center justify-center transition duration-200'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <path
                                d='M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z'
                                fill='#EFF0F3'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between flex-wrap gap-2 mb-2'>
                      <h2 className='font-heading text-3xl'>Black Dresses</h2>
                      <div className='flex items-center flex-wrap gap-2'>
                        <h3 className='font-heading text-red-700 text-3xl'>
                          $350
                        </h3>
                        <p className='text-gray-500 text-sm line-through'>
                          $500
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200'>
                      <div className='flex gap-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            d='M7.99978 12.1733L3.29778 14.8053L4.34778 9.51998L0.391113 5.86131L5.74245 5.22665L7.99978 0.333313L10.2571 5.22665L15.6084 5.86131L11.6518 9.51998L12.7018 14.8053L7.99978 12.1733Z'
                            fill='#FFA800'
                          />
                        </svg>
                      </div>
                      <span className='font-semibold'>4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-20 pb-32'>
          <div className='container mx-auto px-4'>
            <div className='pb-20 border-b border-gray-50 mb-4'>
              <div className='flex flex-wrap -m-4'>
                <div className='w-full lg:w-1/2 p-4'>
                  <a href='#' className='inline-block mb-6'>
                    <img
                      className='h-8'
                      src='shopky-assets/logos/shopky-logo2.svg'
                      alt=''
                    />
                  </a>
                  <p className='text-gray-500'>
                    Elevate Your Shopping Experience
                  </p>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/6 p-4'>
                  <p className='font-semibold mb-6'>Shopky</p>
                  <ul className='flex flex-col gap-4'>
                    <li>
                      <a
                        href='#'
                        className='text-gray-500 hover:text-gray-900 transition duration-200'
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-gray-500 hover:text-gray-900 transition duration-200'
                      >
                        Categories
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-gray-500 hover:text-gray-900 transition duration-200'
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-gray-500 hover:text-gray-900 transition duration-200'
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/6 p-4'>
                  <p className='font-semibold mb-6'>Explore</p>
                  <ul className='flex flex-col gap-4'>
                    <li>
                      <a
                        href='#'
                        className='text-gray-500 hover:text-gray-900 transition duration-200'
                      >
                        New Arrivals
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-gray-500 hover:text-gray-900 transition duration-200'
                      >
                        Best Sellers
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-gray-500 hover:text-gray-900 transition duration-200'
                      >
                        Offers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full sm:w-1/3 lg:w-1/6 p-4'>
                  <p className='font-semibold mb-6'>Help</p>
                  <ul className='flex flex-col gap-4'>
                    <li>
                      <a
                        href='#'
                        className='text-gray-500 hover:text-gray-900 transition duration-200'
                      >
                        Customer Support
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-gray-500 hover:text-gray-900 transition duration-200'
                      >
                        Track Order
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='text-gray-500 hover:text-gray-900 transition duration-200'
                      >
                        Feedback
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -m-4'>
              <div className='w-full md:w-1/3 p-4'>
                <p className='text-gray-500'>
                  Terms | Privacy | © 2024 Shopky, Inc.
                </p>
              </div>
              <div className='w-full md:w-1/3 p-4'>
                <div className='flex md:justify-center flex-wrap gap-4'>
                  <img
                    className='h-6'
                    src='shopky-assets/logos/visa-logo.svg'
                    alt=''
                  />
                  <img
                    className='h-6'
                    src='shopky-assets/logos/mastercard-logo.svg'
                    alt=''
                  />
                  <img
                    className='h-6'
                    src='shopky-assets/logos/paypal-logo.svg'
                    alt=''
                  />
                  <img
                    className='h-6'
                    src='shopky-assets/logos/amex-logo.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full md:w-1/3 p-4'>
                <div className='flex md:justify-end flex-wrap gap-6'>
                  <a
                    href='#'
                    className='text-gray-900 hover:text-opacity-80 transition duration-200'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='text-gray-900 hover:text-opacity-80 transition duration-200'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M18.83 9.44C18.7383 9.30429 18.6146 9.19319 18.4699 9.11647C18.3252 9.03975 18.1638 8.99975 18 9H15V7H17.2C17.4652 7 17.7196 6.89464 17.9071 6.70711C18.0946 6.51957 18.2 6.26522 18.2 6V2C18.2 1.73478 18.0946 1.48043 17.9071 1.29289C17.7196 1.10536 17.4652 1 17.2 1H14C12.4617 1 10.9865 1.61107 9.89878 2.69878C8.81107 3.78649 8.2 5.26174 8.2 6.8V9H6C5.73478 9 5.48043 9.10536 5.29289 9.29289C5.10536 9.48043 5 9.73478 5 10V14C5 14.2652 5.10536 14.5196 5.29289 14.7071C5.48043 14.8946 5.73478 15 6 15H8.2V22C8.2 22.2652 8.30536 22.5196 8.49289 22.7071C8.68043 22.8946 8.93478 23 9.2 23H14C14.2652 23 14.5196 22.8946 14.7071 22.7071C14.8946 22.5196 15 22.2652 15 22V15H16.4C16.6003 15.0002 16.796 14.9402 16.9618 14.8279C17.1276 14.7156 17.2559 14.5561 17.33 14.37L18.93 10.37C18.9904 10.2186 19.0129 10.0547 18.9954 9.89259C18.978 9.7305 18.9212 9.57512 18.83 9.44ZM15.72 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21H10.2V14C10.2 13.7348 10.0946 13.4804 9.90711 13.2929C9.71957 13.1054 9.46522 13 9.2 13H7V11H9.2C9.46522 11 9.71957 10.8946 9.90711 10.7071C10.0946 10.5196 10.2 10.2652 10.2 10V6.8C10.2026 5.79299 10.6038 4.82798 11.3159 4.11591C12.028 3.40384 12.993 3.00264 14 3H16.2V5H15.4C15.0614 4.95067 14.7163 4.97137 14.3861 5.06082C14.0558 5.15026 13.7474 5.30655 13.48 5.52C13.3177 5.6899 13.1915 5.8909 13.109 6.11089C13.0265 6.33087 12.9894 6.56529 13 6.8V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H16.52L15.72 13Z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='text-gray-900 hover:text-opacity-80 transition duration-200'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M22.9914 3.95021C22.9915 3.77357 22.9448 3.60007 22.8561 3.44735C22.7673 3.29464 22.6397 3.16817 22.4862 3.08084C22.3326 2.9935 22.1587 2.94842 21.9821 2.95017C21.8054 2.95193 21.6324 3.00046 21.4807 3.09083C20.8954 3.43921 20.2652 3.70601 19.6077 3.88383C18.6686 3.07806 17.471 2.63713 16.2337 2.64164C14.8762 2.6432 13.5726 3.17223 12.5979 4.11702C11.6232 5.06181 11.0539 6.3484 11.01 7.70512C8.33402 7.27838 5.90868 5.88164 4.19649 3.78126C4.09333 3.65609 3.96158 3.55757 3.81235 3.494C3.66313 3.43043 3.5008 3.40368 3.33907 3.41601C3.17743 3.42932 3.02147 3.4818 2.88467 3.56892C2.74786 3.65603 2.63434 3.77516 2.55391 3.91601C2.14144 4.63582 1.90454 5.44276 1.86246 6.27131C1.82038 7.09986 1.9743 7.92666 2.31172 8.68456L2.30977 8.68651C2.15812 8.77991 2.03296 8.91066 1.94628 9.06625C1.85959 9.22185 1.81427 9.39708 1.81465 9.57519C1.81282 9.72211 1.82163 9.86898 1.84102 10.0146C1.94316 11.2729 2.50081 12.4507 3.40938 13.3271C3.34775 13.4446 3.31013 13.5731 3.29873 13.7052C3.28732 13.8373 3.30237 13.9704 3.34297 14.0967C3.73909 15.3308 4.58147 16.3727 5.70528 17.0185C4.56352 17.46 3.3307 17.614 2.11543 17.4668C1.89051 17.4386 1.66266 17.4876 1.46928 17.6059C1.2759 17.7242 1.12846 17.9047 1.05115 18.1178C0.973837 18.3309 0.971244 18.5639 1.04379 18.7787C1.11634 18.9935 1.25973 19.1772 1.45043 19.2998C3.54053 20.646 5.97411 21.3617 8.4602 21.3613C11.2795 21.393 14.0302 20.4921 16.2844 18.7988C18.5387 17.1054 20.1702 14.7145 20.925 11.998C21.2781 10.8146 21.4583 9.58648 21.4602 8.35157C21.4602 8.28614 21.4602 8.21876 21.4592 8.15138C21.9813 7.58831 22.3858 6.92668 22.6489 6.20527C22.912 5.48387 23.0284 4.7172 22.9914 3.95021ZM19.6848 7.16212C19.5196 7.35746 19.436 7.60891 19.4514 7.86427C19.4611 8.02927 19.4602 8.19527 19.4602 8.35157C19.4581 9.39511 19.3052 10.4329 19.0061 11.4326C18.3896 13.744 17.0152 15.7817 15.1031 17.2192C13.1911 18.6568 10.8519 19.4111 8.4602 19.3613C7.60108 19.3616 6.74492 19.2606 5.90942 19.0606C6.97483 18.7172 7.97101 18.1879 8.8518 17.4971C9.01403 17.3693 9.13275 17.1945 9.19169 16.9967C9.25063 16.7988 9.24688 16.5875 9.18098 16.3918C9.11507 16.1961 8.99023 16.0257 8.82358 15.9038C8.65694 15.7819 8.45665 15.7145 8.2502 15.7109C7.41903 15.698 6.62533 15.363 6.03633 14.7764C6.18575 14.7481 6.33419 14.7129 6.48165 14.6709C6.69766 14.6094 6.8867 14.477 7.01831 14.295C7.14993 14.1131 7.21647 13.8921 7.20723 13.6677C7.19798 13.4433 7.11348 13.2285 6.96734 13.058C6.82119 12.8874 6.62191 12.7711 6.40157 12.7275C5.91911 12.6323 5.46512 12.427 5.07489 12.1277C4.68466 11.8284 4.3687 11.4432 4.15157 11.002C4.3323 11.0266 4.51418 11.0419 4.69649 11.0479C4.91308 11.0511 5.12509 10.9854 5.30187 10.8603C5.47865 10.7351 5.61104 10.5569 5.67989 10.3516C5.74587 10.1443 5.74248 9.92123 5.67022 9.7161C5.59797 9.51096 5.46079 9.33499 5.2795 9.21485C4.83965 8.92182 4.47935 8.52427 4.23086 8.0578C3.98237 7.59134 3.85346 7.07052 3.85567 6.54201C3.85567 6.47561 3.85762 6.4092 3.86153 6.34377C6.10279 8.43402 9.00985 9.66621 12.0705 9.82326C12.225 9.82934 12.3789 9.80024 12.5205 9.73816C12.6621 9.67607 12.7877 9.58262 12.8879 9.46486C12.9871 9.34596 13.0573 9.20566 13.0931 9.05501C13.1288 8.90437 13.1291 8.74748 13.0939 8.5967C13.0367 8.35806 13.0076 8.11357 13.007 7.86818C13.0079 7.01271 13.3482 6.19254 13.9531 5.58764C14.558 4.98274 15.3781 4.64251 16.2336 4.64161C16.6737 4.64043 17.1093 4.7305 17.5129 4.90615C17.9165 5.0818 18.2792 5.3392 18.5783 5.66212C18.6937 5.7862 18.8388 5.87871 19 5.93085C19.1612 5.98299 19.333 5.99303 19.4992 5.96001C19.91 5.88006 20.3149 5.7724 20.7111 5.63775C20.4409 6.19072 20.0955 6.70369 19.6848 7.16212Z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

