document.addEventListener('DOMContentLoaded', () => {
    const introBtn = document.getElementById('intro-btn');
    const spaceRaceBtn = document.getElementById('space-race-btn');
    const shuttleEraBtn = document.getElementById('shuttle-era-btn');
    const modernExplorationBtn = document.getElementById('modern-exploration-btn');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('close-btn');
  
    const content = {
      intro: {
        text: "Space exploration represents humanity's unending curiosity and determination to explore beyond our planet. From early telescopic discoveries to modern missions venturing into the depths of our solar system, space exploration has transformed our understanding of the universe and our place in it.",
        image: "images/earth.jpg"
      },
      spaceRace: {
        text: "The Space Race marked the intense competition between the United States and the Soviet Union to achieve dominance in space exploration. It began with the launch of Sputnik 1 in 1957, the first artificial satellite, and culminated with the Apollo 11 moon landing in 1969, when Neil Armstrong became the first human to walk on the Moon.",
        image: "images/moon.jpg"
      },
      shuttleEra: {
        text: "The Shuttle Era introduced reusable spacecraft, making space travel more cost-effective and routine. NASA's Space Shuttle program launched iconic missions, including the deployment of the Hubble Space Telescope and construction of the International Space Station (ISS). However, the era also saw tragedy with the Challenger and Columbia disasters.",
        image: "images/rocket.jpg"
      },
      modernExploration: {
        text: "In recent years, space exploration has entered a new golden age with international collaboration and private sector involvement. Notable achievements include the Mars rover missions, SpaceX's reusable rockets, and the James Webb Space Telescope, which provides unprecedented views of the universe. Plans for Moon bases and crewed missions to Mars are underway.",
        image: "images/spaceX.jpg"
      }
    };
  
    function openModal(section) {
      modalBody.innerHTML = `
        <p>${content[section].text}</p>
        <img src="${content[section].image}" alt="${section} image">
      `;
      modal.classList.remove('hidden');
      modal.style.display = 'block';
    }
  
    function closeModal() {
      modal.classList.add('hidden');
      modal.style.display = 'none';
    }
  
    introBtn.addEventListener('click', () => openModal('intro'));
    spaceRaceBtn.addEventListener('click', () => openModal('spaceRace'));
    shuttleEraBtn.addEventListener('click', () => openModal('shuttleEra'));
    modernExplorationBtn.addEventListener('click', () => openModal('modernExploration'));
    closeBtn.addEventListener('click', closeModal);
  });
  