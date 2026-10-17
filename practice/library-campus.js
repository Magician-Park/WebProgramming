(() => {
  'use strict';
  const form = document.getElementById('lab7-library');
  if (!form) return;
  const current = document.getElementById('lab7-campus-current');
  const result = document.getElementById('lab7-library-result');
  const check = document.getElementById('lab7-library-check');
  const submit = form.querySelector('[data-campus-submit]');
  const initialResult = result.textContent;
  const campuses = { '00': '천안', '01': '서울' };
  const selected = () => Array.from(form.querySelectorAll('[data-campus-choice]')).find(input => input.checked);
  const update = () => {
    const input = selected();
    current.value = input ? '현재 선택: ' + campuses[input.value] + ' · campuscode=' + input.value : '캠퍼스를 선택하세요.';
  };
  form.addEventListener('change', update);
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.classList.add('is-validated');
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const fields = Array.from(new Set(data.keys()), key => key + ': ' + JSON.stringify(data.getAll(key)));
    result.textContent = '캠퍼스: ' + campuses[data.getAll('campuscode')[0]] + '\n\nGET 쿼리: ?' + new URLSearchParams(data).toString() + '\n\n이름별 값\n' + fields.join('\n') + '\n\n이 화면에서만 확인했으며 실제 신청·전송·저장은 하지 않았습니다.';
  });
  form.addEventListener('reset', () => {
    window.setTimeout(() => {
      form.classList.remove('is-validated');
      update();
      result.textContent = initialResult;
    }, 0);
  });
  check.addEventListener('click', () => {
    const input = selected();
    result.textContent = input ? '현재 캠퍼스는 ' + campuses[input.value] + '(campuscode=' + input.value + ')입니다. 일반 버튼은 폼을 제출하지 않습니다.' : '먼저 캠퍼스를 선택하세요.';
  });
  update();
  submit.disabled = false;
  check.disabled = false;
})();
