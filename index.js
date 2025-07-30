
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const link = document.querySelector('.nav-link[href="#' + sectionId + '"]');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        if (link) link.parentElement.classList.add('active');
      }
    });
  });


  
  document.querySelectorAll('.skill-card').forEach(card => {
    const skillValue = card.getAttribute('data-skill');

    // أنشئ عنصر النسبة
    const skillLabel = document.createElement('div');
    skillLabel.classList.add('skill-label');
    skillLabel.textContent = skillValue;
    skillLabel.style.position = 'absolute';
    skillLabel.style.top = '10px';
    skillLabel.style.right = '10px';
    skillLabel.style.backgroundColor = '#00bfff';
    skillLabel.style.color = 'white';
    skillLabel.style.padding = '2px 6px';
    skillLabel.style.borderRadius = '4px';
    skillLabel.style.fontSize = '14px';
    skillLabel.style.opacity = '0';
    skillLabel.style.transition = 'opacity 0.3s ease';

    // ضع العنصر داخل الكارد
    card.style.position = 'relative';
    card.appendChild(skillLabel);

    // أحداث الظهور عند التمرير
    card.addEventListener('mouseenter', () => {
      skillLabel.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
      skillLabel.style.opacity = '0';
    });
  });




   // Navbar scroll effect: تغيير الخلفية عند التمرير
   const navbar = document.querySelector('.navbar');
   const navLinks = document.querySelectorAll('.nav-link');
 
   window.addEventListener('scroll', () => {
     if (window.scrollY > 50) {
       navbar.classList.add('scrolled');
     } else {
       navbar.classList.remove('scrolled');
     }
   });
 
   // تفعيل تمييز الرابط النشط أثناء التمرير
   const sections = document.querySelectorAll('section');
   window.addEventListener('scroll', () => {
     let current = '';
     sections.forEach((section) => {
       const sectionTop = section.offsetTop - 80;
       if (pageYOffset >= sectionTop) {
         current = section.getAttribute('id');
       }
     });
     navLinks.forEach((link) => {
       link.classList.remove('active');
       if (link.getAttribute('href') === '#' + current) {
         link.classList.add('active');
       }
     });
   });

   





   
   // Swiper slider for projects
   const swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });




  
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.view-demo-btn');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const imgSrc = this.getAttribute('data-img');
        modal.style.display = 'block';
        modalImg.src = imgSrc;
      });
    });

    closeBtn.onclick = function () {
      modal.style.display = 'none';
      modalImg.src = '';
    }

    window.onclick = function (e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        modalImg.src = '';
      }
    }
  });