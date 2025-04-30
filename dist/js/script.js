// Hamburger line
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("header");

function stickyNavbar() {
  // Jika scroll lebih dari 100px, navbar akan jadi sticky
  if (window.pageYOffset > 100) {
    navbar.classList.add("sticky-navbar");
  } else {
    navbar.classList.remove("sticky-navbar");
  }
}


//wizard video
const openBtn = document.getElementById("openModal");
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeModal");
const iframe = document.getElementById("videoIframe");

openBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.remove("hidden"); // Tampilkan modal
});

closeBtn.addEventListener("click", function () {
  modal.classList.add("hidden"); // Sembunyikan modal
  iframe.src = iframe.src; // Stop video saat modal ditutup
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.add("hidden"); // Sembunyikan modal
    iframe.src = iframe.src; // Stop video saat modal ditutup
  }
});

//count day
document.addEventListener("DOMContentLoaded", function () {
  const firstMet = new Date("2024-04-13");
  const today = new Date();

  let years = today.getFullYear() - firstMet.getFullYear();
  let months = today.getMonth() - firstMet.getMonth();
  let days = today.getDate() - firstMet.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;
});

//count birthday
const birthday = new Date("2025-05-01T00:00:00");

// Fungsi untuk menghitung countdown
function getNextBirthday() {
  const today = new Date();
  let birthday = new Date("2025-05-01T00:00:00");

  // Jika ulang tahun sudah lewat tahun ini, set ulang tahun ke tahun berikutnya
  if (today > birthday) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

  return birthday;
}

// Fungsi untuk menghitung countdown
function updateCountdown() {
  const birthday = getNextBirthday();
  const now = new Date();
  const timeDiff = birthday - now;

  if (timeDiff <= 0) {
    document.getElementById("countdown").innerText = "Happy Birthday!";
    return;
  }

  // Hitung hari, jam, menit, dan detik
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Tampilkan countdown
  document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown setiap detik
setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();

// Function to change the main image when a thumbnail is clicked
function changeImage(thumbnail) {
  var mainImage = document.getElementById('main-image');
  mainImage.src = thumbnail.src;
  
  // Pertahankan styling yang konsisten
  mainImage.className = "max-w-full max-h-full object-contain";
}

//pesan
const openMessageBtn = document.getElementById("openMessage");
const messageModal = document.getElementById("messageModal");
const closeMessageBtn = document.getElementById("close-message");

openMessageBtn.addEventListener("click", function () {
  messageModal.classList.remove("hidden");  // Menampilkan modal
  setTimeout(() => {
    messageModal.classList.add("open");  // Menambahkan animasi setelah modal muncul
  }, 10);  // Sedikit delay agar animasi berjalan
});

closeMessageBtn.addEventListener("click", function () {
  messageModal.classList.remove("open");  // Menghapus animasi saat modal ditutup
  setTimeout(() => {
    messageModal.classList.add("hidden");  // Menyembunyikan modal setelah animasi selesai
  }, 500);  // Menunggu animasi selesai
});

//Tracker
const tracker = document.querySelector(".tracker");
document.body.addEventListener("mousemove", e => {
  tracker.style.left = `${e.clientX}px`;
  tracker.style.top = `${e.clientY}px`;
});