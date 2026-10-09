// js/buildMyCar.js
import { carDatabase, buildStyles, modificationsData, styleRecommendations } from './buildData.js';

let currentBuild = { carId: null, styleId: null, selectedMods: {} };

document.addEventListener('DOMContentLoaded', () => {
  initCarSelectors();
  renderStyles();

  // Đọc tham số ?car=xxx từ URL nếu đi từ trang Car Detail
  const urlParams = new URLSearchParams(window.location.search);
  const carFromUrl = urlParams.get('car');
  if (carFromUrl) {
    const car = carDatabase.find(c => c.id === carFromUrl);
    if (car) {
      currentBuild.carId = car.id;
      goToBuildStep(2);
    }
  }
});

function initCarSelectors() {
  const selectMake = document.getElementById('selectMake');
  if (!selectMake) return;
  selectMake.innerHTML = '<option value="">Select Make ▼</option>';
  [...new Set(carDatabase.map(c => c.make))].forEach(m => {
    selectMake.innerHTML += `<option value="${m}">${m}</option>`;
  });
}

window.onMakeChange = function() {
  const make = document.getElementById('selectMake').value;
  const selectModel = document.getElementById('selectModel');
  selectModel.innerHTML = '<option value="">Select Model ▼</option>';
  selectModel.disabled = !make;
  if (make) {
    [...new Set(carDatabase.filter(c => c.make === make).map(c => c.model))].forEach(m => {
      selectModel.innerHTML += `<option value="${m}">${m}</option>`;
    });
  }
};

window.onModelChange = function() {
  const model = document.getElementById('selectModel').value;
  const selectGen = document.getElementById('selectGen');
  selectGen.innerHTML = '<option value="">Select Generation ▼</option>';
  selectGen.disabled = !model;
  if (model) {
    [...new Set(carDatabase.filter(c => c.model === model).map(c => c.generation))].forEach(g => {
      selectGen.innerHTML += `<option value="${g}">${g}</option>`;
    });
  }
};

window.onGenChange = function() {
  const gen = document.getElementById('selectGen').value;
  const selectTrim = document.getElementById('selectTrim');
  selectTrim.innerHTML = '<option value="">Select Year / Trim ▼</option>';
  selectTrim.disabled = !gen;
  if (gen) {
    carDatabase.filter(c => c.generation === gen).forEach(t => {
      selectTrim.innerHTML += `<option value="${t.id}">${t.trim}</option>`;
    });
  }
};

window.goToBuildStep = function(stepNum) {
  document.querySelectorAll('.build-step').forEach(el => el.classList.remove('active'));

  if (stepNum === 2) {
    if (!currentBuild.carId) {
      const selectedTrimId = document.getElementById('selectTrim').value;
      if (!selectedTrimId) return alert("Please select all car details!");
      currentBuild.carId = selectedTrimId;
    }
    document.getElementById('stepSelectStyle').classList.add('active');
  } else if (stepNum === 3) {
    if (!currentBuild.styleId) return alert("Please select a build style!");
    document.getElementById('stepBuildMain').classList.add('active');
    renderBuildMainScreen();
  } else {
    document.getElementById('stepSelectCar').classList.add('active');
  }
};

function renderStyles() {
  const grid = document.getElementById('styleGrid');
  if (!grid) return;
  grid.innerHTML = buildStyles.map(s => `
    <div class="style-card ${currentBuild.styleId === s.id ? 'selected' : ''}" onclick="selectStyle('${s.id}')">
      <span class="style-icon">${s.icon}</span>
      <h4>${s.name}</h4>
    </div>
  `).join('');
}

window.selectStyle = function(styleId) {
  currentBuild.styleId = styleId;
  renderStyles();
};

function renderBuildMainScreen() {
  const car = carDatabase.find(c => c.id === currentBuild.carId);
  const style = buildStyles.find(s => s.id === currentBuild.styleId);

  document.getElementById('buildCarImg').src = car.img;
  document.getElementById('buildCarTitle').innerText = `${car.make} ${car.generation} ${car.trim}`;
  document.getElementById('buildStyleBadge').innerText = style.name.toUpperCase();

  renderModsAccordion();
  updateCostAndScores();
}

function renderModsAccordion() {
  const accordion = document.getElementById('modsAccordion');
  accordion.innerHTML = Object.keys(modificationsData).map(cat => {
    const selectedPartId = currentBuild.selectedMods[cat];
    const selectedPart = modificationsData[cat].find(p => p.id === selectedPartId);

    return `
      <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAcc('${cat}')">
          <span>${cat.toUpperCase()} ${selectedPart ? `(${selectedPart.name})` : ''}</span>
          <span>${selectedPart ? '✓' : '+'}</span>
        </div>
        <div id="acc-${cat}" class="accordion-content hidden">
          <div class="parts-grid">
            ${modificationsData[cat].map(part => `
              <div class="part-card ${selectedPartId === part.id ? 'active' : ''}">
                <img src="${part.img}" alt="${part.name}">
                <div>
                  <strong>${part.name}</strong>                   <span class="price">$${part.price}</span>
                </div>
                <button onclick="selectPart('${cat}', '${part.id}')">
                  ${selectedPartId === part.id ? 'ADDED' : 'ADD'}
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.toggleAcc = function(cat) {
  document.getElementById(`acc-${cat}`).classList.toggle('hidden');
};

window.selectPart = function(cat, partId) {
  if (currentBuild.selectedMods[cat] === partId) {
    delete currentBuild.selectedMods[cat];
  } else {
    currentBuild.selectedMods[cat] = partId;
  }
  renderModsAccordion();
  updateCostAndScores();
};

function updateCostAndScores() {
  let total = 0;
  Object.keys(currentBuild.selectedMods).forEach(cat => {
    const part = modificationsData[cat].find(p => p.id === currentBuild.selectedMods[cat]);
    if (part) total += part.price;
  });
  document.getElementById('totalBuildCost').innerText = `$${total.toLocaleString()}`;
}

window.toggleRecommendationModal = function() {
  const modal = document.getElementById('recommendationModal');
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) {
    const recs = styleRecommendations[currentBuild.styleId] || styleRecommendations.default;
    document.getElementById('recommendationList').innerHTML = recs.map(r => `
      <div class="rec-item"><h4>${r.step}</h4><p>${r.desc}</p></div>
    `).join('');
  }
};

window.saveBuild = function() {
  alert("✓ Build saved to My Garage!");
  document.getElementById('btnShareBuild').style.display = 'inline-block';
};

window.shareBuild = function() {
  const url = `${window.location.origin}/build-my-car.html?car=${currentBuild.carId}`;
  navigator.clipboard.writeText(url);
  alert(`Build URL copied: ${url}`);
};

window.startAnotherBuild = function() {
  currentBuild = { carId: null, styleId: null, selectedMods: {} };
  goToBuildStep(1);
};
