// DATABASE 15 MẪU XE VỚI ĐẦY ĐỦ THÔNG SỐ & CHỈ SỐ
const carDatabase = {
  bmw_x3: {
    name: "BMW X3",
    type: "🥇 BEST OVERALL MATCH",
    matchPct: "92%",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Cảm giác lái thể thao vượt trội trong phân khúc",
      "✓ Không gian nội thất sang trọng, hiện đại",
      "✓ Khả năng vận hành êm ái trên đường dài",
      "✓ Hệ thống an toàn chủ động cao cấp"
    ],
    consider: "Chi phí bảo dưỡng và phụ tùng cao hơn xe Nhật/Hàn.",
    ratings: { comfort: "★★★★★", practical: "★★★★★", perf: "★★★★☆", cost: "★★★☆☆" },
    costs: { price: "$48,500", fuel: "$2,100 / năm", maint: "$1,200 / năm", ins: "$1,800 / năm" }
  },
  civic_2021: {
    name: "Honda Civic 2021",
    type: "🏁 Sporty Daily Match",
    matchPct: "90%",
    img: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Thiết kế sedan thể thao, đầm chắc khi ôm cua",
      "✓ Động cơ 1.5L Turbo tiết kiệm nhiên liệu tối ưu",
      "✓ Giữ giá tốt, phụ tùng dễ thay thế",
      "✓ Chi phí vận hành vô cùng hợp lý"
    ],
    consider: "Gầm xe tương đối thấp, cách âm gầm chưa thực sự ấn tượng.",
    ratings: { comfort: "★★★★☆", practical: "★★★★☆", perf: "★★★★☆", cost: "★★★★★" },
    costs: { price: "$22,000", fuel: "$1,200 / năm", maint: "$450 / năm", ins: "$850 / năm" }
  },
  crv_2025: {
    name: "Honda CR-V 2025",
    type: "👨‍👩‍👧 Family Crossover Match",
    matchPct: "91%",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Không gian hàng ghế 2 & 3 vô cùng rộng rãi",
      "✓ Trang bị gói an toàn Honda SENSING hiện đại",
      "✓ Động cơ Hybrid/Turbo vận hành êm ái, tiết kiệm",
      "✓ Xe gia đình đa dụng, độ bền cực cao"
    ],
    consider: "Hộp số CVT tập trung vào độ mượt mà hơn là cảm giác tăng tốc bốc.",
    ratings: { comfort: "★★★★★", practical: "★★★★★", perf: "★★★☆☆", cost: "★★★★☆" },
    costs: { price: "$34,500", fuel: "$1,400 / năm", maint: "$600 / năm", ins: "$1,100 / năm" }
  },
  stargazer_2024: {
    name: "Hyundai Stargazer X 2024",
    type: "💰 Smart Value MPV Match",
    matchPct: "87%",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Giá thành sở hữu và chi phí sử dụng rất kinh tế",
      "✓ Nội thất 7 chỗ ngồi linh hoạt cho gia đình đông người",
      "✓ Trang bị tiện nghi và công nghệ vượt tầm giá",
      "✓ Khoảng sáng gầm xe tốt, thích hợp đường đô thị lẫn ngập nước"
    ],
    consider: "Kiểu dáng độc lạ, công suất động cơ ở mức đủ dùng.",
    ratings: { comfort: "★★★★☆", practical: "★★★★★", perf: "★★☆☆☆", cost: "★★★★★" },
    costs: { price: "$19,500", fuel: "$1,100 / năm", maint: "$350 / năm", ins: "$650 / năm" }
  },
  santafe_2026: {
    name: "Hyundai Santa Fe 2026",
    type: "🏔️ Futuristic SUV Match",
    matchPct: "93%",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Thiết kế vuông vức phong cách SUV hạng sang hiện đại",
      "✓ Khoang cabin ngập tràn công nghệ & màn hình lớn",
      "✓ Khả năng cách âm đỉnh cao, hàng ghế thứ 3 rộng rãi",
      "✓ Khung gầm chắc chắn, nhiều chế độ địa hình"
    ],
    consider: "Kích thước xe tương đối lớn, cần thời gian quen khi đỗ xe hẹp.",
    ratings: { comfort: "★★★★★", practical: "★★★★★", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$41,000", fuel: "$1,700 / năm", maint: "$750 / năm", ins: "$1,300 / năm" }
  },
  tucson: {
    name: "Hyundai Tucson",
    type: "✨ Stylish Crossover Match",
    matchPct: "89%",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Thiết kế ngoại thất hiện đại, phá cách",
      "✓ Bố trí khoang lái rộng rãi, thoáng đãng",
      "✓ Động cơ Turbo vận hành bốc và linh hoạt trong phố",
      "✓ Nhiều tiện nghi option vượt trội trong tầm giá"
    ],
    consider: "Vô-lăng cảm giác lái nhẹ, phù hợp đi phố hơn đi đua.",
    ratings: { comfort: "★★★★☆", practical: "★★★★☆", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$31,000", fuel: "$1,500 / năm", maint: "$550 / năm", ins: "$1,000 / năm" }
  },
  fortuner: {
    name: "Toyota Fortuner",
    type: "⛰️ Rugged SUV Match",
    matchPct: "86%",
    img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Khung gầm rời (Body-on-frame) siêu bền bỉ",
      "✓ Động cơ Dầu tiết kiệm, sức kéo cực mạnh mẽ",
      "✓ Khả năng off-road và đi đường xấu đỉnh cao",
      "✓ Độ bền thương hiệu Toyota, giữ giá cực tốt"
    ],
    consider: "Hệ thống treo hơi cứng khi đi phố không tải.",
    ratings: { comfort: "★★★☆☆", practical: "★★★★★", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$39,000", fuel: "$1,500 / năm", maint: "$600 / năm", ins: "$1,200 / năm" }
  },
  innova: {
    name: "Toyota Innova Cross",
    type: "👨‍👩‍👧‍👦 Ultimate MPV Match",
    matchPct: "88%",
    img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Nội thất 7-8 chỗ ngồi rộng rãi nhất phân khúc",
      "✓ Tùy chọn động cơ Hybrid siêu tiết kiệm xăng",
      "✓ Hàng ghế thương gia êm ái, đi xa không mệt mỏi",
      "✓ Xe gia đình & kinh doanh cực kỳ lành tính"
    ],
    consider: "Cảm giác lái thuần túy nhẹ nhàng, không thiên về thể thao.",
    ratings: { comfort: "★★★★★", practical: "★★★★★", perf: "★★★☆☆", cost: "★★★★★" },
    costs: { price: "$33,000", fuel: "$1,200 / năm", maint: "$500 / năm", ins: "$1,000 / năm" }
  },
  carnival: {
    name: "Kia Carnival",
    type: "👑 First-Class Family Match",
    matchPct: "94%",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Khoang cabin rộng rãi chuẩn chuyên chở thương gia",
      "✓ Cửa lùa điện cực kỳ tiện lợi cho trẻ em và người già",
      "✓ Động cơ Smartstream Dầu cực êm và tiết kiệm",
      "✓ Trang bị miên man: ghế massage, màn hình đôi..."
    ],
    consider: "Thân xe dài (hơn 5m), cần chú ý khi quay đầu trong ngõ hẹp.",
    ratings: { comfort: "★★★★★", practical: "★★★★★", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$46,000", fuel: "$1,600 / năm", maint: "$700 / năm", ins: "$1,400 / năm" }
  },
  sorento: {
    name: "Kia Sorento",
    type: "🌟 Tech SUV Match",
    matchPct: "90%",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Thiết kế sang trọng mang phong cách xe Mỹ",
      "✓ Đa dạng tùy chọn động cơ (Dầu, Xăng, Hybrid)",
      "✓ Nhiều tính năng an toàn quan sát điểm mù BVM",
      "✓ Nội thất hiện đại với hệ thống loa Bose chất lượng"
    ],
    consider: "Hàng ghế thứ 3 chỉ phù hợp cho trẻ em hoặc đi chặng ngắn.",
    ratings: { comfort: "★★★★☆", practical: "★★★★☆", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$38,000", fuel: "$1,600 / năm", maint: "$650 / năm", ins: "$1,200 / năm" }
  },
  sportage: {
    name: "Kia Sportage",
    type: "⚡ Dynamic Crossover Match",
    matchPct: "88%",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Thiết kế tương lai, đường nét phá cách độc đáo",
      "✓ Màn hình cong kép tràn viền cao cấp",
      "✓ Khả năng tăng tốc ấn tượng với bản 1.6 Turbo",
      "✓ Không gian để chân phía sau rất thoải mái"
    ],
    consider: "Thiết kế đầu xe phá cách có thể không hợp mắt khách hàng truyền thống.",
    ratings: { comfort: "★★★★☆", practical: "★★★★☆", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$30,000", fuel: "$1,450 / năm", maint: "$550 / năm", ins: "$950 / năm" }
  },
  carens: {
    name: "Kia Carens",
    type: "🧩 Practical Family Match",
    matchPct: "85%",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Kích thước gọn gàng, linh hoạt luồn lách trong phố",
      "✓ Cấu hình 6 hoặc 7 chỗ tiện dụng",
      "✓ Trang bị bàn làm việc/ăn nhẹ sau lưng ghế",
      "✓ Chi phí đầu tư ban đầu cực kỳ hợp lý"
    ],
    consider: "Chất liệu nhựa nội thất ở mức phổ thông.",
    ratings: { comfort: "★★★☆☆", practical: "★★★★★", perf: "★★★☆☆", cost: "★★★★★" },
    costs: { price: "$23,000", fuel: "$1,250 / năm", maint: "$400 / năm", ins: "$750 / năm" }
  },
  k5: {
    name: "Kia K5",
    type: "🏎️ Fastback Sedan Match",
    matchPct: "89%",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    whyFits: [
      "✓ Kiểu dáng Fastback quyến rũ, đậm chất thể thao",
      "✓ Khoang lái hướng về người lái như xe đua",
      "✓ Vận hành đầm chắc trên đường cao tốc",
      "✓ Giá bán hấp dẫn nhất phân khúc Sedan hạng D"
    ],
    consider: "Trần xe hàng ghế sau hơi thấp do thiết kế vuốt dốc.",
    ratings: { comfort: "★★★★☆", practical: "★★★☆☆", perf: "★★★★☆", cost: "★★★★☆" },
    costs: { price: "$29,000", fuel: "$1,400 / năm", maint: "$500 / năm", ins: "$900 / năm" }
  }
};

// LOGIC ĐIỀU HƯỚNG QUIZ
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

// XỬ LÝ CHỌN XE HIỂN THỊ CHI TIẾT
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

  // Cập nhật bảng so sánh & chi phí nuôi xe
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
        <td>Performance & Driving</td>
        <td>${car.ratings.perf}</td>
      </tr>
      <tr>
        <td>Cost Efficiency</td>
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

// BỘ LỌC BÀI VIẾT CÂU CHUYỆN
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
