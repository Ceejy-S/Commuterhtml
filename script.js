// script.js
document.addEventListener("DOMContentLoaded", function () {
  // NavBar Component
  const navbarSections = [
    "HOME",
    "ABOUT",
    "GET INVOLVED",
    "RESOURCES",
    "RESULTS",
    "CITY CONTACT",
  ];
  const navbar = document.getElementById("navbar");
  const ul = document.createElement("ul");
  navbar.appendChild(ul);

  navbarSections.forEach((section) => {
    const li = document.createElement("li");
    li.textContent = section;
    ul.appendChild(li);
  });

  const flags = [
    { src: "/english-flag.png", alt: "English Flag", text: "English" },
    { src: "/french-flag.png", alt: "French Flag", text: "French" },
  ];

  flags.forEach((flag) => {
    const liFlag = document.createElement("li");
    liFlag.className = "flag";
    liFlag.innerHTML = `<img src="${flag.src}" alt="${flag.alt}" /><span>${flag.text}</span>`;
    ul.appendChild(liFlag);
  });

  // PhotoSlider Component
  const photoSlider = document.getElementById("photoSlider");
  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
    "/photo7.jpg",
    "/photo8.jpg",
    "/photo10.jpg",
    "/photo11.jpg",
    "/photo13.jpg",
  ];
  let currentPhotoIndex = 0;

  const updateSlider = () => {
    photoSlider.innerHTML = `<img src="${
      photos[currentPhotoIndex]
    }" alt="Photo ${
      currentPhotoIndex + 1
    }" style="display: block; width: 1800px; height: 650px; object-fit: cover;">`;
  };

  updateSlider();
  setInterval(() => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updateSlider();
  }, 3000);
  // Continuing from the previous script in script.js
  // Event Component
  const eventsData = [
    {
      name: "Bougeons en hiver: Jack Frost Challenge",
      dates: "February 11-17, 2024",
      logoSrc: "/Jack-Frost-Challenge-w-french-300x94.jpeg",
    },
    {
      name: "National",
      dates: "June 2-8, 2024",
      logoSrc: "/logo192.png",
    },
    {
      name: "Campus",
      dates: "October 7-11, 2024",
      logoSrc: "/campus-logo-horizontal-BLUE-300x103.jpeg",
    },
  ];

  const eventsList = document.getElementById("eventsList");

  eventsData.forEach((event) => {
    const eventDiv = document.createElement("div");
    eventDiv.className = "event";

    const eventInfo = document.createElement("div");
    eventInfo.className = "event-info";

    const img = document.createElement("img");
    img.src = event.logoSrc;
    img.alt = `${event.name} Logo`;
    img.style.maxHeight = "90px";

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = event.name;

    const dateParagraph = document.createElement("p");
    dateParagraph.textContent = event.dates;

    const button = document.createElement("button");
    button.className = "action-button-event";
    button.innerHTML = "Register Now! &#10140;";

    eventInfo.appendChild(img);
    eventInfo.appendChild(nameParagraph);
    eventInfo.appendChild(dateParagraph);
    eventInfo.appendChild(button);

    eventDiv.appendChild(eventInfo);
    eventsList.appendChild(eventDiv);
  });

  // Continuing from the previous script in script.js
  // CommuterChallengeRegistration Component
  const commuterChallenge = document.getElementById("commuterChallenge");

  const commuterChallengeTitleDiv = document.createElement("div");
  commuterChallengeTitleDiv.className = "commuter-challenge-title";
  commuterChallengeTitleDiv.innerHTML =
    "<h2>REGISTRATION: COMMUTER CHALLENGE</h2>";

  const commuterChallengeListDiv = document.createElement("div");
  commuterChallengeListDiv.className = "commuter-challenge-list";

  const challengeOptions = [
    { src: "/employees.png", text: "Employee" },
    { src: "/user.png", text: "Individual" },
    { src: "/office-building.png", text: "Work Place" },
    { src: "/earth-grid.png", text: "Region" },
  ];

  challengeOptions.forEach((option) => {
    const button = document.createElement("button");
    button.className = "commuter-challenge-button";
    button.style.display = "flex";
    button.style.flexDirection = "column";
    button.style.alignItems = "center";

    const img = document.createElement("img");
    img.src = option.src;
    img.alt = `${option.text} Icon`;
    img.style =
      "width: 50px; height: 50px; marginBottom: 5px; filter: invert(100%);";

    const span = document.createElement("span");
    span.textContent = option.text;

    button.appendChild(img);
    button.appendChild(span);
    commuterChallengeListDiv.appendChild(button);
  });

  commuterChallenge.appendChild(commuterChallengeTitleDiv);
  commuterChallenge.appendChild(commuterChallengeListDiv);

  // AdditionalSection Component
  const additionalSection = document.getElementById("additionalSection");

  const additionalSectionTitleDiv = document.createElement("div");
  additionalSectionTitleDiv.className = "commuter-challenge-title"; // Reuse the class
  additionalSectionTitleDiv.innerHTML = "<h2>COMMUTER CHALLENGE IN CANADA</h2>";

  const additionalSectionContentDiv = document.createElement("div");
  additionalSectionContentDiv.className = "additional-section-right";

  const sectionTitleDiv = document.createElement("div");
  sectionTitleDiv.className = "section-title";
  sectionTitleDiv.innerHTML =
    "<h2>Over 25 years of Commuter Challenge in Canada!</h2>";

  const sectionBodyDiv = document.createElement("div");
  sectionBodyDiv.className = "section-body";
  sectionBodyDiv.innerHTML =
    "<p>Contact your regional coordinator to find out what's new in your region. Participation fee may apply. Payments can be made here and we graciously accept all donations:</p>";

  const button = document.createElement("button");
  button.className = "action-button-additional";
  button.innerHTML = "Pay Now! &#10140;";

  additionalSectionContentDiv.appendChild(sectionTitleDiv);
  additionalSectionContentDiv.appendChild(sectionBodyDiv);
  additionalSectionContentDiv.appendChild(button);

  additionalSection.appendChild(additionalSectionTitleDiv);
  additionalSection.appendChild(additionalSectionContentDiv);
});
