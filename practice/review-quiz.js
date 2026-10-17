(() => {
  'use strict';
  document.querySelectorAll('[data-review-quiz]').forEach(form => {
    const questions = Array.from(form.querySelectorAll('[data-answer]'));
    const result = form.querySelector('[data-quiz-result]');
    const feedback = form.querySelector('[data-quiz-feedback]');
    const progress = form.querySelector('progress');
    const button = form.querySelector('[data-quiz-grade]');
    const initialMessage = result.textContent;
    const clear = message => {
      feedback.replaceChildren();
      progress.value = 0;
      progress.textContent = '0 / ' + questions.length;
      result.textContent = message;
    };
    const grade = () => {
      if (!form.reportValidity()) return;
      let score = 0;
      feedback.replaceChildren();
      questions.forEach((question, index) => {
        const chosen = question.querySelector('input:checked');
        const correct = chosen && chosen.value === question.dataset.answer;
        if (correct) score++;
        const answer = Array.from(question.querySelectorAll('input')).find(input => input.value === question.dataset.answer);
        const answerText = answer.closest('label').textContent.trim();
        const item = document.createElement('li');
        item.textContent = (index + 1) + '번 ' + (correct ? '정답' : '오답') + ' · 정답: ' + answerText + ' — ' + question.dataset.explanation;
        feedback.appendChild(item);
      });
      progress.value = score;
      progress.textContent = score + ' / ' + questions.length;
      result.textContent = questions.length + '문항 중 ' + score + '문항 정답. 아래 해설을 확인하세요.';
    };
    // Keep Enter-key submission inside the page as well as the grading button.
    form.addEventListener('submit', event => {
      event.preventDefault();
      grade();
    });
    button.addEventListener('click', grade);
    form.addEventListener('change', () => clear('답을 선택하거나 변경했습니다. 모두 답한 뒤 채점하세요.'));
    form.addEventListener('reset', () => {
      window.setTimeout(() => clear(initialMessage), 0);
    });
    button.disabled = false;
  });
})();
