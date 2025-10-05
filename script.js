function updateCountdown() {
    // 🚨 NOWA DATA: 12 października 2025, godz. 15:00
    const targetDate = new Date('2025-10-12T15:00:00').getTime();
    const now = Date.now();
    const diff = targetDate - now;

    const el = (id) => document.getElementById(id);

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        el('days').textContent = String(days).padStart(3, '0');
        el('hours').textContent = String(hours).padStart(2, '0');
        el('minutes').textContent = String(minutes).padStart(2, '0');
        el('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        el('days').textContent = '000';
        el('hours').textContent = '00';
        el('minutes').textContent = '00';
        el('seconds').textContent = '00';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();


const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
mobileMenuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('active');
    mobileMenuBtn.textContent = open ? '✕' : '☰';
    mobileMenuBtn.setAttribute('aria-expanded', String(open));
});
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});


window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("rulesModal");
  const closeBtn = document.getElementById("closeRules");
  const rulesLink = document.querySelector('a[href="#regulamin"]');

  // otwieranie po kliknięciu w navbar
  if (rulesLink) {
    rulesLink.addEventListener("click", (e) => {
      e.preventDefault(); // blokuje scrollowanie do sekcji
      modal.style.display = "flex";
    });
  }

  // zamykanie X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // zamykanie klikając w tło
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

window.addEventListener("load", () => {
  const modal = document.getElementById("rulesModal");
  const closeBtn = document.getElementById("closeRules");

  // Jeśli adres URL zawiera hash #regulamin, otwórz modal
  if (window.location.hash === "#regulamin") {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // blokuje scroll w tle
  }

  // Po zamknięciu – usuń hash z adresu (żeby nie otworzyło ponownie po odświeżeniu)
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      history.replaceState(null, null, " ");
      document.body.style.overflow = "";
    });
  }

  // Kliknięcie poza modalem również usuwa hash
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      history.replaceState(null, null, " ");
      document.body.style.overflow = "";
    }
  });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

const slider = document.querySelector('.video-slider .slides');
const videos = document.querySelectorAll('.video-slider video');
const prevBtn = document.querySelector('.video-slider .prev');
const nextBtn = document.querySelector('.video-slider .next');
let index = 0;

function showSlide(i) {
    index = (i + videos.length) % videos.length;
    slider.style.transform = `translateX(${-index * 100}%)`;
    // zatrzymujemy inne filmy
    videos.forEach((v, idx) => { if (idx !== index) v.pause(); });
}



function updateRaceCountdowns() {
    document.querySelectorAll(".race-countdown[data-date]").forEach(cd => {
        const target = new Date(cd.dataset.date).getTime();
        const now = Date.now();
        const diff = target - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            cd.querySelector(".cd-days").textContent = String(days).padStart(3, "0");
            cd.querySelector(".cd-hours").textContent = String(hours).padStart(2, "0");
            cd.querySelector(".cd-minutes").textContent = String(minutes).padStart(2, "0");
            cd.querySelector(".cd-seconds").textContent = String(seconds).padStart(2, "0");
        } else {
            cd.innerHTML = "<span>00d 00h 00m 00s</span>";
        }
    });
}
setInterval(updateRaceCountdowns, 1000);
updateRaceCountdowns();



prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));


showSlide(index);
document.addEventListener("DOMContentLoaded", function () {
  // Sprawdź, czy adres URL kończy się na /klasyfikacje
  if (window.location.pathname.endsWith("/klasyfikacje")) {
    const section = document.getElementById("klasyfikacje");
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 600);
    }
  }
});

const floatingCar = document.getElementById("floatingCar");
const streamPopup = document.getElementById("streamPopup");
const closePopup = document.getElementById("closePopup");

floatingCar.addEventListener("click", () => {
    streamPopup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
    streamPopup.style.display = "none";
});

streamPopup.addEventListener("click", (e) => {
    if (e.target === streamPopup) {
        streamPopup.style.display = "none";
    }
});

const race1Results = [
    ["1", "Damian PEVOR Kozioł", "RedBull Racing", "1", "1", "1:07.781", "25"],
    ["2", "Dominik MOKRYSUCHAR Stokłosa", "KICK Sauber", "3", "1", "1:08.390", "18"],
    ["3", "Maciej ZONY Zoniuk (kierowca dnia)", "KICK Sauber", "14", "1", "1:08.540", "15"],
    ["4", "Kamil DEMONZ Amrah", "Haas", "6", "1", "1:08.902", "12"],
    ["5", "Jakub JAPCZAN Piotrowicz", "Racing Bulls", "4", "2", "1:08.846", "10"],
    ["6", "Jakub MERGHANI Elsadig Rokicki", "Ferrari", "5", "1", "1:09.812", "8"],
    ["7", "Dawid DZINOLD Rzeźnik", "Mercedes", "2", "1", "1:08.953", "6"],
    ["8", "Tomasz TOM223 Richter", "Racing Bulls", "12", "1", "1:08.857", "4"],
    ["9", "Sergiusz NITRO Górski", "Aston Martin", "7", "1", "1:09.842", "2"],
    ["10", "Patryk PYKA Pyka", "McLaren", "10", "1", "1:10.782", "1"],
    ["11", "Sebastian NEEX Trela", "Alpine", "11", "1", "1:11.660", "0"],
    ["12", "Mateusz PAGO Pągowski", "McLaren", "9", "1", "1:11.271", "0"],
    ["13", "Łukasz TUSZOL Tuszyński", "Haas", "8", "1", "1:10.739", "0"],
    ["14", "Maciej WŁODAR Włodarski", "RedBull Racing", "15", "1", "1:10.618", "0"],
    ["15", "Filip PARIS Kulon", "Aston Martin", "17", "1", "1:15.193", "0"],
    ["16", "Dawid MAJSZI Majchrzak", "Mercedes", "13", "1", "1:15.409", "0"],
    ["17", "Rafał MARIOSPZOO Banasiak", "Ferrari", "16", "1", "1:14.892", "0"]
];

document.querySelectorAll(".race-card").forEach((card, idx) => {
    card.addEventListener("click", () => {
        const name = card.querySelector(".race-name")?.textContent || "???";
        const loc = card.querySelector(".race-location")?.textContent || "???";
        const date = card.querySelector(".race-date")?.textContent || "???";

        modalRaceName.textContent = name;
        modalRaceLocation.textContent = loc;
        modalRaceDate.textContent = date;

        const resultsContainer = document.getElementById("raceResults");
        const resultsBody = document.getElementById("resultsBody");

        if (idx === 0) { // tylko 1. wyścig ma dane
            resultsBody.innerHTML = race1Results
                .map((r, i) => {
                    let cls = "";
                    if (i === 0) cls = "gold";
                    else if (i === 1) cls = "silver";
                    else if (i === 2) cls = "bronze";

                    // Kierowca dnia – sprawdzamy w nazwisku
                    let driverName = r[1];
                    if (driverName.includes("(kierowca dnia)")) {
                        cls += " driver-of-day";
                        driverName = driverName.replace(
                            "(kierowca dnia)",
                            `<span class="kierowca-dnia-badge">Kierowca dnia</span>`
                        );
                    }

                    // wstawiamy z poprawionym driverName
                    return `<tr class="${cls}">
      <td>${r[0]}</td>
      <td>${driverName}</td>
      <td>${r[2]}</td>
      <td>${r[3]}</td>
      <td>${r[4]}</td>
      <td>${r[5]}</td>
      <td>${r[6]}</td>
    </tr>`;
                })
                .join("");
            resultsContainer.style.display = "block";
        } else {
            resultsContainer.style.display = "none";
        }

        raceModal.style.display = "flex";
    });
});
const raceModal = document.getElementById("raceModal");
const closeRaceModal = document.getElementById("closeRaceModal");
const modalRaceName = document.getElementById("modalRaceName");
const modalRaceLocation = document.getElementById("modalRaceLocation");
const modalRaceDate = document.getElementById("modalRaceDate");

document.querySelectorAll(".race-card").forEach(card => {
    card.addEventListener("click", () => {
        const name = card.querySelector(".race-name")?.textContent || "???";
        const loc = card.querySelector(".race-location")?.textContent || "???";
        const date = card.querySelector(".race-date")?.textContent || "???";

        modalRaceName.textContent = name;
        modalRaceLocation.textContent = loc;
        modalRaceDate.textContent = date;

        raceModal.style.display = "flex";
    });
});

closeRaceModal.addEventListener("click", () => {
    raceModal.style.display = "none";
});

raceModal.addEventListener("click", (e) => {
    if (e.target === raceModal) {
        raceModal.style.display = "none";
    }
});
