// DATABASE FOR 15 CAR MODELS WITH FULL SPECS & INDICATORS
const carDatabase = {
  bmw_x3: {
    name: "BMW X3",
    type: "🥇 BEST OVERALL MATCH",
    matchPct: "92%",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Superior driving dynamics and sporty handling in its segment",
      "✓ Premium, modern, and spacious interior layout",
      "✓ Smooth and comfortable ride performance on long trips",
      "✓ High-level active safety and driver assistance features"
    ],
    consider: "Maintenance and spare parts costs are higher than Asian brand alternatives.",
    ratings: { comfort: "★★★★★", practical: "★★★★★", perf: "★★★★☆", cost: "★★★☆☆" },
    costs: { price: "$48,500", fuel: "$2,100 / yr", maint: "$1,200 / yr", ins: "$1,800 / yr" }
  },
  civic_2021: {
    name: "Honda Civic 2021",
    type: "🏁 Sporty Daily Match",
    matchPct: "90%",
    img: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Sporty sedan styling with exceptionally solid cornering",
      "✓ Fuel-efficient 1.5L Turbo engine for optimal daily driving",
      "✓ Excellent resale value and easily accessible parts",
      "✓ Very reasonable overall ownership and running costs"
    ],
    consider: "Relatively low ground clearance and noticeable road noise on rough roads.",
    ratings: { comfort: "★★★★☆", practical: "★★★★☆", perf: "★★★★☆", cost: "★★★★★" },
    costs: { price: "$22,000", fuel: "$1,200 / yr", maint: "$450 / yr", ins: "$850 / yr" }
  },
  crv_2025: {
    name: "Honda CR-V 2025",
    type: "👨‍👩‍👧 Family Crossover Match",
    matchPct: "91%",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Exceptionally spacious 2nd & 3rd-row seating area",
      "✓ Equipped with advanced Honda SENSING safety suite",
      "✓ Smooth, fuel-efficient Hybrid/Turbo powertrain options",
      "✓ High reliability and versatile family suitability"
    ],
    consider: "CVT transmission is tuned for smoothness rather than aggressive acceleration.",
    ratings: { comfort: "★★★★★", practical: "★★★★★", perf: "★★★☆☆", cost: "★★★★☆" },
    costs: { price: "$34,500", fuel: "$1,400 / yr", maint: "$600 / yr", ins: "$1,100 / yr" }
  },
  stargazer_2024: {
    name: "Hyundai Stargazer X 2024",
    type: "💰 Smart Value MPV Match",
    matchPct: "87%",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Highly economic purchase price and running expenses",
      "✓ Flexible 7-seater cabin tailored for larger families",
      "✓ Feature-packed interior exceeding its price point",
      "✓ Good ground clearance suitable for urban and rougher roads"
    ],
    consider: "Futuristic/unconventional styling with modest engine output.",
    ratings: { comfort: "★★★★☆", practical: "★★★★★", perf: "★★☆☆☆", cost: "★★★★★" },
    costs: { price: "$19,500", fuel: "$1,100 / yr", maint: "$350 / yr", ins: "$650 / yr" }
  },
  santafe_2026: {
    name: "Hyundai Santa Fe 2026",
    type: "🏔️ Futuristic SUV Match",
    matchPct: "93%",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Bold, boxy luxury SUV aesthetic with high road presence",
      "✓ Tech-loaded cabin featuring giant dual displays",
      "✓ Outstanding sound insulation and spacious 3rd row",
      "✓ Rigid chassis with multi-terrain drive mode options"
    ],
    consider: "Large vehicle dimensions require extra attention when parking in tight spaces.",
    ratings: { comfort: "★★★★★", practical: "★★★★★", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$41,000", fuel: "$1,700 / yr", maint: "$750 / yr", ins: "$1,300 / yr" }
  },
  tucson: {
    name: "Hyundai Tucson",
    type: "✨ Stylish Crossover Match",
    matchPct: "89%",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Cutting-edge, avant-garde exterior design",
      "✓ Airy, futuristic, and spacious cockpit layout",
      "✓ Punchy Turbo engine perfect for city and highway driving",
      "✓ Rich set of convenience features and equipment"
    ],
    consider: "Steering feels light and prioritized for urban comfort over track feedback.",
    ratings: { comfort: "★★★★☆", practical: "★★★★☆", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$31,000", fuel: "$1,500 / yr", maint: "$550 / yr", ins: "$1,000 / yr" }
  },
  fortuner: {
    name: "Toyota Fortuner",
    type: "⛰️️ Rugged SUV Match",
    matchPct: "86%",
    img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Ultra-durable body-on-frame SUV chassis",
      "✓ High-torque Diesel engine with excellent fuel economy",
      "✓ Exceptional off-road and rough terrain capabilities",
      "✓ Renowned Toyota durability and strong value retention"
    ],
    consider: "Suspension setup can feel slightly firm when driving unladen in the city.",
    ratings: { comfort: "★★★☆☆", practical: "★★★★★", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$39,000", fuel: "$1,500 / yr", maint: "$600 / yr", ins: "$1,200 / yr" }
  },
  innova: {
    name: "Toyota Innova Cross",
    type: "👨‍👩‍👧‍👦 Ultimate MPV Match",
    matchPct: "88%",
    img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Best-in-class 7 to 8-passenger interior capacity",
      "✓ Ultra-frugal Hybrid powertrain option",
      "✓ Captain seat layout for relaxed long-distance travel",
      "✓ Extremely dependable for both family and business needs"
    ],
    consider: "Relaxed driving feel engineered for passenger comfort rather than performance.",
    ratings: { comfort: "★★★★★", practical: "★★★★★", perf: "★★★☆☆", cost: "★★★★★" },
    costs: { price: "$33,000", fuel: "$1,200 / yr", maint: "$500 / yr", ins: "$1,000 / yr" }
  },
  carnival: {
    name: "Kia Carnival",
    type: "👑 First-Class Family Match",
    matchPct: "94%",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ First-class luxury cabin offering executive passenger space",
      "✓ Dual power-sliding rear doors for effortless entry/exit",
      "✓ Refined Smartstream Diesel engine with great efficiency",
      "✓ Packed with amenities: VIP seats, twin screens, and ambient lighting"
    ],
    consider: "Longer body profile (over 5m) requires extra caution in narrow alleys.",
    ratings: { comfort: "★★★★★", practical: "★★★★★", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$46,000", fuel: "$1,600 / yr", maint: "$700 / yr", ins: "$1,400 / yr" }
  },
  sorento: {
    name: "Kia Sorento",
    type: "🌟 Tech SUV Match",
    matchPct: "90%",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Sophisticated exterior design inspired by American SUVs",
      "✓ Wide choice of powertrains (Diesel, Gasoline, Hybrid)",
      "✓ Advanced safety suite with Blind-Spot View Monitor",
      "✓ Premium interior atmosphere complemented by Bose audio"
    ],
    consider: "3rd-row legroom is best suited for kids or shorter trips.",
    ratings: { comfort: "★★★★☆", practical: "★★★★☆", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$38,000", fuel: "$1,600 / yr", maint: "$650 / yr", ins: "$1,200 / yr" }
  },
  sportage: {
    name: "Kia Sportage",
    type: "⚡ Dynamic Crossover Match",
    matchPct: "88%",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Futuristic, head-turning design language",
      "✓ High-tech curved dual display dashboard layout",
      "✓ Energetic acceleration with the 1.6 Turbo trim",
      "✓ Generous rear seat legroom and practical boot space"
    ],
    consider: "Bold front-end styling might be polarizing for traditional buyers.",
    ratings: { comfort: "★★★★☆", practical: "★★★★☆", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$30,000", fuel: "$1,450 / yr", maint: "$550 / yr", ins: "$950 / yr" }
  },
  carens: {
    name: "Kia Carens",
    type: "🧩 Practical Family Match",
    matchPct: "85%",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Compact exterior footprint, agile for city navigation",
      "✓ Flexible 6 or 7-seat configuration option",
      "✓ Practical seatback foldaway tables for passengers",
      "✓ Highly accessible entry-level price point"
    ],
    consider: "Interior trim materials feature basic hard plastics in lower grades.",
    ratings: { comfort: "★★★☆☆", practical: "★★★★★", perf: "★★★☆☆", cost: "★★★★★" },
    costs: { price: "$23,000", fuel: "$1,250 / yr", maint: "$400 / yr", ins: "$750 / yr" }
  },
  k5: {
    name: "Kia K5",
    type: "🏎️ Fastback Sedan Match",
    matchPct: "89%",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Striking Fastback silhouette with aggressive styling",
      "✓ Driver-centric cockpit design with intuitive controls",
      "✓ Composed and stable high-speed highway handling",
      "✓ Competitive value proposition in the Mid-size Sedan segment"
    ],
    consider: "Rear headroom is slightly sloped due to the fastback roofline.",
    ratings: { comfort: "★★★★☆", practical: "★★★☆☆", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$29,000", fuel: "$1,400 / yr", maint: "$500 / yr", ins: "$900 / yr" }
  }
};

// QUIZ NAVIGATION LOGIC
let currentStep = 1;
const totalSteps = 6;

function updateQuizUI() {
  document.querySelectorAll('.quiz-step').forEach(step => {
    step.classList.remove('active');
  });
  
  const activeStepEl = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
  if (activeStepEl) activeStepEl.classList.add('active');

  const fillPct = ((currentStep - 1) / (totalSteps - 1)) * 100;
  document.getElementById('progressFill').style.width = fillPct + '%';
  document.getElementById('stepIndicator').innerText = `STEP 0${currentStep} — ${currentStep} / ${totalSteps}`;

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');

  if (currentStep === 1) {
    btnPrev.style.display = 'none';
  } else {
    btnPrev.style.display = 'inline-block';
  }

  if (currentStep === totalSteps) {
    btnNext.innerText = 'RESTART QUIZ 🔄';
  } else {
    btnNext.innerText = 'CONTINUE →';
  }
}

function changeStep(direction) {
  if (currentStep === totalSteps && direction === 1) {
    currentStep = 1;
  } else {
    currentStep += direction;
    if (currentStep < 1) currentStep = 1;
    if (currentStep > totalSteps) currentStep = totalSteps;
  }
  updateQuizUI();
}

function selectOption(card, category, value) {
  const parent = card.parentElement;
  parent.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
}

function toggleMultiOption(card, value) {
  card.classList.toggle('selected');
}

function togglePriority(btn, value) {
  btn.classList.toggle('selected');
}

function updateBudget(val) {
  document.getElementById('budgetValue').innerText = '$' + parseInt(val).toLocaleString();
}

function toggleBudgetNotSure() {
  const btn = document.getElementById('btnBudgetNotSure');
  btn.classList.toggle('active');
  if (btn.classList.contains('active')) {
    btn.innerText = '✓ NOT SURE (ANY BUDGET)';
  } else {
    btn.innerText = "I'M NOT SURE YET";
  }
}

// CAR DETAIL DISPLAY LOADER
function loadCarDetail(carKey) {
  const car = carDatabase[carKey] || carDatabase['bmw_x3'];
  
  const resultContainer = document.getElementById('mainCarResult');
  if (!resultContainer) return;

  resultContainer.innerHTML = `
    <div class="match-top-label">${car.type}</div>
    <div class="match-main-grid">
      <div class="match-image-col">
        <img src="${car.img}" alt="${car.name}" class="result-car-img">
      </div>
      <div class="match-info-col">
        <div class="result-title-row">
          <h3>${car.name}</h3>
          <span class="score-pill">${car.matchPct} MATCH</span>
        </div>
        <div class="why-fits">
          <h4>Why it fits you</h4>
          <ul>
            ${car.whyFits.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="consider-box">
          <strong>⚠️ CONSIDER THIS:</strong> ${car.consider}
        </div>
      </div>
    </div>
  `;

  // Update comparison table & ownership cost breakdown
  const compTable = document.getElementById('compareTableBody');
  if (compTable) {
    compTable.innerHTML = `
      <tr>
        <td>Your Match Score</td>
        <td><strong class="text-green">${car.matchPct}</strong></td>
      </tr>
      <tr>
        <td>Comfort Level</td>
        <td>${car.ratings.comfort}</td>
      </tr>
      <tr>
        <td>Practicality & Space</td>
        <td>${car.ratings.practical}</td>
      </tr>
      <tr>
        <td>Performance & Driving Dynamics</td>
        <td>${car.ratings.perf}</td>
      </tr>
      <tr>
        <td>Cost Efficiency & Ownership Value</td>
        <td>${car.ratings.cost}</td>
      </tr>
    `;
  }

  const costGrid = document.getElementById('costGridDisplay');
  if (costGrid) {
    costGrid.innerHTML = `
      <div class="cost-card">
        <span class="cost-label">Est. Purchase Price</span>
        <span class="cost-value">${car.costs.price}</span>
      </div>
      <div class="cost-card">
        <span class="cost-label">Est. Fuel / Year</span>
        <span class="cost-value">${car.costs.fuel}</span>
      </div>
      <div class="cost-card">
        <span class="cost-label">Est. Maintenance / Year</span>
        <span class="cost-value">${car.costs.maint}</span>
      </div>
      <div class="cost-card">
        <span class="cost-label">Est. Insurance / Year</span>
        <span class="cost-value">${car.costs.ins}</span>
      </div>
    `;
  }
}

// INITIALIZE DEFAULT CAR DISPLAY UPON PAGE LOAD
document.addEventListener('DOMContentLoaded', () => {
  loadCarDetail('bmw_x3');
});

// STORY ARTICLE FILTER
function filterStories(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.story-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat.includes(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function handleCommSubmit(e) {
  e.preventDefault();
  alert('Thank you! Your community submission has been received.');
  e.target.reset();
}
