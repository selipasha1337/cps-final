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

  const resetMenu = function() {
    if (this.matchMedia('(min-width: 1120px)').matches) {
      sidebar.classList.remove('sidebar--show')
      overlay.classList.remove('overlay--show')
      body.classList.remove('no-scroll')
    }
  }

  menuButton.addEventListener('click', toggleMenu)
  menuCloseButton.addEventListener('click', toggleMenu)
  overlay.addEventListener('click', toggleMenu)
  window.addEventListener('resize', resetMenu)


  // Слайдер бренды

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

  // Бренды

  const brandArrow = document.querySelector('#showAllBrands')
  const brands = document.querySelector('.brands__list')
  const brand = brands.children
  let BRANDS_RANGE = 6

  const brandsResize = function(width) {
    if (width >= 1366) {
      BRANDS_RANGE = 8
    }
  }

  const showMoreBrands = function() {
    this.classList.toggle('brands__button--clicked')

    for (let i = 0; i < brand.length - BRANDS_RANGE; i++) {
      brand[i + BRANDS_RANGE].classList.toggle('brand--hidden')
    }

    this.innerHTML = this.innerHTML === 'Показать все' ? 'Скрыть' : 'Показать все'
  }

  brandsResize(document.documentElement.clientWidth || document.body.clientWidth)

  brandArrow.addEventListener('click', showMoreBrands)

  for (let i = brand.length - 1; i >= BRANDS_RANGE; i--) {
    brand[i].classList.add('brand--hidden')
  }

})


// Ремонт

const repairArrow = document.querySelector('#showAllRepairs')
const repairs = document.querySelector('.repairs__list')
const repair = repairs.children
let REPAIRS_RANGE = 3

const repairsResize = function(width) {
  if (width >= 1366) {
    REPAIRS_RANGE = 4
  }
}

const showMoreRepairs = function() {
  this.classList.toggle('repairs__button--clicked')

  for (let i = 0; i < repair.length - REPAIRS_RANGE; i++) {
    repair[i + REPAIRS_RANGE].classList.toggle('repair--hidden')
  }

  this.innerHTML = this.innerHTML === 'Показать все' ? 'Скрыть' : 'Показать все'
}

repairsResize(document.documentElement.clientWidth || document.body.clientWidth)

repairArrow.addEventListener('click', showMoreRepairs)

for (let i = repair.length - 1; i >= REPAIRS_RANGE; i--) {
  repair[i].classList.add('repair--hidden')
}


// Слайдер ремонт

const sliderRepairs = function() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const swiper = new Swiper('.slider-repairs', {
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
        },
        768: {
          slidesPerView: 3
        }
      }
    })
  }
}

sliderRepairs()

// Слайдер ремонт

const sliderPrices = function() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const swiper = new Swiper('.slider-prices', {
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
        },
        768: {
          slidesPerView: 3
        }
      }
    })
  }
}

sliderPrices()



