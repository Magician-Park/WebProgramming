# 3주차 실습 기록 – 저장 페이지 분석

제공한 원본 ZIP은 읽기만 했고 저장 페이지의 JavaScript를 실행하거나 외부 리소스를 요청하지 않았다. 실제 저장본의 수정 내용을 사진과 대조했다. 원본 기사·웹툰의 내용 전체를 복제하지 않고 링크 구조와 관련 기능만 기록했다.

## 확인한 원본

- '수시 먹통' 354건 구제 확정…'경쟁률 확인 뒤 접수' 3건, 취소 권고.zip
- 헤어지기 싫어! - 1화 _ 네이버 웹툰.zip

추가 자료: `a href = #up.png`, `span id = 'up'.png`, `<a>.png`. 캡처에는 본문 a 요소, href 추가, 기사 제목 span의 id 추가 과정이 나타난다.

| 저장 문서 | 실제 도착점 | 실제 이동 링크 | 행 번호 |
|---|---|---|---|
| 뉴스 기사 | 제목의 span, id="up", class="up_class" | 본문 문구를 a href="#up"으로 감쌈 | 979 / 1134 |
| 웹툰 1화 | 상단 연령 안내 img, id="up" | 아래쪽 콘텐츠 이미지(content_image_80)를 a href="#up"으로 감쌈 | 559 / 724 |

최상위 HTML을 기준으로 뉴스는 4,651행, 웹툰은 849행이다. 두 문서 각각 id="up"과 href="#up"이 1개씩 존재한다. 행 번호는 제공한 저장본 기준이며 수정 시 바뀔 수 있다.

## 원래 TOP 버튼과의 구분

- 뉴스 HTML: id="goTop", class에 `_MOVE_TOP`. 로컬 `read.min.js`에서 클릭 이벤트가 기본 링크 이동을 막고 `moveTop()`을 호출하며, 함수 본문은 `window.scrollTo(0,0)`이다.
- 웹툰 HTML: `button.link_top`. 로컬 `detail-scrolltoon-909dd3d960eac23bf207.js`에서 `.up_down_area .link_top`에 클릭 이벤트를 연결하고 `window.scrollTo(0,0)`을 호출한다.
- 웹툰의 `onclick="nclk_v2(...)"`만 보고 스크롤 동작을 추정하지 않고 연결된 스크립트를 확인했다.
- 직접 추가한 `href="#up"`은 지정한 요소로 이동하고, 원래 TOP의 좌표 이동은 페이지의 맨 위로 이동한다. 지정 요소가 중간에 있으면 도착 위치가 다르다.

## 재구성한 학습 페이지

- 뉴스 예제: span#up과 글자 링크 a[href="#up"].
- 웹툰 예제: img#toon-up과 이미지를 감싼 a[href="#toon-up"]. 같은 학습 문서에서 중복 ID가 생기지 않도록 원본의 두 up을 구분했다.
- 그림은 `practice/anchor-panel.svg`로 독립 제작했으며 실제 웹툰 장면이 아니다.
- 예제 이동 영역은 편집기 저장 시 링크·id·이미지 구조를 유지하도록 고정했다. 설명과 코드 텍스트는 편집할 수 있다.
- 학습 페이지는 기존 외부 CSS의 smooth 스크롤과 reduced-motion 설정을 사용한다.

소스 검사: 두 실습 링크가 존재하는 목표 ID로 연결됨, 모든 ID 고유, SVG/외부 CSS/스크립트 경로 존재, W3C HTML 오류·경고 0건. 실제 브라우저에서의 스크롤 도착 위치·이미지 표시·키보드 클릭은 최종 직접 검수 대기다.

## 추가 강의자료 – Lec03 2~19쪽

「[웹프로그래밍] Lec03. 링크와 멀티미디어」 PDF의 실제 파일 페이지 2~19쪽(슬라이드 쪽수와 일치)을 텍스트 추출과 렌더링으로 확인했다. 전체 40쪽 중 요청한 18쪽만 학습 페이지에 추가했다. 20쪽 이후 오디오·비디오는 범위 밖이다.

| PDF 쪽 | 추가한 학습 내용 |
|---|---|
| 2~3 | 하이퍼텍스트·하이퍼미디어, 노드·링크·앵커 |
| 4~8 | a·href·title, 절대 주소와 상대 주소, 문서 사이의 이동 |
| 9~12 | id와 # 프래그먼트, 문서 안의 책갈피, 기존 뉴스·웹툰 실습과의 연결 |
| 13~14 | GIF·JPEG·PNG 특징과 이미지 내용·설정에 따른 압축 크기 차이 |
| 15~16 | img의 src·width·height·alt, 경로와 비율, CSS 정렬 |
| 17~19 | figure·figcaption, 이미지를 a로 감싸는 링크, 그림·설명 예제 |

보완: 자료 19쪽의 figcation은 figcaption으로 고쳤다. 코드의 스마트 따옴표·닫는 br·ol의 자식 구조는 표준 HTML 문법으로 정리했다. PNG는 비압축이 아닌 무손실 압축 형식으로 설명하며 GIF의 크기를 항상 최소라고 일반화하지 않았다. title은 보조 설명이고 접근 가능한 링크 텍스트나 alt를 대신하지 않는다.

- [W3C PNG 규격](https://www.w3.org/TR/png-3/): 무손실 압축·알파 채널.
- [WHATWG figure](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element): 콘텐츠와 figcaption의 구조.
- [WHATWG img](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element): 이미지와 대체 텍스트.

기존 실습 영역과 #up·#toon-up 도착점은 유지했다. 앞에 강의 영역 3개·비교표 4개·연결된 figure 예제를 추가했고 복습 질문은 총 8개다. 강의 원본 PDF·표지 이미지 전체는 제출 ZIP에 넣지 않았다.
