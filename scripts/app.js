const circle = document.querySelector(".circle_bg_shape");
const headingTop = document.querySelector(".top_text_container .heading");
const cta = document.querySelectorAll("body .cta_arrow");
const brandsSection = document.querySelector(".brands_section_container");
const topSection = document.querySelector(".top_banner_section_container");
const locationSection = document.querySelector(".location_section_container");
const brandsBoxes = document.querySelectorAll(".brands_boxes_container .box");
const brandsContainer = document.querySelector(".brands_boxes_container");
const brandsHeading = document.querySelector(".brands_heading");
const brandsHeadingDescription = document.querySelector(
  ".brands_text_container .heading_description"
);
const brandsCta = document.querySelector(".brands_cta");
const brandsCta2 = document.querySelector(".brands_cta_2");
const circleBrands = document.querySelector(".circle_bg_shape_white");
const brandInfoContainer = document.querySelector(
  ".brand_info_details_container"
);
const locationSVG = document.querySelector(
  ".location_icon_container #location"
);
const floorSVG = document.querySelector(".location_icon_container #floor");
const streetNames = document.querySelectorAll(
  ".location_background_map .street"
);
const galleryNavigationSection = document.querySelector(
  ".gallery_navigation_container"
);
const galleryNavigationBoxes = document.querySelectorAll(
  ".gallery_navigation_container .gallery_navigation_box"
);
const galleryNavSVG = document.querySelectorAll(".gallery_navigation_box svg");
const galleryNavName = document.querySelectorAll(
  ".gallery_navigation_box .box_name"
);
const mobile = document.querySelector(".hand_phone_container");
const socialSection = document.querySelector(".social_section_container");

const galleryContentSection = document.querySelector(
  ".gallery_content_container"
);
const brandMobiles = document.querySelectorAll(".glide .glide__slide img");
const track = document.querySelector(".glide__track");
const widget1 = document.querySelector(".widget1");
const widget2 = document.querySelector(".widget2");

const offerSection = document.querySelector(".offer_section_container");
const offerHeadline = document.querySelector(".offer_text_container .heading");
const offerDescription = document.querySelector(
  ".offer_text_container .heading_description"
);
const offerContent = document.querySelector(".offer_content_container");

const galleryNavigatioName = document.querySelector(
  ".gallery_heading .heading"
);
const headingdescription = document.querySelector(
  ".gallery_heading .heading_description"
);
const gallery = document.querySelector(".gallery_navigation");

const mediaMax767 = window.matchMedia("(max-width: 767px)");

const mediaMax992 = window.matchMedia(
  "(min-width: 768px) and (max-width: 992px)"
);

const mediaMax1200 = window.matchMedia(
  "(min-width: 993px) and (max-width: 1200px)"
);

const mediaMin1201 = window.matchMedia("(min-width: 1201px)");

// nav
// to jak i funkcję do tego możecie wywalić bo dodałem ją aby odwzorować animację chowania się topbaru
const nav = document.querySelector(".navigation_forpro_container");

window.onload = () => {
  circle.style.animation = "circleScale 2.5s ease-in-out both";
  headingTop.style.animation = "headingAppear 1.4s ease-in-out both 1s";
  cta[0].style.animation = "ctaAppear 1.4s ease-in-out both 2s";

  if (mediaMax767.matches) {
    cta[0].style.animation = "ctaCenterAppear 1.4s ease-in-out both 2s";
  }

  if (mediaMax992.matches) {
    cta[0].style.animation = "ctaCenterAppear 1.4s ease-in-out both 2s";

    brandsHeading.style.animation = `sectionAppear 1s ease-out both 0.2s`;
    brandsHeadingDescription.style.animation = `sectionAppear 1s ease-out both 0.3s`;
    brandsContainer.style.animation = `sectionAppear 0.8s ease-out both 0.4s`;

    brandsCta.style.animation = `ctaCenterAppear 1s ease-in-out both 1s`;
  }

  if (mediaMax1200.matches) {
    cta[0].style.animation = "ctaCenterAppear 1.4s ease-in-out both 2s";

    brandsHeading.style.animation = `sectionAppear 1s ease-out both 0.2s`;
    brandsHeadingDescription.style.animation = `sectionAppear 1s ease-out both 0.3s`;
    brandsContainer.style.animation = `sectionAppear 0.8s ease-out both 0.4s`;

    brandsCta.style.animation = `ctaCenterAppear 1s ease-in-out both 1s`;
  }
};

window.addEventListener("scroll", () => {
  if (topSection.getBoundingClientRect().top < 0) {
    nav.classList.add("nav-small");
  } else {
    nav.classList.remove("nav-small");
  }

  if (brandsSection.getBoundingClientRect().top < 200) {
    brandsHeading.style.animation = `sectionAppear 1s ease-out both 0.2s`;
    brandsHeadingDescription.style.animation = `sectionAppear 1s ease-out both 0.3s`;
    brandsContainer.style.animation = `sectionAppear 0.8s ease-out both 0.4s`;

    brandsCta.style.animation = `ctaCenterAppear 1s ease-in-out both 1s`;
  }

  if (mediaMax992.matches || mediaMax1200.matches) {
    if (brandsSection.getBoundingClientRect().top < 0) {
      locationSVG.style.animation = "bounce 0.6s ease-in alternate 8";
      floorSVG.style.animation = "floorAnim 0.6s ease-in alternate 8";
    }
  }

  if (locationSection.getBoundingClientRect().top < 100) {
    locationSVG.style.animation = "bounce 0.6s ease-in alternate 8";
    floorSVG.style.animation = "floorAnim 0.6s ease-in alternate 8";

    streetNames.forEach((street, index) => {
      street.style.animation = `showElement 0.6s ease-in both ${
        1.6 + 0.2 * index
      }s`;
    });
  }

  if (galleryNavigationSection.getBoundingClientRect().top < 200) {
    galleryNavigatioName.style.animation = `sectionAppear 1s ease-out both 0.2s`;
    headingdescription.style.animation = `sectionAppear 1s ease-out both 0.23s`;
    gallery.style.animation = `sectionAppear 0.8s ease-out both 0.4s`;
  }

  if (mediaMax992.matches || mediaMax1200.matches) {
    if (locationSection.getBoundingClientRect().top < 0) {
      galleryNavigatioName.style.animation = `sectionAppear 1s ease-out both 0.2s`;
      headingdescription.style.animation = `sectionAppear 1s ease-out both 0.23s`;
      gallery.style.animation = `sectionAppear 0.8s ease-out both 0.4s`;
    }
  }

  // parallax
  if (socialSection.getBoundingClientRect().top < 0) {
    let offset = socialSection.getBoundingClientRect().top * -2;

    mobile.style.transform = `translate3d(0px, ${offset * 0.2}px, 0px)`;

    setTimeout(() => {
      widget1.style.transform = `translate3d(0px, ${offset * 0.6}px, 0px)`;
    }, 50);
    setTimeout(() => {
      widget2.style.transform = `translate3d(0px, ${offset * 0.3}px, 0px)`;
    }, 150);

    if (mediaMax992.matches || mediaMax1200.matches) {
      offerHeadline.style.animation = `sectionAppear 1s ease-out both 0.2s`;
      offerDescription.style.animation = `sectionAppear 1s ease-out both 0.23s`;
      offerContent.style.animation = `sectionAppear 0.8s ease-out both 0.4s`;
    }
  }

  if (offerSection.getBoundingClientRect().top < 300) {
    offerHeadline.style.animation = `sectionAppear 1s ease-out both 0.2s`;
    offerDescription.style.animation = `sectionAppear 1s ease-out both 0.23s`;

    if (mediaMin1201.matches) {
      offerContent.style.animation = `sectionAppearCenter 0.8s ease-out both 0.4s`;
    }

    if (mediaMax767.matches) {
      offerContent.style.animation = `sectionAppear 0.8s ease-out both 0.4s`;
    }
  }
});

widget2.addEventListener("click", () => {
  window.open("https://instagram.com/forpro.pl");
});
widget2.addEventListener("mouseover", () => {
  widget2.style.cursor = "pointer";
});

// ------------------------------------------ LOGIC FOR SECTION WITH BRANDS ------------------------------------------

let brandList = []; // list for all brands
let chosenBrand = []; // list for brand currently chosen
let notChosenBrands = []; // list for brands not chosen that left to show

brandsBoxes.forEach((brand) => {
  // define all brands list from html attr data-name
  brandList.push(brand.dataset.name);

  brand.addEventListener("click", () => {
    const brandName = document.querySelector(
      ".brand_name_container .brand_name"
    );
    const brandDescription = document.querySelector(
      ".brand_name_container .brand_description"
    );
    const otherContainer = document.querySelector(".other_brands_container");
    const otherBrands = document.querySelectorAll(".other_brands .other");
    const brandsBtn = document.querySelector(".brand_name_container .button");
    const descriptionsList = [
      {
        brand: "Adidas",
        description:
          "Jako doświadczeni miłośnicy i pasjonaci sportu wiemy czego potrzebują nasi klienci, aby się rozwijać i realizować swoje sportowe pasje. Dzięki szerokiej dostępności najlepszych technologicznie produktów światowych marek jak i świetnej obsłudze skupiającej się wokół najróżniejszych potrzeb klienta, z dumą wspieramy nie tylko profesjonalnych zawodników, ale także wszystkich tych którzy rozpoczynają swoją przygodę ze sportem lub modą sportową.",
      },
      {
        brand: "Under Armour",
        description:
          "Dla naszych klientów ważna jest nie tylko jakość czy technologia produktu, ale również jego stylistyka i wygląd. Z dumą możemy o sobie powiedzieć, że „ubieramy profesjonalnie” nie tylko pod kątem potrzeb sportowych, ale również modowych Pewnie dlatego w Wilanowie blisko połowa naszej sprzedaży to sportowa odzież i obuwie przeznaczona do noszenia na co dzień.",
      },
      {
        brand: "On Running",
        description:
          "W 2020 roku podjęliśmy strategiczną decyzję o rozszerzeniu działalności i wprowadzaniu do oferty asortymentu innych marek. Na naszej stronie internetowej, www.forpro.pl, obok marki Nike, znajdziecie wybrane przez nas, najlepsze produkty wiodących marek jak: Adidas, Under Armour, Polar.",
      },
    ];

    setTimeout(() => {
      circleBrands.style.animation = "circleScale 1s ease-in-out both";
      brandInfoContainer.style.display = "flex";
      brandInfoContainer.style.animation =
        "showElement 1s ease-in-out both 0.5s";

      setTimeout(() => {
        if (mediaMax767.matches) {
          // brandsSection.style.height = "200vh";
          document.querySelector(".brands_text_container").style.display =
            "none";
          document.querySelector(".brands_boxes_container").style.display =
            "none";

          brandInfoContainer.style.position = "static";
        }
      }, 900);

      setTimeout(() => {
        brandName.style.animation = `sectionAppear 0.6s ease-out both 0.2s`;
        brandDescription.style.animation = `sectionAppear 0.6s ease-out both 0.23s`;
        brandsBtn.style.animation = `sectionAppear 0.6s ease-out both 0.46s`;
        otherContainer.style.animation = `sectionAppear 0.8s ease-out both 0.46s`;
      }, 500);
    }, 80);

    // brand that has been chosen
    chosenBrand.push(brand.dataset.name);

    // brands that hasn't beedn chosen
    for (let i = 0; i < brandList.length; i++) {
      if (brandList[i] === chosenBrand[0]) {
        notChosenBrands = brandList.filter((item) => item !== brandList[i]);
      }
    }

    // fill content with chosen brand name and descirption
    brandName.textContent = chosenBrand[0];
    for (let i = 0; i < descriptionsList.length; i++) {
      if (descriptionsList[i].brand === chosenBrand[0]) {
        brandDescription.textContent = descriptionsList[i].description;
      }
    }

    // fill carousel slider with mobile images for chosen brand
    brandMobiles.forEach((mobile, i) => {
      if (chosenBrand[0] === "Adidas") {
        mobile.setAttribute("src", `./assets/mobile/adidas-${i + 1}.png`);
      }
      if (chosenBrand[0] === "Under Armour") {
        mobile.setAttribute("src", `./assets/mobile/ua-${i + 1}.png`);
      }
      if (chosenBrand[0] === "On Running") {
        mobile.setAttribute("src", `./assets/mobile/on-${i + 1}.png`);
      }
    });

    otherBrands.forEach((other, num) => {
      // fill content for "Wybierz inną markę:"
      other.textContent = notChosenBrands[num];
      other.dataset.otherName = notChosenBrands[num];

      other.addEventListener("click", () => {
        // reset previous chosen brands
        chosenBrand = [];
        notChosenBrands = [];

        // set currently chosen brand from data-other-name html attribute
        chosenBrand.push(other.dataset.otherName);
        brandName.textContent = chosenBrand[0];

        // fill description content for currently chosen brand
        for (let i = 0; i < descriptionsList.length; i++) {
          if (descriptionsList[i].brand === chosenBrand[0]) {
            brandDescription.textContent = descriptionsList[i].description;
          }
        }

        // fill 'notChosenBrands' array with brands that left not chosen
        for (let i = 0; i < brandList.length; i++) {
          if (brandList[i] === chosenBrand[0]) {
            notChosenBrands = brandList.filter(
              (item) => item !== chosenBrand[0]
            );
          }
        }

        // fill content for "Wybierz inną markę:"
        otherBrands.forEach((item, i) => {
          item.textContent = notChosenBrands[i];
          item.dataset.otherName = notChosenBrands[i];
        });

        // fill carousel slider with mobile images for chosen brand
        brandMobiles.forEach((mobile, i) => {
          if (chosenBrand[0] === "Adidas") {
            mobile.setAttribute("src", `./assets/mobile/adidas-${i + 1}.png`);
          }
          if (chosenBrand[0] === "Under Armour") {
            mobile.setAttribute("src", `./assets/mobile/ua-${i + 1}.png`);
          }
          if (chosenBrand[0] === "On Running") {
            mobile.setAttribute("src", `./assets/mobile/on-${i + 1}.png`);
          }
        });
      });
    });
  });
});

// ------------------------------------------ CALL TO ACTION BUTTONS ANIMATION ------------------------------------------

// cta buttons animation & click
cta.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    item.children[0].style.opacity = "0.6";
    item.children[1].style.opacity = "0.6";
    item.children[0].style.transition = "0.6s ease-out";
    item.children[1].style.transition = "0.6s ease-out";
    item.children[1].style.animation = "ctaMouseover 0.6s ease-out both";
  });

  item.addEventListener("mouseout", () => {
    item.children[0].style.opacity = "1";
    item.children[1].style.opacity = "1";
    item.children[1].style.animation = "ctaMouseout 0.6s ease-out both";
  });

  item.addEventListener("click", () => {
    // 'zajrzyj do środka'
    if (index === 0) {
      window.scrollTo({
        left: 0,
        top: brandsSection.offsetTop - window.innerHeight * 0.1,
        behavior: "smooth",
      });

      if (mediaMax767.matches) {
        window.scrollTo({
          left: 0,
          top: brandsSection.offsetTop,
          behavior: "smooth",
        });
      }
    }

    // 'pokaż mi jak dojechać do sklepu'
    if (index === 1) {
      window.scrollTo({
        left: 0,
        top: locationSection.offsetTop,
        behavior: "smooth",
      });
    }

    // 'galeria zdjęć ze sklepu
    if (index === 2) {
      window.scrollTo({
        left: 0,
        top: galleryNavigationSection.offsetTop - window.innerHeight * 0.1,
        behavior: "smooth",
      });

      if (mediaMax767.matches) {
        window.scrollTo({
          left: 0,
          top: galleryNavigationSection.offsetTop,
          behavior: "smooth",
        });
      }
    }

    // 'odbierz darmowy prezent'
    if (index === 3) {
      window.scrollTo({
        left: 0,
        top: offerSection.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ------------------------------------------ BRANDS LOGOTYPES HOVER ANIMATION ------------------------------------------

const logos = [
  "adidas_dark.svg",
  "ua_dark.svg",
  "on_dark.svg",
  "adidas_wht.svg",
  "ua_wht.svg",
  "on_wht.svg",
];

brandsBoxes.forEach((box, index) => {
  box.addEventListener("mouseover", () => {
    box.children[0].setAttribute("src", `./assets/logos/${logos[index]}`);
  });
  box.addEventListener("mouseout", () => {
    box.children[0].setAttribute("src", `./assets/logos/${logos[index + 3]}`);
  });
});

galleryNavigationBoxes.forEach((box, index) => {
  box.addEventListener("mouseover", () => {
    galleryNavSVG[index].style.animation = "galleryNavOver 0.6s ease-out both";

    if (mediaMax767.matches) {
      galleryNavSVG[index].style.animation =
        "galleryNavOverPreventScale 0.6s ease-out both";
    }

    galleryNavName[index].style.opacity = "0.6";
    galleryNavName[index].style.transition = "0.6s ease-out";
  });
  box.addEventListener("mouseout", () => {
    galleryNavSVG[index].style.animation = "galleryNavOut 0.6s ease-out both";

    if (mediaMax767.matches) {
      galleryNavSVG[index].style.animation =
        "galleryNavOutPreventScale 0.6s ease-out both";
    }

    galleryNavName[index].style.opacity = "1";
  });
});

// ------------------------------------------ LOGIC FOR GALLERY SECTION ------------------------------------------
const galleryBoxes = document.querySelectorAll(
  ".gallery_navigation .gallery_navigation_box"
);
const galleryPhotos = document.querySelectorAll(".gallery_content_area img");
const galleryNone = document.querySelector(".gallery_no_photos");
const galleryArea = document.querySelector(".gallery_content_area");
const galleryImages = document.querySelectorAll(
  ".gallery_content_container img"
);

galleryBoxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    galleryContentSection.style.display = "flex";
    galleryArea.style.display = "grid";

    galleryImages.forEach((image, num) => {
      // 'wnetrze sklepu'
      if (index === 0) {
        image.setAttribute("src", `./assets/photos/inner/inner${num + 1}.jpg`);
      }

      // 'otoczenie'
      if (index === 1) {
        image.setAttribute(
          "src",
          `./assets/photos/outside/outer${num + 1}.jpg`
        );
      }

      // 'społeczność''
      if (index === 2) {
        image.setAttribute(
          "src",
          `./assets/photos/society/society${num + 1}.jpg`
        );
      }
    });

    window.scrollTo({
      left: 0,
      top: galleryContentSection.offsetTop,
      behavior: "smooth",
    });

    galleryPhotos.forEach((photo, index) => {
      photo.style.animation = `showElement 1s ease-out both ${
        0.4 + index * 0.1
      }s`;
    });
  });
});
