let currentStep = 1;
const totalSteps = 6;

const quizData = {
  userType: '',
  budget: 60000,
  budgetNotSure: false,
  lifestyle: [],
  priorities: [],
  currentCar: '',
  desiredChanges: []
};

function changeStep(direction) {
  const newStep = currentStep + direction;
  if (newStep < 1 || newStep > totalSteps) return;

  document.querySelector(`.quiz-step[data-step="${currentStep}"]`).classList.remove('active');
  currentStep = newStep;
  document.querySelector(`.quiz-step[data-step="${currentStep}"]`).classList.add('active');

  updateUI();
}

function updateUI() {
  const progressPercent = (currentStep / totalSteps) * 100;
  document.getElementById('progressFill').style.width = `${progressPercent}%`;
  document.getElementById('stepIndicator').innerText = `STEP 0${currentStep} — ${currentStep} / ${totalSteps}`;

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');

  btnPrev.style.display = currentStep === 1 ? 'none' : 'inline-flex';
  
  if (currentStep === totalSteps) {
    btnNext.style.display = 'none';
  } else {
    btnNext.innerText = 'CONTINUE →';
    btnNext.style.display = 'inline-flex';
  }
}

function selectOption(element, key, value) {
  const siblings = element.parentElement.querySelectorAll('.option-card');
  siblings.forEach(card => card.classList.remove('selected'));
  element.classList.add('selected');
  quizData[key] = value;
}

function updateBudget(val) {
  quizData.budget = val;
  quizData.budgetNotSure = false;
  document.getElementById('budgetValue').innerText = `$${parseInt(val).toLocaleString()}`;
  document.getElementById('btnBudgetNotSure').classList.remove('btn-primary');
  document.getElementById('btnBudgetNotSure').classList.add('btn-secondary');
}

function toggleBudgetNotSure() {
  quizData.budgetNotSure = !quizData.budgetNotSure;
  const btn = document.getElementById('btnBudgetNotSure');
  if (quizData.budgetNotSure) {
    btn.classList.remove('btn-secondary');
    btn.classList.add('btn-primary');
    document.getElementById('budgetValue').innerText = 'NOT SURE';
  } else {
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-secondary');
    updateBudget(document.getElementById('budgetSlider').value);
  }
}

function toggleMultiOption(element, value) {
  element.classList.toggle('selected');
  const index = quizData.lifestyle.indexOf(value);
  if (index > -1) {
    quizData.lifestyle.splice(index, 1);
  } else {
    quizData.lifestyle.push(value);
  }
}

function togglePriority(element, value) {
  const index = quizData.priorities.indexOf(value);
  if (index > -1) {
    quizData.priorities.splice(index, 1);
    element.classList.remove('selected');
  } else {
    if (quizData.priorities.length >= 5) {
      alert('You can select up to 5 priorities.');
      return;
    }
    quizData.priorities.push(value);
    element.classList.add('selected');
  }
}

function filterStories(category, btnElement) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');

  const articles = document.querySelectorAll('.story-card');
  articles.forEach(article => {
    const itemCategory = article.getAttribute('data-category');
    if (category === 'all' || itemCategory.includes(category)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
}

function handleCommSubmit(event) {
  event.preventDefault();
  alert('Cảm ơn bạn! Thông tin hội nhóm đã được gửi đi và đang chờ xác minh/kiểm duyệt.');
  document.getElementById('submitCommForm').reset();
}