# 7주차 학습 범위와 출처

작성일: 2026-10-17

자료: 작성자가 제공한 Lec06 다양한 입력 폼 PDF 전체 1~24쪽. 전체 텍스트 추출과 24쪽 렌더링을 확인했다.

| PDF 쪽 | 정리한 내용 | 직접 실험 |
|---|---|---|
| 1~4 | form의 역할, action·method, GET/POST | 요청 모양·이름별 값 미리보기 |
| 5~7 | type/name/value, text·password·textarea | 텍스트·기본 문장·암호 표시 |
| 8~9 | radio·checkbox·select·multiple | 단일/복수 선택과 전송 목록 |
| 10~11 | submit·reset·button·image | 제출 미리보기·초기화·일반/이미지 버튼 |
| 12 | file·hidden·label | 파일 이름/크기, 숨김 값, label 연결 |
| 13~14 | fieldset·legend와 입력 그룹 | 그룹별 선택과 접근 가능한 이름 |
| 15~17 | 고급 type·속성·유효성 검사 | required·pattern·email·url·tel·search·number |
| 18~20 | date/month/week/time/datetime-local | 날짜 범위·15분 간격·시작/종료 관계 |
| 21~22 | number/range/color, datalist | 범위·값 출력·색 코드·후보 외 입력 |
| 23~24 | 도서 구입 요청 예제 | 추천 가격 연동·수량 변경·합계 계산 |
| 추가 응용 | 퀴즈·학습 체크리스트 | 5문항 채점·해설·progress·체크만 로컬 보관 |

## 보완한 부분

- GET/POST는 전송 위치를 구분하며 POST만으로 암호화되는 것은 아니다. ‘POST 양에 제한 없음’은 실제 서버 등의 제한과 구분했다.
- form_app.js 같은 주소만 적는다고 서버가 자동 구현되는 것은 아니라고 설명했다.
- textarea를 빈 요소처럼 닫는 표기와 스마트 따옴표를 현재 HTML 문법으로 정리했다.
- id/label과 name/value를 구분했다. readonly는 전송되고 disabled는 제외되는 차이를 실험한다.
- reset은 값을 모두 비우는 동작이 아니라 원래 value·checked·selected로 돌아가는 동작이다.
- hidden은 비밀 저장소나 자동 IP 확인 기능이 아니다.
- fieldset/legend는 보조 기술에도 그룹 관계를 제공한다.
- email/URL 타입은 입력 구문을 검사하며 실제 계정·사이트 존재 여부를 확인하지 않는다. tel은 pattern 등을 별도 지정한다.
- datetime과 keygen은 폐기 기능으로 구분했다. 새 실행 예제에 사용하지 않았다.
- week는 ISO 주 기준이며 datetime-local은 시간대를 포함하지 않는다. 브라우저별 선택 UI·지원 차이를 설명했다.
- datalist는 제안일 뿐 입력 제한이 아니다. 가격 자동 연동과 output 계산은 JavaScript 추가 기능이다.

## 공식 참고 문서

- [WHATWG 폼](https://html.spec.whatwg.org/multipage/forms.html)
- [WHATWG input](https://html.spec.whatwg.org/multipage/input.html)
- [WHATWG 폐기 기능](https://html.spec.whatwg.org/multipage/obsolete.html)
- [MDN GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET), [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST)
- [MDN FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)
- [MDN reset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)
- [MDN disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/disabled), [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/readonly)
- [MDN 제약 검증](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation)
- [MDN datetime-local](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local), [week](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/week)
- [MDN datalist](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist)
- [MDN email](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/email), [password](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/password), [file](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file)

## 구현 범위

비교표 7개, 폼 6개, 실행 예제 7종과 학습 체크리스트를 포함한 고정 실험 묶음 8개, 채점 퀴즈 5문항, 설명형 복습 6개. 기존 TOP·로딩·문서 편집을 유지했다. 실험 예제는 편집에서 제외하며 다운로드 HTML에는 초기 구조를 복원한다. 따라서 암호·파일 정보·폼 입력·채점 결과를 제출 HTML에 남기지 않는다. 체크 여부 6개만 별도 로컬 저장하며 제한 시 화면에서 유지한다.

실행 버튼은 이벤트 등록 전 비활성 상태다. JavaScript가 준비되면 활성화하고 submit은 preventDefault로 차단해 결과를 현재 화면에 표시한다. 입력 실험은 실제 서버 제출·로그인·예약·구입·업로드 기능이 아니다. 파일 내용은 읽지 않고 이름·크기만 표시하며 암호는 확인 메시지에 포함하지 않는다.

## 검수와 한계

- 메인 최종 HTML W3C 오류·경고 0. 주차 CSS 전체 오류 0·경고 149(warning=2 전체 경고 기준; 이전 중요 경고 모드 27개와 구분).
- 새 7주차 전체 문서는 외부에 전송하지 않았다. 7주차의 기존 W3C 응답은 예시 문서 시점이며 현재 문서는 로컬 구조·연결 검사로 확인했다.
- JavaScript 문법 검사와 실제 소스 기반 모의 DOM에서 제출 차단·값 미리보기·안전한 텍스트 출력·검사 실패 분기·시작/종료 관계·합계·reset 후 갱신·암호/파일 처리·채점/초기화·체크 목록 복원/손상/저장 제한을 검사했다.
- 실제 7개 문서의 편집·취소·저장·복원·다운로드와 실험 결과가 HTML 다운로드에서 제거되는 것을 모의 DOM에서 확인했다.
- 브라우저 고유의 달력·색상 선택기·native 제약 검증 안내·모바일 화면은 직접 검수하지 못했다. 모의 DOM 검사는 브라우저 엔진의 제약 검증 자체를 대체하지 않는다.
- Git 설정·커밋·push·배포는 수행하지 않았다.

## 서울·천안 도서관 선택 추가 실습

작성자가 제공한 doc06.html과 [웹 참고 페이지](https://jo4008.smu.ai.kr/doc07.html)를 비교했다. 두 자료의 캠퍼스 코드가 달라 실행 예제는 첨부 파일의 작성 의도인 00=천안·01=서울을 따른다. 새 목차·원본 비교표·코드·선택/요청값 미리보기·초기화·복습 2개를 추가했다. [출처·보완 기록](library_sources.md), [검사 기록](library_check.txt)을 참고한다. 새 스크립트는 입력을 전송·저장하지 않으며 문서 다운로드는 실행 영역을 초기화한다.
