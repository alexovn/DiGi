$(function(){
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-arrow slick-next"><img src="./img/intro/next-arrow.svg" alt="next"></button>',
        prevArrow:'<button type="button" class="slick-arrow slick-prev"><img src="./img/intro/prev-arrow.svg" alt="prev"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false,
            }
          }
        ]
      });
})

$(function(){
  $('.testimonials__content').slick({
    slidesToShow: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true,
  })
})
$(function() {
    let $news__content = $('.news__content').masonry({
        // options
        itemSelector: '.news__item',
        columnWidth: 270,
        fitWidth: true,
        gutter: 30,
        horizontalOrder: true
      });

      $news__content.imagesLoaded().progress(function() {
        $news__content.masonry('layout');
      });
})

function touchstart(){
    if('ontouchstart' in window) {
        document.addEventListener('touchstart', function(e){}, true);
    }
}




// Scroll on click

const LinkForScroll = document.querySelectorAll('[data-goto]');
if (LinkForScroll.length > 0) {
    LinkForScroll.forEach(link => {
        link.addEventListener('click', clickOnLink);
    });

    function clickOnLink(e) {
        const link = e.target;
        if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
            const gotoBlock = document.querySelector(link.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
            if (navToggle.classList.contains('active')) {
                closeMenu(doUnlock = true);
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

// MENU

const navToggle = document.getElementById('nav-toggle');
const sidebarMenu = document.getElementById('sidebar-menu');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 450;


function openMenu() {
	if (unlock) {
		navToggle.classList.toggle('active');
		sidebarMenu.classList.toggle('active');
		wrapper.classList.toggle('active');

		if (sidebarMenu.classList.contains('active')) {
			bodyLock();
		} else {
			bodyUnLock();
		}
	}
}

function closeMenu(doUnlock = true) {
	if (unlock) {
		navToggle.classList.remove('active');
		sidebarMenu.classList.remove('active');
		wrapper.classList.remove('active');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

if (navToggle) {
    navToggle.addEventListener('click', function(e) {
        openMenu();
    })
}

document.addEventListener('click', function(e) {
	if(!e.target.matches('.nav-toggle, .nav-toggle *, .sidebar-menu, .sidebar-menu *')) {
		closeMenu();
	}
})


function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

    unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

    unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}