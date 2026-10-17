# Q-DEPLOY 배포 링크 최종 검수 (2026-10-18)

대상: https://magician-park.smu.ai.kr/ 및 practice/week01.html~week07.html.

결과: **Pass**. 기존 실제 배포 브라우저 검수의 내부 이동·사진 표시 확인에 이번 전체 URL 검사와 외부 링크 활성화 검사를 추가했다.

- 메인·1~7주차 8개 HTML에서 href/src 참조 260건(링크 191, script 32, img 22, stylesheet 등 link 15)을 추출했다.
- 검사한 문서를 포함하여 중복·fragment를 제외한 URL 83개 모두 GET HTTP 200으로 응답했다. 리다이렉트를 따라 최종 주소·응답 형식·크기를 기록했으며 TLS 검증을 유지했다.
- fragment가 있는 참조 107건 모두 대상 문서의 id/name이 존재한다.
- 외부 링크 참조 72건은 중복을 제외하면 fragment 포함 59개 목적지(문서 URL 기준 55개)다. 각 목적지를 Chrome headless에서 실제 배포 원본 페이지의 a 요소로 활성화하여 최종 HTTPS URL·document.readyState·제목/본문을 확인했다. 59건 모두 정상 로드됐다. 같은 목적지의 반복 링크는 HTTP·앵커 검사로 대조했다.
- GitHub 프로필·프로젝트 저장소 3개가 정상 열렸다.
- 배포 이미지·CSS·JavaScript의 응답 형식도 확인했다. 사진의 실제 표시·팝업 10개는 기존 배포 브라우저 기록의 정상 로드 결과를 함께 사용한다.
- 서울/천안 입력 폼 참고 페이지는 title이 비어 있지만 HTTP 200·readyState=complete이며 성명·이메일·캠퍼스 등 본문을 확인했다. 페이지 자체의 제목 누락을 깨진 링크로 처리하지 않았다.
- 외부 사이트의 모든 기능·콘텐츠 정확성을 평가한 것은 아니다. 링크 목적지의 정상 접속 범위를 검수했다. 로그인·폼 제출·개인정보 입력·소스 수정·커밋·푸시·배포는 수행하지 않았다.

## 근거

[HTTP·참조·fragment 검사 원본](deploy_link_audit_20261018.json) · [브라우저 외부 링크 활성화 원본](deploy_browser_links_20261018.json) · [기존 실제 배포 화면·동작 검수](browser_audit_20261018.md) · [사진 표시 확인](photo_actual_20261018.json)

## 외부 목적지별 브라우저 확인

| 출발 페이지 | 링크 | 로드한 문서 | 결과 |
|---|---|---|---|
| practice/week07.html | [목적지](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset) | HTMLFormElement: reset() method - Web APIs \| MDN | Pass |
| practice/week07.html | [목적지](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation) | Using HTML form validation and the Constraint Validation API - HTML \| MDN | Pass |
| practice/week07.html | [목적지](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/disabled) | disabled HTML attribute - HTML \| MDN | Pass |
| practice/week07.html | [목적지](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist) | <datalist> HTML data list element - HTML \| MDN | Pass |
| practice/week07.html | [목적지](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local) | <input type="datetime-local"> HTML attribute value - HTML \| MDN | Pass |
| practice/week07.html | [목적지](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/email) | <input type="email"> HTML attribute value - HTML \| MDN | Pass |
| practice/week07.html | [목적지](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file) | <input type="file"> HTML attribute value - HTML \| MDN | Pass |
| practice/week07.html | [목적지](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/password) | <input type="password"> HTML attribute value - HTML \| MDN | Pass |
| practice/week07.html | [목적지](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/week) | <input type="week"> HTML attribute value - HTML \| MDN | Pass |
| practice/week07.html | [목적지](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET) | GET request method - HTTP \| MDN | Pass |
| practice/week07.html | [목적지](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST) | POST request method - HTTP \| MDN | Pass |
| practice/week05.html | [목적지](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address) | Setting your commit email address - GitHub Docs | Pass |
| practice/week05.html | [목적지](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github) | About authentication to GitHub - GitHub Docs | Pass |
| practice/week05.html | [목적지](https://docs.github.com/en/get-started/using-git/about-git) | About Git - GitHub Docs | Pass |
| practice/week05.html | [목적지](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github) | Adding locally hosted code to GitHub - GitHub Docs | Pass |
| practice/week05.html | [목적지](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) | Git - First-Time Git Setup | Pass |
| practice/week05.html | [목적지](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) | Git - Recording Changes to the Repository | Pass |
| practice/week05.html | [목적지](https://git-scm.com/docs/git-init) | Git - git-init Documentation | Pass |
| practice/week05.html | [목적지](https://git-scm.com/docs/git-pull) | Git - git-pull Documentation | Pass |
| practice/week05.html | [목적지](https://git-scm.com/docs/git-push) | Git - git-push Documentation | Pass |
| practice/week05.html | [목적지](https://git-scm.com/docs/git-restore) | Git - git-restore Documentation | Pass |
| practice/week05.html | [목적지](https://git-scm.com/docs/gitignore) | Git - gitignore Documentation | Pass |
| practice/week05.html | [목적지](https://git-scm.com/install/) | Git - Install | Pass |
|  | [목적지](https://github.com/Magician-Park) | Magician-Park (Magician-Park) · GitHub | Pass |
|  | [목적지](https://github.com/Magician-Park/Claude_AI_APP) | GitHub - Magician-Park/Claude_AI_APP: Create a trucking app using Claude AI · GitHub | Pass |
|  | [목적지](https://github.com/Magician-Park/OSS_teamK-T) | GitHub - Magician-Park/OSS_teamK-T · GitHub | Pass |
| practice/week01.html | [목적지](https://home.cern/science/computing/the-birth-of-the-web/) | The birth of the Web – Home \| CERN | Pass |
| practice/week03.html | [목적지](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) | HTML Standard | Pass |
| practice/week07.html | [목적지](https://html.spec.whatwg.org/multipage/forms.html) | HTML Standard | Pass |
| practice/week06.html | [목적지](https://html.spec.whatwg.org/multipage/grouping-content.html) | HTML Standard | Pass |
| practice/week03.html | [목적지](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element) | HTML Standard | Pass |
| practice/week07.html | [목적지](https://html.spec.whatwg.org/multipage/obsolete.html) | HTML Standard | Pass |
| practice/week02.html | [목적지](https://html.spec.whatwg.org/multipage/obsolete.html#non-conforming-features) | HTML Standard | Pass |
| practice/week02.html | [목적지](https://html.spec.whatwg.org/multipage/semantics.html) | HTML Standard | Pass |
| practice/week02.html | [목적지](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element) | HTML Standard | Pass |
| practice/week02.html | [목적지](https://html.spec.whatwg.org/multipage/syntax.html) | HTML Standard | Pass |
| practice/week02.html | [목적지](https://html.spec.whatwg.org/multipage/syntax.html#elements-2) | HTML Standard | Pass |
| practice/week06.html | [목적지](https://html.spec.whatwg.org/multipage/tables.html) | HTML Standard | Pass |
| practice/week02.html | [목적지](https://html.spec.whatwg.org/multipage/text-level-semantics.html) | HTML Standard | Pass |
| practice/week07.html | [목적지](https://jo4008.smu.ai.kr/doc07.html) | 제목 없음 — 다양한 입력 폼 본문 확인 | Pass |
| practice/week01.html | [목적지](https://whatwg.org/faq) | FAQ — WHATWG | Pass |
| practice/week01.html | [목적지](https://www.internetsociety.org/blog/2016/09/final-report-on-tcpip-migration-in-1983/) | Final report on TCP/IP migration in 1983 - Internet Society | Pass |
| practice/week01.html | [목적지](https://www.rfc-editor.org/info/rfc1866/) | RFC 1866: Hypertext Markup Language - 2.0 \| RFC Editor | Pass |
| practice/week01.html | [목적지](https://www.rfc-editor.org/info/rfc791/) | RFC 791: Internet Protocol \| RFC Editor | Pass |
| practice/week01.html | [목적지](https://www.rfc-editor.org/info/rfc8200/) | RFC 8200: Internet Protocol, Version 6 (IPv6) Specification \| RFC Editor | Pass |
| practice/week01.html | [목적지](https://www.w3.org/History.html) | A Little History of the World Wide Web | Pass |
| practice/week06.html | [목적지](https://www.w3.org/TR/css-animations-1/) | CSS Animations Level 1 | Pass |
| practice/week06.html | [목적지](https://www.w3.org/TR/css-backgrounds-3/) | CSS Backgrounds and Borders Module Level 3 | Pass |
| practice/week06.html | [목적지](https://www.w3.org/TR/css-box-3/) | CSS Box Model Module Level 3 | Pass |
| practice/week06.html | [목적지](https://www.w3.org/TR/css-color-4/) | CSS Color Module Level 4 | Pass |
| practice/week06.html | [목적지](https://www.w3.org/TR/css-display-3/) | CSS Display Module Level 3 | Pass |
| practice/week06.html | [목적지](https://www.w3.org/TR/css-overflow-3/) | CSS Overflow Module Level 3 | Pass |
| practice/week06.html | [목적지](https://www.w3.org/TR/css-position-3/) | CSS Positioned Layout Module Level 3 | Pass |
| practice/week06.html | [목적지](https://www.w3.org/TR/css-sizing-3/) | CSS Box Sizing Module Level 3 | Pass |
| practice/week06.html | [목적지](https://www.w3.org/TR/css-transforms-1/) | CSS Transforms Module Level 1 | Pass |
| practice/week06.html | [목적지](https://www.w3.org/TR/css-transitions-1/) | CSS Transitions Module Level 1 | Pass |
| practice/week03.html | [목적지](https://www.w3.org/TR/png-3/) | Portable Network Graphics (PNG) Specification (Third Edition) | Pass |
| practice/week05.html | [목적지](https://www.w3.org/TR/selectors-4/) | Selectors Level 4 | Pass |
| practice/week01.html | [목적지](https://www.w3.org/press-releases/2014/html5-rec/) | Open Web Platform Milestone Achieved with HTML5 Recommendation \| 2014 \| Press releases \| W3C | Pass |
