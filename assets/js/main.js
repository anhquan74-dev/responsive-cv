const scrollBtn = document.querySelector(".scroll-top");
const lineElements = document.querySelectorAll(".block-group .horizontal-line");
const themeBtns = document.querySelectorAll(".theme-btn");
const bodyElement = document.getElementsByTagName("body")[0];
const menuBurgerBtn = document.querySelector(".menu span:nth-child(2)");
const menuList = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-list div");

// scroll button show/hide
const scrollTop = () => {
  console.log(this.scrollY);
  this.scrollY >= 560
    ? scrollBtn.classList.remove("d-none")
    : scrollBtn.classList.add("d-none");
};
window.addEventListener("scroll", scrollTop);

// hide line
if (window.innerWidth <= 1000) {
  console.log(window.innerWidth);
  lineElements.forEach((line) => {
    console.log(line);
    line.classList.add("d-none");
  });
}

// window resize event: show/hide line
window.addEventListener("resize", () => {
  console.log(window.innerWidth);
  if (window.innerWidth && window.innerWidth <= 1000) {
    lineElements.forEach((line) => {
      console.log(line);
      line.classList.add("d-none");
    });
    if (window.innerWidth > 854) {
      menuList.classList.add('d-none');
    } else {
      menuList.classList.remove('d-none');
    }
  } else {
    lineElements.forEach((line) => {
      console.log(line);
      line.classList.remove("d-none");
    });
  }
});

//  onclick event light/dark btn
themeBtns[0].addEventListener("click", () => {
  themeBtns[0].classList.toggle("d-none");
  themeBtns[1].classList.toggle("d-none");
  bodyElement.classList.toggle("dark-theme");
});

themeBtns[1].addEventListener("click", () => {
  themeBtns[1].classList.toggle("d-none");
  themeBtns[0].classList.toggle("d-none");
  bodyElement.classList.toggle("dark-theme");
});

// exportBtn.addEventListener("click", () => {
//   html2pdf().from(wrapperElement).save();
// });

// onclick event menu burger button: show/hide menu list
menuBurgerBtn.addEventListener("click", () => {
  menuList.classList.toggle("show-menu");
});

// onclick event menu item: show/hide menu list
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuList.classList.toggle("show-menu");
  });
});

// active-link
const sections = document.querySelectorAll("section[id]");
console.log(sections);
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  console.log(scrollY);
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    sectionId = current.getAttribute("id");
    let sectionTop = 0;
    sectionTop = current.offsetTop;
    if (sectionId !== 'home') {
      if (window.innerWidth > 600) {
        sectionTop = current.offsetTop + 120 + sections[0].offsetHeight;
      } else {
        sectionTop = current.offsetTop + sections[0].offsetHeight;
      }
    }
    console.log(sectionHeight, sectionTop, sectionId);
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document
        .querySelector(".menu-list div a[href*=" + sectionId + "]")
        .classList.add("active-link");
    }
    else {
      document
        .querySelector(".menu-list div a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
