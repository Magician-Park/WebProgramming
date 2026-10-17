(() => {
  'use strict';
  const panel = document.querySelector('.document-editor');
  if (!panel) return;
  const buttons = Object.fromEntries(Array.from(panel.querySelectorAll('[data-editor-action]'), button => [button.dataset.editorAction, button]));
  const status = panel.querySelector('.editor-status');
  const selector = '.practice-header h1, .practice-header .introduction, .practice-main h2, .practice-main h3, .practice-main p, .practice-main li, .practice-main caption, .practice-main th, .practice-main td, .practice-main summary, .practice-main a, .practice-main code, .practice-main .swatch';
  const candidates = Array.from(document.querySelectorAll(selector));
  const fixedExamples = Array.from(document.querySelectorAll('[data-editor-readonly]'));
  const fields = candidates.filter(field => !fixedExamples.some(example => example.contains(field)) && !(field.getAttribute('class') || '').split(/\s+/).includes('sr-only') && !candidates.some(other => other !== field && field.contains(other)));
  const filename = location.pathname.split('/').pop() || 'practice.html';
  const storageKey = 'magician-park:practice:' + filename + ':v1';
  const labSnapshots = Array.from(document.querySelectorAll('[data-lab-root]'), lab => lab.cloneNode(true));
  const originalAttributes = new Map();
  const editingAttributes = ['contenteditable', 'tabindex', 'role', 'aria-label', 'aria-multiline'];
  let editing = false;
  let snapshot = [];
  const read = () => fields.map(field => field.textContent);
  const apply = values => fields.forEach((field, index) => {
    if (typeof values[index] === 'string') field.textContent = values[index];
  });
  const announce = message => { status.textContent = message; };
  const insertText = (field, value) => {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount || !field.contains(selection.anchorNode) || !field.contains(selection.focusNode)) return;
    const range = selection.getRangeAt(0);
    range.deleteContents();
    const text = document.createTextNode(value);
    range.insertNode(text);
    range.setStartAfter(text);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  };
  fields.forEach((field, index) => {
    field.dataset.editorField = String(index);
    const classes = (field.getAttribute('class') || '').split(/\s+/).filter(Boolean);
    if (!classes.includes('document-text')) classes.push('document-text');
    field.setAttribute('class', classes.join(' '));
    originalAttributes.set(field, Object.fromEntries(editingAttributes.map(name => [name, field.getAttribute(name)])));
    field.addEventListener('click', event => {
      if (editing && field.tagName === 'A') event.preventDefault();
    });
    field.addEventListener('paste', event => {
      if (!editing) return;
      event.preventDefault();
      insertText(field, event.clipboardData.getData('text/plain'));
    });
    field.addEventListener('beforeinput', event => {
      if (editing && (event.inputType === 'insertParagraph' || event.inputType === 'insertLineBreak')) {
        event.preventDefault();
        insertText(field, '\n');
      }
    });
    field.addEventListener('keydown', event => {
      if (editing && event.key === 'Enter' && !event.isComposing) {
        event.preventDefault();
        insertText(field, '\n');
      }
      if (editing && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
        event.preventDefault();
        buttons.save.click();
      }
    });
  });
  const restoreAttributes = (field, target = field) => {
    for (const [name, value] of Object.entries(originalAttributes.get(field))) {
      if (value === null) target.removeAttribute(name);
      else target.setAttribute(name, value);
    }
  };
  const updateMode = active => {
    editing = active;
    fields.forEach(field => {
      if (active) {
        field.setAttribute('contenteditable', 'true');
        field.setAttribute('tabindex', '0');
        field.setAttribute('role', 'textbox');
        field.setAttribute('aria-label', '수정할 문서 내용');
        field.setAttribute('aria-multiline', 'true');
      } else restoreAttributes(field);
    });
    buttons.edit.hidden = active;
    buttons.save.hidden = !active;
    buttons.cancel.hidden = !active;
    buttons.download.disabled = active;
  };
  buttons.edit.addEventListener('click', () => {
    snapshot = read();
    updateMode(true);
    announce('점선으로 표시된 내용을 수정하세요. 저장하거나 취소할 수 있습니다.');
    if (fields[0]) fields[0].focus();
  });
  buttons.cancel.addEventListener('click', () => {
    apply(snapshot);
    updateMode(false);
    announce('수정을 취소했습니다.');
    buttons.edit.focus();
  });
  buttons.save.addEventListener('click', () => {
    const values = read();
    // Keep user input as text, including pasted code and angle brackets.
    apply(values);
    try {
      localStorage.setItem(storageKey, JSON.stringify({ version: 1, values }));
      announce('이 브라우저에 저장했습니다. 제출하려면 HTML을 내려받으세요.');
    } catch {
      announce('브라우저 저장이 제한되어 화면에만 반영했습니다. 창을 닫기 전에 HTML을 내려받으세요.');
    }
    updateMode(false);
    buttons.edit.focus();
  });
  buttons.download.addEventListener('click', () => {
    if (editing) return;
    const copy = document.documentElement.cloneNode(true);
    Array.from(copy.querySelectorAll('[data-editor-field]')).forEach((field, index) => {
      restoreAttributes(fields[index], field);
      field.removeAttribute('data-editor-field');
    });
    // Export the loader's initial state rather than any temporary runtime state.
    const copyLoader = copy.querySelector('[data-page-loader]');
    if (copyLoader) {
      copyLoader.hidden = true;
      copyLoader.setAttribute('class', 'page-loader');
    }
    const copyMain = copy.querySelector('main');
    if (copyMain) copyMain.removeAttribute('aria-busy');
    Array.from(copy.querySelectorAll('[data-lab-root]')).forEach((lab, index) => {
      if (labSnapshots[index]) lab.replaceWith(labSnapshots[index].cloneNode(true));
    });
    const copyPanel = copy.querySelector('.document-editor');
    copyPanel.hidden = true;
    copyPanel.querySelector('.editor-status').textContent = '';
    copyPanel.querySelector('[data-editor-action="edit"]').hidden = false;
    copyPanel.querySelector('[data-editor-action="save"]').hidden = true;
    copyPanel.querySelector('[data-editor-action="cancel"]').hidden = true;
    copyPanel.querySelector('[data-editor-action="download"]').disabled = false;
    const title = copy.querySelector('title');
    if (title && fields[0]) title.textContent = fields[0].textContent + ' | 주차별 실습';
    const blob = new Blob(['<!DOCTYPE html>\n' + copy.outerHTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    announce('HTML 다운로드를 요청했습니다. practice 폴더의 같은 이름 파일로 교체하세요.');
  });
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (saved && saved.version === 1 && Array.isArray(saved.values) && saved.values.length === fields.length && saved.values.every(value => typeof value === 'string')) {
      apply(saved.values);
      announce('이 브라우저에 저장된 문서를 불러왔습니다.');
    }
  } catch {
    announce('브라우저에 저장된 문서를 읽을 수 없습니다. 편집 후 HTML 다운로드는 사용할 수 있습니다.');
  }
  panel.hidden = false;
  updateMode(false);
  window.addEventListener('beforeunload', event => {
    if (editing && JSON.stringify(read()) !== JSON.stringify(snapshot)) {
      event.preventDefault();
      event.returnValue = '';
    }
  });
})();
