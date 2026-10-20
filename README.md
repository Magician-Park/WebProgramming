# Magician-Park 개인 이력서

교육·자격·수상·활동 경험과 수강 과목, 웹프로그래밍 학습 기록을 담은 개인 이력서 웹사이트입니다.

| 항목 | 내용 |
|---|---|
| 활동명 | Magician-Park |
| 소속 | 상명대학교 소프트웨어학과 3학년 |
| 관심 분야 | AI · Data Science · App development |
| 웹사이트 | https://magician-park.smu.ai.kr/ |
| GitHub | https://github.com/Magician-Park |
| 사용 기술 | HTML5 · CSS · JavaScript |

---

## 1. 웹사이트 구성

| 영역 | 내용 |
|---|---|
| 소개 | 활동명·소속·관심 분야와 GitHub 프로필 링크 |
| 쌓아온 경험 | 실적 11건을 시기·분류·내용·본인 역할의 4열 표로 최신순 표시 |
| 이번 학기의 배움 | 2026년 2학기 수강 과목 6개와 학수번호 표시 · 전공선택 4과목·전공심화 2과목 |
| 매주 만드는 기록 | 1~15주차 학습 기록과 휴강·시험·예정 일정 표시 |

### 주요 기능

- **실적 분류**: 전체 11건·교육 1건·자격 3건·수상 6건·활동 1건을 분류별로 확인합니다.
- **사진·결과물 보기**: 실적 옆 사진 아이콘으로 증빙 사진과 설명을 열고, GitHub 아이콘으로 관련 프로젝트 저장소에 이동합니다.
- **학습 기록 편집**: 주차별 제목·본문·코드를 수정하고 저장·취소하거나 HTML 파일로 내려받습니다.
- **학습·실습**: 복습퀴즈, CSS 효과·회전 예제, 입력 폼·유효성 검사 등을 직접 실행합니다.
- **페이지 탐색**: 영역 이동 메뉴와 고정 TOP 버튼으로 원하는 위치에 이동합니다.
- **반응형 화면**: 화면 너비에 따라 배치를 조정하고, 모바일 실적 표는 내부 가로 스크롤로 확인합니다.

---

## 2. 주차별 학습 기록

| 주차 | 내용 |
|---|---|
| [1주차](practice/week01.html) | 웹의 역사·HTML·인터넷·IP·DNS·URL |
| [2주차](practice/week02.html) | HTML5 문서 구조·요소·속성·텍스트 |
| [3주차](practice/week03.html) | 링크·이미지·문서 내 이동·TOP 실습 |
| 4주차 | 추석연휴 |
| [5주차](practice/week05.html) | CSS 기초·선택자·Git·GitHub 작업 흐름 |
| [6주차](practice/week06.html) | 목록·표·문서 구조·박스 모델·레이아웃·변형·회전 |
| [7주차](practice/week07.html) | 입력 폼·유효성 검사·폼 실험·복습퀴즈 |
| 8주차 | 중간고사 |
| 9~15주차 | 기입 예정 |

---

## 3. 실행 및 사용 방법

별도 설치나 빌드 없이 [index.html](index.html)을 브라우저로 열어 확인할 수 있습니다. 로컬 서버를 사용하려면 프로젝트 폴더에서 다음 명령을 실행한 뒤 http://localhost:8000/ 에 접속합니다.

```sh
python3 -m http.server 8000
```

학습 기록 페이지에서 **문서 수정 → 내용 편집 → 저장** 순서로 내용을 보관합니다. **취소**하면 편집 전 내용으로 돌아가고, **수정한 HTML 다운로드**로 수정본을 내려받습니다.

저장 내용은 현재 브라우저에 적용됩니다. 원본 파일에 반영하려면 내려받은 HTML을 검토한 뒤 `practice/`의 같은 이름 파일과 교체합니다.

---

## 4. 주요 파일 구성

| 파일·폴더 | 역할 |
|---|---|
| [index.html](index.html) | 개인 이력서 메인 페이지 |
| [style.css](style.css) | 메인 화면·공통 반응형 스타일 |
| [achievement-filter.js](achievement-filter.js) | 실적 분류·건수·선택 상태·전환 효과 |
| [certificate-dialog.js](certificate-dialog.js) | 사진 팝업 열기·닫기·초점 복원 |
| [page-loader.js](page-loader.js) | 내부 페이지 이동 시 로딩 표시 |
| [practice/](practice/) | 주차별 학습 기록·실습 예제·그림 |
| [practice/practice.css](practice/practice.css) | 학습 기록·실습·편집 화면 스타일 |
| [practice/editor.js](practice/editor.js) | 문서 편집·브라우저 저장·HTML 다운로드 |
| [practice/review-quiz.js](practice/review-quiz.js) | 복습퀴즈 채점·정답 안내 |
| [practice/forms-lab.js](practice/forms-lab.js) | 입력 폼 실험·검사·계산·체크리스트 |
| [practice/library-campus.js](practice/library-campus.js) | 서울·천안 캠퍼스 선택·도서 요청 폼 실험 |
| [images/](images/) | 실적 사진·화면 캡처·검수 자료 |
| [REPORT.md](REPORT.md) | 인수 검수표·완성도 분석·추가 요구사항 |

---

## 5. 검수

HTML·CSS 문법, 실적 분류와 사진 팝업, 내부 링크, 반응형 화면, 키보드 조작 및 학습 기록 편집 기능의 확인 결과는 [REPORT.md](REPORT.md)에 정리했습니다.
