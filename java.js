// Rastgele Görseller
const images = [];
for(let i=1; i<=50; i++) {
  images.push(`photos/${i}.jpeg`);
}

const randomImage = document.getElementById('random-image');
randomImage.src = images[Math.floor(Math.random() * images.length)];

// Elementler
const modal = document.getElementById('settings-modal');
const blurBg = document.getElementById('blur-bg');
const openSettingsBtn = document.getElementById('open-settings');
const closeSettingsBtn = document.getElementById('close-settings');
const languageSelect = document.getElementById('language-select');
const toggleDarkMode = document.getElementById('toggle-darkmode');
const settingsTitle = document.getElementById('settings-title');
const labelLanguage = document.getElementById('label-language');
const collectionContainer = document.getElementById('collection-container');
const collectionLink = document.getElementById('collection-link');
const cardsContainer = document.getElementById('cards-container');
const playLink = document.getElementById('play-link');
const openSettingsText = openSettingsBtn.textContent;

// Sabitler
const CARDS_PER_PAGE = 10;
const TOTAL_CARDS = 200;  // 650 sayfa * 20 kart
const TOTAL_PAGES = Math.ceil(TOTAL_CARDS / CARDS_PER_PAGE);

// Sayfalama konteyneri oluştur
let pagination = document.getElementById('pagination');
if(!pagination) {
  pagination = document.createElement('div');
  pagination.id = 'pagination';
  pagination.style.textAlign = "center";
  pagination.style.marginTop = "20px";
  collectionContainer.appendChild(pagination);
}

let currentPage = 1;

// Kartları renderla
function renderPage(page) {
  cardsContainer.innerHTML = "";

  let startIndex = (page -1) * CARDS_PER_PAGE + 1;
  let endIndex = Math.min(page * CARDS_PER_PAGE, TOTAL_CARDS);

  for(let i = startIndex; i <= endIndex; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = `Kart ${i}`;
    cardsContainer.appendChild(card);
  }

  renderPagination(page);
}

// Sayfalama butonları oluştur
function renderPagination(page) {
  pagination.innerHTML = "";

  const maxButtons = 9;
  let startPage = Math.max(1, page - 2);
  let endPage = Math.min(TOTAL_PAGES, page + 2);

  if(page <= 3) {
    endPage = Math.min(TOTAL_PAGES, maxButtons);
  } else if(page > TOTAL_PAGES - 3) {
    startPage = Math.max(1, TOTAL_PAGES - maxButtons +1);
  }

  // << 10 sayfa geri
  let btnBack10 = document.createElement("button");
  btnBack10.textContent = "<<";
  stylePageButton(btnBack10);
  btnBack10.style.cursor = page > 10 ? "pointer" : "not-allowed";
  btnBack10.disabled = page <= 10;
  btnBack10.addEventListener("click", () => {
    if(page > 10) {
      currentPage = page - 10;
      renderPage(currentPage);
      collectionContainer.scrollTop = 0;
    }
  });
  pagination.appendChild(btnBack10);

  // < 1 sayfa geri
  let btnBack1 = document.createElement("button");
  btnBack1.textContent = "<";
  stylePageButton(btnBack1);
  btnBack1.style.cursor = page > 1 ? "pointer" : "not-allowed";
  btnBack1.disabled = page <= 1;
  btnBack1.addEventListener("click", () => {
    if(page > 1) {
      currentPage = page - 1;
      renderPage(currentPage);
      collectionContainer.scrollTop = 0;
    }
  });
  pagination.appendChild(btnBack1);

  // Sayfa numaraları
  if(startPage > 1) {
    pagination.appendChild(createPageButton(1));
    if(startPage > 2) {
      let dots = document.createElement("span");
      dots.textContent = "...";
      dots.style.margin = "0 8px";
      pagination.appendChild(dots);
    }
  }

  for(let i = startPage; i <= endPage; i++) {
    let btn = createPageButton(i);
    if(i === page) {
      btn.style.fontWeight = "bold";
      btn.style.textDecoration = "underline";
      btn.style.cursor = "default";
      btn.disabled = true;
    }
    pagination.appendChild(btn);
  }

  if(endPage < TOTAL_PAGES) {
    if(endPage < TOTAL_PAGES - 1) {
      let dots = document.createElement("span");
      dots.textContent = "...";
      dots.style.margin = "0 8px";
      pagination.appendChild(dots);
    }
    pagination.appendChild(createPageButton(TOTAL_PAGES));
  }

  // > 1 sayfa ileri
  let btnForward1 = document.createElement("button");
  btnForward1.textContent = ">";
  stylePageButton(btnForward1);
  btnForward1.style.cursor = page < TOTAL_PAGES ? "pointer" : "not-allowed";
  btnForward1.disabled = page >= TOTAL_PAGES;
  btnForward1.addEventListener("click", () => {
    if(page < TOTAL_PAGES) {
      currentPage = page + 1;
      renderPage(currentPage);
      collectionContainer.scrollTop = 0;
    }
  });
  pagination.appendChild(btnForward1);

  // >> 10 sayfa ileri
  let btnForward10 = document.createElement("button");
  btnForward10.textContent = ">>";
  stylePageButton(btnForward10);
  btnForward10.style.cursor = page <= TOTAL_PAGES - 10 ? "pointer" : "not-allowed";
  btnForward10.disabled = page > TOTAL_PAGES - 10;
  btnForward10.addEventListener("click", () => {
    if(page <= TOTAL_PAGES - 10) {
      currentPage = page + 10;
      renderPage(currentPage);
      collectionContainer.scrollTop = 0;
    }
  });
  pagination.appendChild(btnForward10);
}

function stylePageButton(btn) {
  btn.style.margin = "0 4px";
  btn.style.padding = "5px 10px";
  btn.style.border = "1.5px solid #FF6F00";
  btn.style.borderRadius = "6px";
  btn.style.background = "transparent";
  btn.style.color = "#FF6F00";
  btn.style.fontWeight = "bold";
  btn.style.cursor = "pointer";
}

function createPageButton(pageNum) {
  let btn = document.createElement("button");
  btn.textContent = pageNum;
  stylePageButton(btn);
  if (pageNum === currentPage) {
    btn.style.fontWeight = "bold";
    btn.style.textDecoration = "underline";
    btn.style.cursor = "default";
    btn.disabled = true;
  }
  btn.addEventListener("click", () => {
    if(pageNum !== currentPage) {
      currentPage = pageNum;
      renderPage(currentPage);
      collectionContainer.scrollTop = 0;
    }
  });
  return btn;
}

// ✅ Güncellenen kısım: Koleksiyon göster/gizle
collectionLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (collectionContainer.classList.contains('hidden')) {
    collectionContainer.classList.remove('hidden');
    document.getElementById('random-image-container').style.display = 'none';

    // Kart ve sayfalama alanlarını temizle
    cardsContainer.innerHTML = "";
    pagination.innerHTML = "";

    // Coming Soon mesajı ekle
    const comingSoonMsg = document.createElement('div');
    comingSoonMsg.textContent = 'Coming Soon...';
    comingSoonMsg.style.fontSize = '24px';
    comingSoonMsg.style.fontWeight = 'bold';
    comingSoonMsg.style.textAlign = 'center';
    comingSoonMsg.style.marginTop = '50px';
    comingSoonMsg.id = 'coming-soon';
    cardsContainer.appendChild(comingSoonMsg);

  } else {
    collectionContainer.classList.add('hidden');
    document.getElementById('random-image-container').style.display = 'block';
    cardsContainer.innerHTML = "";
    pagination.innerHTML = "";
  }
});

// Ayarlar aç/kapa
openSettingsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('hidden');
  blurBg.classList.add('active');
});

closeSettingsBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  blurBg.classList.remove('active');
});

blurBg.addEventListener('click', () => {
  modal.classList.add('hidden');
  blurBg.classList.remove('active');
});

// Dil ayarları
function applyLanguage(lang) {
  if(lang === 'tr') {
    settingsTitle.textContent = 'Ayarlar';
    labelLanguage.textContent = 'Dil Seçimi:';
    closeSettingsBtn.textContent = 'Kapat';
    toggleDarkMode.parentElement.childNodes[1].nodeValue = ' Karanlık Mod';
    playLink.textContent = 'Oyna';
    collectionLink.textContent = 'Koleksiyon';
    openSettingsBtn.textContent = 'Ayarlar';
    document.getElementById('collection-title').textContent = 'Koleksiyon';
  } else {
    settingsTitle.textContent = 'Settings';
    labelLanguage.textContent = 'Language:';
    closeSettingsBtn.textContent = 'Close';
    toggleDarkMode.parentElement.childNodes[1].nodeValue = ' Dark Mode';
    playLink.textContent = 'Play';
    collectionLink.textContent = 'Collection';
    openSettingsBtn.textContent = 'Settings';
    document.getElementById('collection-title').textContent = 'Collection';
  }
}

let currentLang = localStorage.getItem('language') || 'tr';
languageSelect.value = currentLang;
applyLanguage(currentLang);

languageSelect.addEventListener('change', () => {
  currentLang = languageSelect.value;
  localStorage.setItem('language', currentLang);
  applyLanguage(currentLang);
});

// Karanlık mod toggle
let darkModeOn = localStorage.getItem('darkMode') === 'true';
toggleDarkMode.checked = darkModeOn;

function applyDarkMode(on) {
  if(on) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}
applyDarkMode(darkModeOn);

toggleDarkMode.addEventListener('change', () => {
  darkModeOn = toggleDarkMode.checked;
  localStorage.setItem('darkMode', darkModeOn);
  applyDarkMode(darkModeOn);
});

// Nickname overlay işlemleri
window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('nickname-overlay');
  const input = document.getElementById('nickname-input');
  const submitBtn = document.getElementById('nickname-submit');
  const profileNameElem = document.getElementById('profile-name');

  const savedName = localStorage.getItem('nickname');
  if(savedName && savedName.trim().length > 0) {
    profileNameElem.textContent = savedName;
    overlay.style.display = 'none';
  } else {
    overlay.style.display = 'flex';
  }

  function saveAndHide() {
    const name = input.value.trim();
    if(name.length === 0) {
      alert("Lütfen geçerli bir nickname girin.");
      return;
    }
    profileNameElem.textContent = name;
    localStorage.setItem('nickname', name);
    overlay.style.display = 'none';
  }

  submitBtn.addEventListener('click', saveAndHide);
  input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') saveAndHide();
  });
});
