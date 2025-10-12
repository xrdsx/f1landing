function updateCountdown() {
    // 🚨 NOWA DATA: 12 października 2025, godz. 15:00
    const targetDate = new Date('2025-10-12T18:00:00').getTime();
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

const race2Results = [
  ["1", "Damian PEVOR Kozioł", "Williams", "1", "1", "1:27.369", "25"],
  ["2", "Tomasz TOM223 Richter", "Redbull Racing", "4", "1", "1:29.138", "18"],
  ["3", "Jakub JAPCZAN Piotrowicz", "Alpine", "5", "3", "1:28.216", "15"],
  ["4", "Dawid Taku Czajkowski (kierowca dnia)", "McLaren", "6", "1", "1:30.388", "12"],
  ["5", "Dawid DZINOLD Rzeźnik", "Haas", "2", "1", "1:28.490", "10"],
  ["6", "Kamil DEMONZ Amrah", "Aston Martin", "14", "1", "1:29.439", "8"],
  ["7", "Sergiusz NITRO Górski", "Williams", "12", "1", "1:28.158", "6"],
  ["8", "Sebastian NEEX Trela", "Racing Bulls", "7", "1", "1:30.671", "4"],
  ["9", "Patryk LukiSteve Czopur", "Haas", "10", "1", "1:32.709", "2"],
  ["10", "Patryk PYKA Pyka", "Racing Bulls", "9", "1", "1:30.284", "1"],
  ["11", "Dominik MOKRYSUCHAR Stokłosa", "Ferrari", "3", "1", "1:28.158", "0"],
  ["12", "Filip PARIS Kulon", "Mercedes", "11", "1", "1:33.690", "0"],
  ["13", "Maciej WŁODAR Włodarski", "Alpine", "13", "1", "1:31.744", "0"],
  ["14", "Dawid MAJSZI Majchrzak", "McLaren", "15", "0", "1:39.719", "0"],
  ["15", "Mateusz PAGO Pągowski", "Redbull Racing", "8", "dsq", "0", "0"]
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

    // przypisanie wyników do odpowiedniego wyścigu
    let raceResults = null;
    if (idx === 0) raceResults = race1Results;
    else if (idx === 1) raceResults = race2Results;

    if (raceResults) {
      resultsBody.innerHTML = raceResults
        .map((r, i) => {
          let cls = "";
          if (i === 0) cls = "gold";
          else if (i === 1) cls = "silver";
          else if (i === 2) cls = "bronze";

          let driverName = r[1];
          if (driverName.includes("(kierowca dnia)")) {
            cls += " driver-of-day";
            driverName = driverName.replace(
              "(kierowca dnia)",
              `<span class="kierowca-dnia-badge">Kierowca dnia</span>`
            );
          }

          return `
            <tr class="${cls}">
              <td>${r[0]}</td>
              <td>${driverName}</td>
              <td>${r[2]}</td>
              <td>${r[3]}</td>
              <td>${r[4]}</td>
              <td>${r[5]}</td>
              <td>${r[6]}</td>
            </tr>
          `;
        })
        .join("");

      resultsContainer.style.display = "block";
    } else {
      resultsContainer.style.display = "none";
    }

    raceModal.style.display = "flex";
  });
});
const race3Results = [
  ["1", "PEVOR", "WILLIAMS", "1", "2", "1:08.029", "25"],
  ["2", "ZONY", "KICK SAUBER", "2", "2", "1:08.442", "18"],
  ["3", "NITRO (kierowca dnia)", "WILLIAMS", "5", "2", "1:08.030", "15"],
  ["4", "MokrySuchar", "KICK SAUBER", "9", "2", "1:08.267", "12"],
  ["5", "DZINOLD", "HAAS", "4", "2", "1:08.303", "10"],
  ["6", "JAPCZAN", "ALPINE", "7", "2", "1:08.538", "8"],
  ["7", "MERGHANI", "FERRARI", "6", "2", "1:08.847", "6"],
  ["8", "TOM", "REDBULL RACING", "8", "2", "1:08.120", "4"],
  ["9", "TAKU", "MCLAREN", "11", "2", "1:08.846", "2"],
  ["10", "NEEX", "RACING BULLS", "12", "2", "1:08.636", "1"],
  ["11", "TUSZOL", "FERRARI", "13", "3", "1:09.430", "0"],
  ["12", "PAGO", "REDBULL RACING", "14", "3", "1:08.669", "0"],
  ["13", "WLODAR", "ALPINE", "15", "4", "1:10.167", "0"],
  ["14", "PARIS", "MERCEDES", "17", "2", "1:12.141", "0"],
  ["15", "MARIO", "MERCEDES", "18", "3", "1:12.079", "0"],
  ["16", "MAJSZI", "MCLAREN", "16", "4", "1:12.780", "0"],
  ["17", "DEMONZ", "ASTON MARTIN", "3", "2", "1:08.358", "0"],
  ["18", "PYKA", "RACING BULLS", "10", "1", "1:10.055", "0"]
];

// === AKTUALIZACJA OBSŁUGI MODALA ===
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
    const raceInfoNote = document.querySelector(".race-info-note");

    // 🔢 przypisanie wyników do odpowiedniego wyścigu
    let raceResults = null;
    if (idx === 0) raceResults = race1Results;
    else if (idx === 1) raceResults = race2Results;
    else if (idx === 2) raceResults = race3Results;

    if (raceResults) {
      resultsBody.innerHTML = raceResults
        .map((r, i) => {
          let cls = "";
          if (i === 0) cls = "gold";
          else if (i === 1) cls = "silver";
          else if (i === 2) cls = "bronze";

          let driverName = r[1];
          if (driverName.includes("(kierowca dnia)")) {
            cls += " driver-of-day";
            driverName = driverName.replace(
              "(kierowca dnia)",
              `<span class="kierowca-dnia-badge">Kierowca dnia</span>`
            );
          }

          return `
            <tr class="${cls}">
              <td>${r[0]}</td>
              <td>${driverName}</td>
              <td>${r[2]}</td>
              <td>${r[3]}</td>
              <td>${r[4]}</td>
              <td>${r[5]}</td>
              <td>${r[6]}</td>
            </tr>
          `;
        })
        .join("");

      // ✅ Zmieniamy komunikat dla GP AUSTRIA #1
      if (idx === 2) {
        raceInfoNote.innerHTML = `
          <div class="penalty-warning">
            🚨 Pozycje mogą się zmienić po uwzględnieniu kar!
          </div>
        `;
      } else {
        raceInfoNote.innerHTML = `
          ⚠️ Ta punktacja nie zalicza się do klasyfikacji.
        `;
      }

      resultsContainer.style.display = "block";
    } else {
      resultsContainer.style.display = "none";
    }

    raceModal.style.display = "flex";
  });
});


// === STYL ALERTU ===
const style = document.createElement("style");
style.textContent = `
  .race-info-note .penalty-warning {
    background: linear-gradient(90deg, rgba(255, 0, 0, 0.25) 0%, rgba(120, 0, 0, 0.6) 100%);
    border: 2px solid #ff0000;
    color: #ffffff !important;
    font-weight: 800;
    text-align: center;
    padding: 14px 18px;
    border-radius: 10px;
    margin-top: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 0 25px rgba(255, 0, 0, 0.6);
    animation: pulseAlert 1.5s infinite ease-in-out;
  }

  @keyframes pulseAlert {
    0%, 100% {
      box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 40px rgba(255, 0, 0, 1);
      transform: scale(1.03);
    }
  }
`;
document.head.appendChild(style);

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
