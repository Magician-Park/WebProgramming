# 개인 이력서 – REPORT

| 항목 | 내용 |
|---|---|
| 활동명 | Magician-Park |
| 배포 URL | https://magician-park.smu.ai.kr/ |
| 작성일 | 2026-10-20 |

---

## 1. 인수 검수표

| ID | 확인 방법 | 결과 | 근거 |
|---|---|---|---|
| F-01 | ① 활동명 Magician-Park 확인. ② 상명대학교 소프트웨어학과 3학년 표시 확인. ③ 웹·AI 관심 분야를 담은 소개가 50자 이내인지 확인. ④ 창 너비 1280px에서 활동명·소속·소개가 첫 화면에 보이는지 확인. | Pass | [1280px 첫 화면](images/check_header_desktop.jpg) |
| F-02 | ① header의 GitHub 프로필 링크 확인. ② Magician-Park 프로필로 연결되는지 확인. ③ 이메일·전화번호 등 별도 연락처가 없는지 확인. | Pass | [header GitHub](images/check_header_desktop.jpg) · [모바일 GitHub](images/check_header_mobile.jpg) |
| F-03 | ① 실적 11건과 고교 시절 실적 5건 확인. ② 각 실적의 시기·분류·내용·본인 역할 확인. ③ 교육·자격·수상·활동 분류 확인. ④ 최신순 정렬 확인. ⑤ table과 열 제목으로 구성된 4열 표 확인. | Pass | [실적표](images/check_all_desktop.jpg) · [활동 항목](images/check_activity_desktop.jpg) |
| F-04 | ① 수강 과목 6개와 학수번호 확인. ② 전공선택 4과목·전공심화 2과목 표시 확인. ③ 웹프로그래밍 및 AI에이전트 활용(PBL) 카드의 #weekly 연결 확인. | Pass | [수강 과목](images/check_courses_desktop.jpg) · [모바일 수강 과목](images/check_courses_mobile.jpg) |
| F-05 | ① 1주차부터 15주차까지 표시 확인. ② 1·2·3·5·6·7주차의 학습 기록 연결 확인. ③ 4주차 추석연휴·8주차 중간고사와 9주차부터 15주차까지의 기입 예정 표시·링크 없음 확인. ④ 학습 기록은 초록색, 휴강·시험·예정은 회색으로 구분되는지 확인. | Pass | [주차별 학습 기록](images/check_full_desktop.jpg) · [모바일 주차 표시](images/check_full_mobile.jpg) |
| F-06 | ① footer의 최종 수정일과 time 요소 확인. ② footer 날짜와 최신 커밋의 한국 날짜 대조 완료. | Pass | [footer](images/check_full_desktop.jpg) · 작성자 대조 확인 |
| Q-HTML | W3C Nu 검사기를 로컬에서 실행하여 메인과 학습 기록 HTML 7개의 오류 0개·경고 0개 확인. | Pass | [HTML 검사 결과](images/check_report_validation_20261020.png) |
| Q-CSS | W3C Nu 검사기로 외부 CSS 2개의 오류 0개·경고 0개 확인. 인라인 스타일·표현용 태그가 없는지 확인. 1280px·390px에서 화면 배치와 표의 내부 가로 스크롤 확인. | Pass | [CSS 검사 결과](images/check_report_validation_20261020.png) · [데스크톱](images/check_full_desktop.jpg) · [모바일](images/check_full_mobile.jpg) · [표 가로 이동](images/check_activity_mobile_right.jpg) |
| Q-DEPLOY | 배포 URL의 HTTP 200 응답 확인. 제출본과 동일한 내용으로 배포 완료. 오류 없음. | Pass | [제출본 전체 화면](images/check_full_desktop.jpg) · [모바일 화면](images/check_full_mobile.jpg) |

---

## 2. 완성도 분석

완성도 = 충족(Pass)한 요구사항 수 ÷ 평가 대상 요구사항 수(9) = 9 / 9 = 100%

### 요구사항과 결과가 다른 부분

없습니다.

### 다음에 다르게 할 점

경험 표를 연도별 타임라인으로도 볼 수 있게 하고, 각 프로젝트에 해결하려던 문제·사용 기술·본인 역할·결과·배운 점을 담은 상세 페이지를 연결하고 싶습니다. 실행 가능한 데모를 제공하여 웹·AI 분야에서 쌓은 역량을 실제 결과물로 보여주겠습니다. 모바일에서는 경험 표를 카드 형태로 전환해 시기와 역할을 가로 스크롤 없이 읽을 수 있도록 개선하고 싶습니다.

학습 기록에는 주차와 주제를 함께 찾는 검색·태그 기능을 넣고, 관련 개념과 실습을 서로 연결하고 싶습니다. 복습퀴즈의 오답을 모아 다시 풀고 학습 진행도를 확인하는 기능도 추가하여, 수업 내용을 꾸준히 복습하고 성장 과정을 살펴볼 수 있는 개인 학습 포트폴리오로 발전시키겠습니다.

---

## 3. 추가 요구사항 제안 (선택 – 가산점)

### 요구사항 정의

| ID | 요구사항 | 제안 이유 | 수용 기준 |
|---|---|---|---|
| A-01 | 페이지 내 이동 편의 | 긴 페이지에서 원하는 영역으로 쉽게 이동하기 위해. | ① 오른쪽 아래 TOP 버튼이 고정되고 클릭 시 상단으로 이동한다. ② header 메뉴로 경험·수강 과목·학습 기록에 이동한다. ③ 본 과목 카드를 클릭하면 #weekly로 이동한다. |
| A-02 | 실적 관련 자료 확인 | 실적의 증빙 사진과 프로젝트 결과물을 확인하기 위해. | ① 각 실적의 사진 아이콘으로 사진과 설명을 연다. ② 닫기 버튼·Esc로 팝업을 닫는다. ③ AX 교육의 트럭 아이콘으로 팜카고 앱 데모를 열고, OSS 해커톤의 GitHub 아이콘으로 저장소를 연다. |
| A-03 | 실적 분류별 보기 | 실적이 많을 때 원하는 분류를 빠르게 확인하기 위해. | ① 전체 11건과 분류별 건수를 표시한다. ② 교육·자격·수상·활동 버튼을 제공한다. ③ 선택한 분류의 실적만 표시하고 전체 버튼으로 복원한다. |
| A-04 | 학습 기록 편집·저장 | 학습 내용을 웹페이지에서 수정하고 보관하기 위해. | ① 학습 기록의 제목·본문·코드를 편집한다. ② 취소하면 원래 내용으로 돌아간다. ③ 저장 후 새로고침해도 내용이 유지된다. ④ 수정 내용을 HTML 파일로 내려받는다. |

### 검수

| ID | 확인 방법 | 결과 | 근거 |
|---|---|---|---|
| A-01 | ① 고정 TOP 버튼과 #top 이동 확인. ② header의 세 영역 이동 링크 확인. ③ 수강 과목 카드의 #weekly 이동 확인. | Pass | [영역 이동 메뉴](images/check_header_desktop.jpg) · [TOP·수강 과목](images/check_full_desktop.jpg) |
| A-02 | ① 사진 11개의 개별 제목·설명과 이미지 표시 확인. ② 닫기 버튼·Esc로 닫기와 초점 복귀 확인. ③ AX 교육의 팜카고 앱 데모와 OSS 해커톤의 저장소 연결 확인. | Pass | [사진 팝업](images/check_photo_desktop.jpg) · [모바일 팝업](images/check_photo_mobile.jpg) · [실적별 아이콘](images/check_all_desktop.jpg) · [모바일 앱 데모](images/check_app_demo_mobile.jpg) |
| A-03 | ① 전체 11·교육 1·자격 3·수상 6·활동 1건 표시 확인. ② 다섯 분류 버튼 확인. ③ 분류별 표시와 전체 복원 확인. | Pass | [전체 분류](images/check_all_desktop.jpg) · [활동 선택](images/check_activity_desktop.jpg) · [모바일 분류](images/check_activity_mobile.jpg) |
| A-04 | ① 학습 기록의 제목·본문·코드 수정 확인. ② 취소 시 원문 복원 확인. ③ 저장 후 새로고침 시 내용 유지 확인. ④ 해당 주차 이름의 HTML 다운로드와 수정 내용 포함 확인. | Pass | [문서 편집](images/check_editor.jpg) · [저장 내용 확인](images/check_editor_saved.jpg) |
