(() => {
  'use strict';
  const root = document.querySelector('[data-forms-lab]');
  if (!root) return;
  const byId = id => document.getElementById(id);
  const initialResults = new Map(Array.from(root.querySelectorAll('[data-lab-result]'), node => [node, node.textContent]));
  const setResult = (id, text) => { byId(id).textContent = text; };
  const request = byId('lab7-request');
  const validation = byId('lab7-validation');
  const schedule = byId('lab7-schedule');
  const order = byId('lab7-order');
  const quiz = byId('lab7-quiz');
  const forms = [request, validation, schedule, order, quiz];

  const updateTimes = () => {
    const start = byId('lab7-start').value;
    const end = byId('lab7-end');
    end.setCustomValidity(start && end.value && end.value <= start ? '종료 시간을 시작 시간보다 늦게 선택하세요.' : '');
  };
  const valid = form => {
    form.classList.add('is-validated');
    return form.reportValidity();
  };
  const updateOrder = (updatePrice = false) => {
    const prices = { '멀티미디어 배움터': 30000, '인터넷 배움터': 34000, '컴퓨터와 IT 기술의 이해': 28000 };
    if (updatePrice && Object.hasOwn(prices, byId('lab7-book').value)) byId('lab7-price').value = String(prices[byId('lab7-book').value]);
    const price = byId('lab7-price');
    const count = byId('lab7-count');
    const preference = byId('lab7-preference').value;
    byId('lab7-preference-out').value = preference + ' / 5';
    byId('lab7-preference-meter').value = Number(preference);
    byId('lab7-color-out').value = byId('lab7-color').value;
    const total = price.valueAsNumber * count.valueAsNumber;
    byId('lab7-total').value = price.validity.valid && count.validity.valid && Number.isFinite(total) ? total.toLocaleString('ko-KR') + '원' : '가격·권수의 범위와 단위를 확인하세요.';
  };

  forms.forEach(form => {
    form.addEventListener('invalid', () => form.classList.add('is-validated'), true);
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (form === schedule) updateTimes();
      if (!valid(form)) return;
      if (form === request) {
        const data = event.submitter ? new FormData(form, event.submitter) : new FormData(form);
        const lines = Array.from(new Set(data.keys()), key => key + ': ' + JSON.stringify(data.getAll(key)));
        const query = new URLSearchParams(data).toString();
        const method = byId('lab7-method').value;
        setResult('lab7-request-result', (method === 'get' ? 'GET 요청 모양: /practice?' + query : 'POST 본문 모양: ' + query) + '\n\n이름별 값\n' + lines.join('\n') + '\n\n실제 네트워크 전송 없이 이 화면에서만 확인했습니다.');
      } else if (form === validation) {
        setResult('lab7-validation-result', '필수 항목·이메일/URL 형식·패턴·숫자 범위를 통과했습니다. 입력값은 전송하거나 저장하지 않았습니다.');
      } else if (form === schedule) {
        setResult('lab7-schedule-result', '연습 일정: ' + byId('lab7-date').value + ' ' + byId('lab7-start').value + '–' + byId('lab7-end').value + '\n월: ' + byId('lab7-month').value + ' / ISO 주: ' + byId('lab7-week').value + '\n지역 날짜·시간: ' + byId('lab7-datetime').value + '\n실제 예약은 생성하지 않았습니다.');
      } else if (form === order) {
        updateOrder();
        setResult('lab7-order-result', '연습용 요청 확인: ' + byId('lab7-book').value + ' · ' + byId('lab7-count').value + '권 · ' + byId('lab7-total').value + '\n실제 구매·결제·전송은 없습니다.');
      } else if (form === quiz) {
        let score = 0;
        const feedback = byId('lab7-quiz-feedback');
        feedback.replaceChildren();
        Array.from(form.querySelectorAll('[data-answer]')).forEach((field, index) => {
          const chosen = field.querySelector('input:checked');
          const correct = chosen && chosen.value === field.dataset.answer;
          if (correct) score++;
          const item = document.createElement('li');
          item.textContent = (index + 1) + '번 ' + (correct ? '정답' : '오답') + ' — ' + field.dataset.explanation;
          feedback.appendChild(item);
        });
        byId('lab7-quiz-score').value = score;
        setResult('lab7-quiz-result', '5문항 중 ' + score + '문항 정답');
      }
    });
    form.addEventListener('reset', () => {
      // The reset event precedes the browser's restoration of default values.
      window.setTimeout(() => {
        form.classList.remove('is-validated');
        form.querySelectorAll('[data-lab-result]').forEach(node => { node.textContent = initialResults.get(node) || ''; });
        if (form === schedule) updateTimes();
        if (form === order) updateOrder();
        if (form === quiz) { byId('lab7-quiz-feedback').replaceChildren(); byId('lab7-quiz-score').value = 0; }
      }, 0);
    });
  });
  schedule.addEventListener('input', updateTimes);
  order.addEventListener('input', () => updateOrder());
  byId('lab7-book').addEventListener('change', () => updateOrder(true));
  byId('lab7-show-password').addEventListener('change', event => { byId('lab7-password').type = event.target.checked ? 'text' : 'password'; });
  byId('lab7-password-status').addEventListener('click', () => {
    setResult('lab7-secret-result', byId('lab7-password').value ? '문자가 입력되었습니다. 이 확인 결과에는 내용을 표시하지 않습니다.' : '아직 입력한 문자가 없습니다.');
  });
  byId('lab7-file').addEventListener('change', event => {
    const files = Array.from(event.target.files || []);
    setResult('lab7-file-result', files.length ? files.slice(0, 10).map(file => file.name + ' · ' + file.size.toLocaleString('ko-KR') + ' bytes').join('\n') + (files.length > 10 ? '\n외 ' + (files.length - 10) + '개' : '') : '선택한 파일이 없습니다.');
  });
  byId('lab7-preview').addEventListener('click', () => setResult('lab7-request-result', 'type="button"은 혼자서 폼을 전송하지 않습니다. 이 메시지는 click 이벤트로 표시했습니다.'));

  const checks = Array.from(root.querySelectorAll('[data-study-check]'));
  const storageKey = 'magician-park:week07:checklist:v1';
  let storageAvailable = true;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (Array.isArray(saved) && saved.length === checks.length && saved.every(value => typeof value === 'boolean')) checks.forEach((box, index) => { box.checked = saved[index]; });
  } catch { storageAvailable = false; }
  const updateChecks = (save = false) => {
    const values = checks.map(box => box.checked);
    const count = values.filter(Boolean).length;
    byId('lab7-study-progress').value = count;
    if (save) {
      try { localStorage.setItem(storageKey, JSON.stringify(values)); }
      catch { storageAvailable = false; }
    }
    setResult('lab7-study-result', count + ' / ' + checks.length + '개 완료 · ' + (storageAvailable ? '체크 목록만 이 브라우저에 저장됩니다.' : '저장이 제한되어 체크 상태는 이 화면에서만 유지됩니다.'));
  };
  checks.forEach(box => box.addEventListener('change', () => updateChecks(true)));
  byId('lab7-clear-checks').addEventListener('click', () => { checks.forEach(box => { box.checked = false; }); updateChecks(true); });
  updateTimes();
  updateOrder();
  updateChecks();
  root.querySelectorAll('[data-lab-submit]').forEach(button => { button.disabled = false; });
})();
