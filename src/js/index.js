import '../scss/style.scss'
import Swiper, { Pagination } from 'swiper'

Swiper.use([Pagination])

document.addEventListener('DOMContentLoaded', function() {

  // Меню

  const menuButton = document.querySelector('#mainButtonMenu')
  const menuCloseButton = document.querySelector('#menuCloseButton')
  const sidebar = document.querySelector('.sidebar')
  const overlay = document.querySelector('.overlay')
  const body = document.querySelector('body')

  const toggleMenu = function() {
    sidebar.classList.toggle('sidebar--show')
    overlay.classList.toggle('overlay--show')
    body.classList.toggle('no-scroll')
  }

  window.addEventListener('click', function(e) {
    if (e.target !== overlay) {
      toggleMenu()
    }
  })

  menuButton.addEventListener('click', toggleMenu)
  menuCloseButton.addEventListener('click', toggleMenu)
  body.addEventListener('click', toggleMenu)

  // Слайдер

  const sliderBrands = function() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      const swiper = new Swiper('.slider-brands', {
        slidesPerView: 1.2,
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        init: true,
        breakpoints: {
          376: {
            slidesPerView: 1.5
          },
          456: {
            slidesPerView: 1.8
          },
          555: {
            slidesPerView: 2
          },
          593: {
            slidesPerView: 2.3
          },
          667: {
            slidesPerView: 2.6
          }
        }
      })
    }
  }

  sliderBrands()
  window.addEventListener('resize', function() {
    sliderBrands()
  })

  // Бренды
  const brandArrow = document.querySelector('.brands__button')
  const brands = document.querySelector('.brands__list')
  const brand = brands.children
  let BRANDS_RANGE = 6

  const brandsResize = function(width) {
    if (width >= 1366) {
      BRANDS_RANGE = 8
    }
  }

  const showMore = function() {
    this.classList.toggle('brands__button--clicked')

    for (let i = 0; i < brand.length - BRANDS_RANGE; i++) {
      brand[i + BRANDS_RANGE].classList.toggle('brand--hidden')
    }

    this.innerHTML = this.innerHTML === 'Показать все' ? 'Скрыть' : 'Показать все'
  }

  brandsResize(document.documentElement.clientWidth || document.body.clientWidth)

  brandArrow.addEventListener('click', showMore)

  for (let i = brand.length - 1; i >= BRANDS_RANGE; i--) {
    brand[i].classList.add('brand--hidden')
  }


})






