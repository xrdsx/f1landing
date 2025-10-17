function updateCountdown() {
    // 🚨 NOWA DATA: 12 października 2025, godz. 15:00
    const targetDate = new Date('2025-10-19T15:00:00').getTime();
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

 const race3Full = [
        ["1", "Damian PEVOR Kozioł", "Williams", "1", "2", "1:08.029", "42:18.626", "", "25"],
        ["2", "Maciej ZONY Zoniuk", "Kick Sauber", "2", "2", "1:08.442", "+23.861", "", "18"],
        ["3", "Dominik MOKRYSUCHAR Stokłosa", "Kick Sauber", "9", "2", "1:08.267", "+31.324", "", "15"],
        ["4", "Dawid DZINOLD Rzeźnik", "Haas", "4", "2", "1:08.303", "+39.108", "", "12"],
        ["5", "Jakub JAPCZAN Piotrowicz", "Alpine", "7", "2", "1:08.538", "+41.167", "", "10"],
        ["6", "Jakub MERGHANI Elsadig Rokicki", "Ferrari", "6", "2", "1:08.847", "+46.870", "+3s", "8"],
        ["7", "Tomasz TOM223 Richter", "Red Bull Racing", "8", "2", "1:08.120", "+47.773", "", "6"],
        ["8", "Sergiusz NITRO Górski (kierowca dnia)", "Williams", "5", "2", "1:08.030", "+48.842", "+20s", "4"],
        ["9", "Dawid TAKU Czajkowski", "McLaren", "11", "2", "1:08.846", "+1:03.554", "", "2"],
        ["10", "Sebastian NEEX Trela", "Racing Bulls", "12", "2", "1:08.636", "+1 okr.", "", "1"],
        ["11", "Łukasz TUSZOL Tuszyński", "Ferrari", "13", "3", "1:09.430", "+2 okr.", "", "0"],
        ["12", "Mateusz PAGO Pągowski", "Red Bull Racing", "14", "3", "1:08.669", "+2 okr.", "", "0"],
        ["13", "Maciej WŁODAR Włodarski", "Alpine", "15", "4", "1:10.167", "+2 okr.", "", "0"],
        ["14", "Filip PARIS Kulon", "Mercedes", "17", "2", "1:12.141", "+3 okr.", "+5s", "0"],
        ["15", "Rafał MARIO Banasiak", "Mercedes", "18", "3", "1:12.079", "+4 okr.", "", "0"],
        ["-", "Dawid MAJSZI Majchrzak", "McLaren", "16", "4", "1:12.780", "DNF", "", "0"],
        ["-", "Kamil DEMONZ Amrah", "Aston Martin Aramco", "3", "2", "1:08.358", "DNF", "", "0"],
        ["-", "Patryk PYKA Pyka", "Racing Bulls", "10", "1", "1:10.055", "DNF", "", "0"],
        ["-", "Patryk LUKISTEVE Czopur", "Haas", "-", "-", "-", "DNS", "", "0"],
        ["-", "Piotr IZAK Skowyrski", "Aston Martin Aramco", "-", "-", "-", "DNS", "", "0"]
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
    const raceInfoNote = document.querySelector(".race-info-note");
    const resultsTableHead = resultsContainer.querySelector("thead tr");

    // 🧩 Dobierz dane dla odpowiedniego wyścigu
    let raceResults = null;
    if (idx === 0) raceResults = race1Results;
    else if (idx === 1) raceResults = race2Results;
    else if (idx === 2) raceResults = race3Full; // ✅ poprawne źródło danych

    if (raceResults) {
      // 🧹 Wyczyść poprzednie dane
      resultsBody.innerHTML = "";

      const isRace3 = idx === 2;

      // ✏️ Nagłówki kolumn – różne dla wyścigu 3
      resultsTableHead.innerHTML = isRace3
        ? `
          <th>Pozycja</th>
          <th>Kierowca</th>
          <th>Zespół</th>
          <th>P.Start</th>
          <th>PitStop</th>
          <th>Best Lap</th>
          <th>Czas</th>
          <th>Kary</th>
          <th>Punkty</th>
        `
        : `
          <th>Pozycja</th>
          <th>Kierowca</th>
          <th>Zespół</th>
          <th>P.Start</th>
          <th>PitStop</th>
          <th>Best Lap</th>
          <th>Punkty</th>
        `;

      // 🏁 Generowanie wierszy
      resultsBody.innerHTML = raceResults
        .map((r, i) => {
          let cls = "";
          if (i === 0) cls = "gold";
          else if (i === 1) cls = "silver";
          else if (i === 2) cls = "bronze";

          // 🚗 Kierowca dnia
          let driverName = r[1];
          if (driverName.includes("(kierowca dnia)")) {
            cls += " driver-of-day";
            driverName = driverName.replace(
              "(kierowca dnia)",
              `<span class="kierowca-dnia-badge">Kierowca dnia</span>`
            );
          }

          // 🔢 Wiersz dla wyścigu 3 (pełne kolumny)
          if (isRace3) {
            const [pos, , team, start, pit, best, time, penalty, points] = r;
            return `
              <tr class="${cls}">
                <td>${pos}</td>
                <td>${driverName}</td>
                <td>${team}</td>
                <td>${start}</td>
                <td>${pit}</td>
                <td>${best}</td>
                <td>${time}</td>
                <td>${penalty || "-"}</td>
                <td>${points}</td>
              </tr>
            `;
          }

          // 🔢 Wiersz dla wyścigów 1 i 2
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

      // ⚠️ Komunikat o testowym wyścigu
      if (card.dataset.type === "test") {
        raceInfoNote.style.display = "block";
        raceInfoNote.textContent = "⚠️ Ta punktacja nie zalicza się do klasyfikacji.";
      } else {
        raceInfoNote.style.display = "none";
      }

      resultsContainer.style.display = "block";
    } else {
      resultsContainer.style.display = "none";
    }

    raceModal.style.display = "flex";
  });
});

// 🏁 Zamykanie modala
closeRaceModal.addEventListener("click", () => {
  raceModal.style.display = "none";
});
raceModal.addEventListener("click", (e) => {
  if (e.target === raceModal) {
    raceModal.style.display = "none";
  }
});
