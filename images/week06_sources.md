# 6주차 학습 범위와 출처

작성일: 2026-10-15

## 사용 범위

- Lec02: PDF 실제 45~61쪽, 총 17쪽.
- Lec05: PDF 전체 1~18쪽, 총 18쪽.
- 시험 강조 항목과 ‘이미지를 360도 rotate하기’는 작성자가 전달한 수업 안내를 반영한다. 독립적으로 출제 여부를 확인하지 않았다.

| 자료 쪽 | 학습 페이지 내용 |
|---|---|
| Lec02 45~47 | ul/ol/li와 dl/dt/dd, 중첩 목록 |
| Lec02 48~52·61 | table/tr/th/td, caption, thead/tbody/tfoot, rowspan/colspan과 추천도서 표 |
| Lec02 53~59 | header/nav/article/section/aside/footer의 의미, CSS로 배치 |
| Lec02 60 | GitHub 버전 관리 복습을 5주차 설명으로 연결 |
| Lec05 1 | 박스·레이아웃·효과·움직임 학습 범위 |
| Lec05 2~5 | 배경 영역과 박스 모델, margin/padding/border; 3쪽 그림은 HTML/CSS로 재구성 |
| Lec05 6 | display 값과 p inline·strong none·span block의 출력 비교 |
| Lec05 7~10 | static/relative/absolute/fixed, z-index, float/clear |
| Lec05 11~12 | 크기 제한과 overflow |
| Lec05 13~14 | border-radius, box-shadow |
| Lec05 15 | opacity·visibility, display:none과의 차이, 배경 알파 |
| Lec05 16~17 | 즉시 hover 변화와 transition의 차이, 속성·시간·속도·지연 |
| Lec05 18 | translate/scale/rotate/skew, 기준점과 합성 순서 |
| 추가 응용 | box-sizing 크기 계산, 이미지 360도 회전(hover/focus·checked), 반복 animation 비교 |

## 보완한 부분

- Lec02 47쪽의 하위 ol은 상위 ul 바로 아래가 아니라 해당 li 안에 작성했다.
- 표의 border 속성은 외부 CSS로 바꾸고 scope를 추가했다. tbody만으로 자동 스크롤이 생기는 것은 아니라고 설명했다.
- 의미 요소를 사용한다고 특정 위치에 배치되는 것은 아님을 구분했다.
- content-box와 border-box를 구분했다. 사이트 공통 CSS가 border-box이므로 수치 예제는 content-box를 명시했다.
- 6쪽의 strong 삭제, span의 block 변화와 br 때문에 전체가 한 줄이 되지는 않는다는 점을 풀이했다.
- position의 containing block, 쌓임 맥락, float에서 top/left만으로 위치 지정이 되지 않는 점을 보완했다.
- box-shadow는 외부 그림자일 때 inset을 생략한다. outset을 값으로 사용하지 않았다.
- opacity는 자손까지 렌더링한 결과 전체를 합성하며, 0에서도 자리와 상호작용이 남을 수 있음을 구분했다.
- 16쪽에는 transition 선언이 없고 17쪽에 추가된다. 예제에서는 기본 상태에 transition을 선언해 양방향 전환을 설명했다.
- 18쪽 코드의 translate(30px,30px)와 설명의 40px 차이는 30px로 통일했다.
- transform 목록의 순서, 초기 0deg/목표 360deg와 시간 설정을 설명했다. 360deg만 적용하면 최종 모양은 0deg와 같음을 구분했다.

## 확인한 공식 자료

- [WHATWG 목록](https://html.spec.whatwg.org/multipage/grouping-content.html)
- [WHATWG 표](https://html.spec.whatwg.org/multipage/tables.html)
- [W3C 박스 모델](https://www.w3.org/TR/css-box-3/)
- [W3C box-sizing](https://www.w3.org/TR/css-sizing-3/)
- [W3C display](https://www.w3.org/TR/css-display-3/)
- [W3C position](https://www.w3.org/TR/css-position-3/)
- [W3C overflow](https://www.w3.org/TR/css-overflow-3/)
- [W3C border·shadow](https://www.w3.org/TR/css-backgrounds-3/)
- [W3C opacity](https://www.w3.org/TR/css-color-4/)
- [W3C transition](https://www.w3.org/TR/css-transitions-1/)
- [W3C transform](https://www.w3.org/TR/css-transforms-1/)
- [W3C animation](https://www.w3.org/TR/css-animations-1/)

## 출력과 검수

표 12개, 복습 질문 14개, 편집에서 구조를 유지하는 출력 묶음 7개를 작성했다. 박스 공간 그림과 rotation-arrow.svg는 독립적으로 만든 학습용 그림이다. 강의 전체 PDF·슬라이드 이미지를 제출 ZIP에 복제하지 않았다.

360도 회전은 native checkbox의 checked 상태와 외부 CSS를 연결한 예제로, 초기 0deg에서 360deg로 2초 linear 전환한다. 해제 시 되돌아가고 상태 유지 중 반복하지 않는다. 키보드로 Tab·Space를 사용할 수 있으며 OS의 동작 줄이기 설정에서는 모션을 생략한다.

2026-10-15: 최종 메인·6주차 HTML W3C 오류·경고 0개. 주차 CSS 오류 0개·경고 27개(CSS 변수 정적 검사 제한). HTML 제목 단계 오류 1개를 수정한 뒤 재검사했다. CSS 전송의 일시적 응답 오류 후 공식 파일 업로드 방식으로 전체 파일 검사를 완료했다.

실제 7개 문서 구조를 사용한 모의 DOM 편집·취소·저장·복원·파일 다운로드 생성 검사와 내부 링크·ID·파일 경로 검사를 수행했다. 실제 브라우저에서 회전 과정·표시·저장·다운로드 완료는 직접 확인하지 못했고 이전 캡처를 최신 화면 검수로 주장하지 않는다. Git 설정·커밋·push·배포는 수행하지 않았다.

## display 출력 가독성 보완 (2026-10-15)

작성자의 화면 캡처에서 inline 문단의 테두리 조각과 큰 padding·margin-left:30%가 겹쳐 보이는 문제를 확인했다. p inline·strong none·span block을 유지하고 출력의 font-size/line-height/padding/border를 단순화했으며 마지막 문단의 margin-left를 0으로 바꿨다. inline 박스가 나뉘는 원리는 출력 바로 아래에 설명했다. 자료의 모든 장식 수치를 그대로 복제한 출력으로 주장하지 않는다. 실제 브라우저의 수정 후 화면은 아직 직접 확인하지 못했다.
