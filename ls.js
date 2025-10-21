// Переключение вкладок
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    contents.forEach(c => c.classList.remove("active"));
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelector(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function updateSlide() {
  const slideWidth = slidesContainer.clientWidth; 
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

next.addEventListener("click", () => {
  if (index < slides.children.length - 1) index++;
  else index = 0;
  updateSlide();
});

prev.addEventListener("click", () => {
  if (index > 0) index--;
  else index = slides.children.length - 1;
  updateSlide();
});

window.addEventListener("resize", updateSlide);



// Комментарии с сохранением
const commentForm = document.getElementById("commentForm");
const commentsDiv = document.getElementById("comments");

// Загружаем комментарии из localStorage
let comments = JSON.parse(localStorage.getItem("comments")) || [];
renderComments();

commentForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("username").value.trim();
  const text = document.getElementById("commentText").value.trim();

  if (name && text) {
    comments.push({ name, text });
    localStorage.setItem("comments", JSON.stringify(comments));
    renderComments();
    commentForm.reset();
  }
});

function renderComments() {
  commentsDiv.innerHTML = "";
  comments.forEach(c => {
    const p = document.createElement("p");
    p.innerHTML = `<b>${c.name}:</b> ${c.text}`;
    commentsDiv.appendChild(p);
  });
}
// Информация о планетах
const planetData = {
  mercury: {
    name: "сатурн",
    bio: "Сатурн знаменит своими красивыми кольцами из льда и камней. Как и Юпитер, он газовый гигант и имеет множество спутников, включая крупный Титан с атмосферой."
  },
  venus: {
    name: "Венера",
    bio: "Венера — вторая планета от Солнца, её атмосфера создаёт мощный парниковый эффект и температуру до 460°C."
  },
  earth: {
    name: "марс",
    bio: "Марс знаменит своим красноватым оттенком из-за оксида железа на поверхности. Здесь есть гигантские вулканы, долины и полярные шапки из льда. Изучение Марса ведёт к поиску признаков прошлой воды и жизни."
  },
  mars: {
    name: "нептун",
    bio: "Нептун известен сильнейшими ветрами в Солнечной системе, достигающими 2 100 км/ч. Планета состоит из газов и льдов, а также имеет ярко-синий цвет из-за метана в атмосфере."
  },
  jupiter: {
    name: "меркурий",
    bio: "Меркурий — ближайшая к Солнцу планета. Его поверхность усеяна кратерами, похожими на Луну. Температуры здесь колеблются от экстремальной жары днём до ледяного холода ночью."
  },
  saturn: {
    name: "юпитер",
    bio: "Юпитер — самая большая планета Солнечной системы. Он состоит в основном из газа и известен Великой Красной Пятной — гигантским штормом, продолжающимся сотни лет. Имеет более 90 спутников."
  },
  uranus: {
    name: "Уран",
    bio: "Уран вращается почти «на боку», а его ось наклонена почти на 98°. Планета состоит в основном из водорода, гелия и метана, что придаёт ей голубой оттенок."
  },
  neptune: {
    name: "земля",
    bio: "Земля — единственная известная планета с живыми организмами. Здесь есть вода в жидком виде, атмосфера и климат, поддерживающие жизнь. Спутник — Луна."
  }
};

const planetButtons = document.querySelectorAll(".planet");
const planetInfoDiv = document.getElementById("planet-info");
const closeBtn = document.getElementById("close-planet-info");

planetButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const p = planetData[btn.dataset.planet];
    planetInfoDiv.querySelector("h2").textContent = p.name;
    planetInfoDiv.querySelector("p").textContent = p.bio;
    planetInfoDiv.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  planetInfoDiv.classList.add("hidden");
});
