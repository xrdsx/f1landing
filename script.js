function updateCountdown() {
    // 🚨 NOWA DATA: 12 października 2025, godz. 15:00
    const targetDate = new Date('2025-11-09T18:00:00').getTime();
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


const raceAustria = [
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
  ["-", "Kamil DEMONZ Amrah", "Aston Martin", "3", "2", "1:08.358", "DNF", "", "0"],
  ["-", "Patryk PYKA Pyka", "Racing Bulls", "10", "1", "1:10.055", "DSQ", "", "0"],
  ["-", "Patryk LUKISTEVE Czopur", "Haas", "-", "-", "-", "DNS", "", "0"],
  ["-", "Piotr IZAK Skowyrski", "Aston Martin", "-", "-", "-", "DNS", "", "0"]
];

// === GRAND PRIX #2 – ABU DHABI ===
const raceAbuDhabi = [
  ["1", "Damian PEVOR Kozioł", "Williams", "1", "2", "1:27.376", "43:32.728", "", "25"],
  ["2", "Jakub JAPCZAN Piotrowicz", "Alpine", "2", "1", "1:28.400", "+30.414", "", "18"],
  ["3", "Sergiusz NITRO Górski", "Williams", "5", "2", "1:27.726", "+32.675", "+6s", "15"],
  ["4", "Dawid DZINOLD Rzeźnik", "Haas", "8", "2", "1:28.098", "+38.675", "", "12"],
  ["5", "Dawid TAKU Czajkowski", "McLaren", "9", "1", "1:28.483", "+39.024", "", "10"],
  ["6", "Jakub MERGHANI Elsadig Rokicki", "Ferrari", "6", "2", "1:27.874", "+46.548", "+3s", "8"],
  ["7", "Tomasz TOM223 Richter", "Red Bull Racing", "4", "2", "1:27.796", "+1:14.713", "+5s", "6"],
  ["8", "Maciej ZONY Zoniuk", "Kick Sauber", "3", "2", "1:27.955", "+1:15.959", "", "4"],
  ["9", "Mateusz PAGO Pągowski", "Red Bull Racing", "10", "1", "1:29.499", "+1:21.115", "", "2"],
  ["10", "Sebastian NEEX Trela", "Racing Bulls", "7", "2", "1:28.805", "+1 okr.", "", "1"],
  ["11", "Maciej WŁODAR Włodarski", "Alpine", "15", "2", "1:30.342", "+1 okr.", "", "0"],
  ["12", "Patryk LUKISTEVE Czopur", "Haas", "13", "2", "1:30.427", "+1 okr.", "", "0"],
  ["13", "Patryk PYKA Pyka", "Racing Bulls", "11", "3", "1:30.018", "+1 okr.", "", "0"],
  ["14", "Filip PARIS Kulon", "Mercedes", "14", "2", "1:32.734", "+2 okr.", "", "0"],
  ["15", "Rafał MARIO Banasiak", "Mercedes", "17", "2", "1:34.850", "+2 okr.", "+8s", "0"],
  ["-", "Dawid MAJSZI Majchrzak", "McLaren", "16", "1", "1:36.031", "DNF", "", "0"],
  ["-", "Łukasz TUSZOL Tuszyński", "Ferrari", "12", "1", "1:30.796", "DSQ", "", "0"],
  ["-", "Dominik MOKRYSUCHAR Stokłosa", "Kick Sauber", "-", "-", "-", "DNS", "", "0"],
  ["-", "Kamil DEMONZ Amrah", "Aston Martin Aramco", "-", "-", "-", "DNS", "", "0"],
  ["-", "Piotr IZAK Skowyrski", "Aston Martin Aramco", "-", "-", "-", "DNS", "", "0"]
];
const raceBelgium = [
  ["1", "Damian PEVOR Kozioł", "Williams", "1", "1", "1:47.828", "43:35.506", "+5s", "25"],
  ["2", "Dawid DZINOLD Rzeźnik", "Haas", "3", "1", "1:47.658", "+7.282", "", "18"],
  ["3", "Jakub JAPCZAN Piotrowicz", "Alpine", "5", "1", "1:49.126", "+9.876", "", "15"],
  ["4", "Sergiusz NITRO Górski", "Williams", "0", "1", "1:47.254", "+11.252", "", "12"],
  ["5", "Sebastian NEEX Trela", "Racing Bulls", "2", "2", "1:47.274", "+17.483", "", "10"],
  ["6", "Jakub MERGHANI Elsadig Rokicki", "Ferrari", "4", "2", "1:48.925", "+32.649", "", "8"],
  ["7", "Maciej ZONY Zoniuk", "Kick Sauber", "7", "2", "1:48.361", "+37.431", "", "6"],
  ["8", "Tomasz TOM223 Richter", "Red Bull Racing", "6", "2", "1:47.244", "+39.753", "", "4"],
  ["9", "Dominik MOKRYSUCHAR Stokłosa", "Kick Sauber", "8", "3", "1:48.881", "+1:17.522", "+15s", "2"],
  ["10", "Mateusz PAGO Pągowski", "Red Bull Racing", "10", "1", "1:51.938", "+1:44.025", "+19s", "1"],
  ["11", "Maciej WŁODAR Włodarski", "Alpine", "11", "2", "1:49.448", "+1 lap", "+5s", "0"],
  ["12", "Dawid TAKU Czajkowski", "McLaren", "9", "4", "1:48.248", "+1 lap", "+9s", "0"],
  ["13", "Łukasz TUSZOL Tuszyński", "Ferrari", "12", "2", "1:51.123", "+1 lap", "+23s", "0"],
  ["14", "Rafał MARIO Banasiak", "Mercedes", "13", "2", "1:56.287", "+1 lap", "", "0"],
  ["15", "Dawid MAJSZI Majchrzak", "McLaren", "14", "1", "2:00.775", "+1 lap", "+3s", "0"],
  ["-", "Patryk LUKISTEVE Czopur", "Haas", "15", "0", "2:04.235", "DNF", "", "0"],
  ["-", "Patryk PYKA Pyka", "Racing Bulls", "0", "-", "-", "DNS", "", "0"],
  ["-", "Filip PARIS Kulon", "Mercedes", "0", "-", "-", "DNS", "", "0"],
  ["-", "Kamil DEMONZ Amrah", "Aston Martin Aramco", "0", "-", "-", "DNS", "", "0"],
  ["-", "Piotr IZAK Skowyrski", "Aston Martin Aramco", "0", "-", "-", "DNS", "", "0"]
];

// === OBSŁUGA KLIKNIĘCIA W KARTĘ WYŚCIGU ===
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
    const resultsTableHead = resultsContainer.querySelector("thead tr");

    // 🧩 Dane wyścigów
    let raceResults = null;
    if (idx === 0) raceResults = raceAustria;
    else if (idx === 1) raceResults = raceAbuDhabi;
    else if (idx === 2) raceResults = raceBelgium; // ← BELGIA

    if (raceResults) {
      resultsBody.innerHTML = "";
      resultsTableHead.innerHTML = `
        <th>Pozycja</th>
        <th>Kierowca</th>
        <th>Zespół</th>
        <th>P.Start</th>
        <th>PitStop</th>
        <th>Best Lap</th>
        <th>Czas</th>
        <th>Kary</th>
        <th>Punkty</th>
      `;

      // 🏁 Renderuj wyniki
      resultsBody.innerHTML = raceResults
        .map((r, i) => {
          const [pos, rawDriver, team, start, pit, best, time, penalty, points] = r;

          // 🥇 podium kolor
          let cls = i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : "";

          // 🏆 Kierowca dnia – JEDYNY taki zapisujesz w danych (Nitro w Austrii)
          let driver = rawDriver;
          let driverOfDay = false;
          if (driver.toLowerCase().includes("(kierowca dnia)")) {
            driverOfDay = true;
            driver = driver.replace(/\(kierowca dnia\)/gi, "").trim();
            cls += " driver-of-day";
          }

          return `
            <tr class="${cls.trim()}">
              <td>${pos}</td>
              <td>${driver}${driverOfDay ? '<span class="kierowca-dnia-badge">Kierowca dnia</span>' : ""}</td>
              <td>${team || "-"}</td>
              <td>${start}</td>
              <td>${pit}</td>
              <td>${best}</td>
              <td>${time}</td>
              <td>${penalty || "-"}</td>
              <td>${points}</td>
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

// 🏁 Zamykanie modala
closeRaceModal.addEventListener("click", () => {
  raceModal.style.display = "none";
});
raceModal.addEventListener("click", (e) => {
  if (e.target === raceModal) raceModal.style.display = "none";
});

