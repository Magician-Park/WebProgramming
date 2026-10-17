# 2026-10-18 실제 배포 브라우저 검수

- 대상: https://magician-park.smu.ai.kr/ 및 practice/week01.html~week07.html
- 환경: Codex 인앱 브라우저, CSS viewport 1280×800 / 390×844.
- Chrome 연결은 없어서 실제 HTTPS 배포 사이트를 사용했다. 이전 로컬 file:// 보안 제한은 우회하지 않았다.
- 1280px 첫 화면: scrollY=0, 활동명 하단 302.82px·소속 하단 345.87px·소개 하단 396.27px. F-01④ 충족. 실제 소속 3학년은 공지 지정 1학년과 달라 F-01② Fail 유지.
- 8개 문서의 전체 폭 넘침 없음. 카드·폼·예제·표·버튼·팝업을 넓은/좁은 화면에서 캡처하고 검토했다. 표의 오른쪽 열은 표 영역 안에서 좌우 스크롤해 확인한다.
- 모바일 실적 표: 354px 컨테이너 안의 840px 표. 키보드 ArrowRight로 scrollLeft 411.5px 확인. 팝업 폭 352px으로 390px 화면 안에 표시.
- 사진 10개 dialog의 제목·개별 날짜 설명을 확인했다. 초기 클릭 직후 일부 이미지는 아직 로딩 중이었고 최종에는 모두 complete=true/naturalWidth>0이었다.
- 분류 버튼 전체/교육/자격/수상의 실제 표시 행 수 10/1/3/6 확인.
- A-02: 1~7주차 수정·취소·저장·새로고침 복원·다운로드 성공. 4주차는 제목·본문, 나머지 주차는 기존 코드 예제도 수정 가능. 1주차의 제목·본문·코드 저장 유지와 2주차 저장 분리도 확인. 7개 다운로드 파일의 이름·수정 내용·편집 중 속성 제거를 확인했다. 다운로드 파일의 브라우저 file:// 재개방은 수행하지 않았다. 저장 제한 안내는 기존 모의 검사로 확인한 항목이며 실제 제한 환경을 강제로 만들지 않았다.
- 브라우저의 테스트 수정은 모두 원문으로 복원했다. source/GitHub 자동 변경 없음. 다운로드한 검수 파일은 제출 소스에 반영하지 않았다.
- Q-CSS / A-02: Pass. F-01②, F-05③, Q-DEPLOY 전체 외부 링크 전수 검수는 남음.

## 캡처

[1280px 첫 화면](check_20261018_1280.jpg) · [1280px 전체](check_20261018_desktop_full.jpg) · [390px 전체](check_20261018_mobile_full.jpg) · [넓은/좁은 화면 비교](check_20261018_responsive.jpg) · [사진 팝업](check_20261018_mobile_photo.jpg) · [표 가로 이동](check_20261018_mobile_table_right.jpg) · [편집 도구](check_20261018_editor.jpg)

각 주차의 전체 캡처: check_20261018_weekNN_desktop_full.jpg / check_20261018_weekNN_mobile_full.jpg (NN=01~07).

## 원본 기록

[화면 치수](responsive_actual_20261018.json) · [편집 동작](editor_actual_20261018.json) · [다운로드 파일 확인](editor_download_checks_20261018.json) · [사진 로드 완료](photo_actual_20261018.json) · [최신 W3C](w3c_html_summary.json)
