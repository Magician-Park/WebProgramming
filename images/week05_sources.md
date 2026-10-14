# 5주차 학습 범위와 출처

작성일: 2026-10-14

## CSS: 제공한 PDF 2~16쪽

| PDF 쪽 | 정리한 내용 | 페이지 내 위치 |
|---|---|---|
| 2~3 | 내용과 표현의 분리, CSS 발전과 모듈 | CSS 01 |
| 4~6 | 선택자·속성·값·구두점, 여러 선언 적용 | CSS 01 |
| 7~8 | div/span, class/id로 묶음 선택 | CSS 02~03 |
| 9~11 | 내부·외부·인라인 스타일시트, CSS 주석과 link | CSS 02 |
| 12~14 | 태그·선택자 목록·후손·클래스·ID | CSS 03 |
| 15~16 | 링크 상태·hover·active·focus, before/after | CSS 03 |

자료 12쪽의 글꼴 목록은 font 단축 속성 대신 font-family로 정리했다. 15~16쪽의 before/after는 가상클래스와 구분되는 가상요소이며 ::before/::after로 표시했다. 실제 출력의 표현은 외부 practice.css에 작성했다. 17쪽 이후 내용은 이번 범위에 포함하지 않았다. 원본 PDF와 전체 슬라이드 그림은 제출 ZIP에 복제하지 않았다.

분류 확인: [W3C Selectors](https://www.w3.org/TR/selectors-4/)

## Git: 작성자가 설명한 수업 내용과 공식 문서

작성자는 웹페이지 제작 전 Git 초기 설정과 변경 내용의 커밋·GitHub Repository 업로드를 배웠다고 설명했다. Git 부분은 첨부 CSS PDF의 내용으로 주장하지 않으며, 해당 학습 설명을 다음 공식 문서로 보완했다.

| 순서 | 정리 내용 | 확인한 공식 문서 |
|---|---|---|
| 1 | Git과 GitHub, 작업 폴더·스테이징·커밋·원격 | [GitHub About Git](https://docs.github.com/en/get-started/using-git/about-git) |
| 2 | 설치 확인, user.name/user.email, global/local | [Git 초기 설정](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) |
| 3 | 커밋 이메일과 인증의 구분 | [GitHub 커밋 이메일](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address) |
| 4 | init 또는 clone 선택 | [git init](https://git-scm.com/docs/git-init), [GitHub에 로컬 코드 추가](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github) |
| 5 | status·diff·add·staged diff·commit·log | [변경 기록](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) |
| 6 | 제외 파일·스테이징 취소 | [gitignore](https://git-scm.com/docs/gitignore), [git restore](https://git-scm.com/docs/git-restore) |
| 7 | origin·첫 push·추적 브랜치 | [git push](https://git-scm.com/docs/git-push), [GitHub 로컬 코드 추가](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github) |
| 8 | HTTPS·SSH 인증과 권한 | [GitHub 인증](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github) |
| 9 | 이후 반복 작업·ff-only 동기화·오류 확인 | [git pull](https://git-scm.com/docs/git-pull), 위 명령별 문서 |

경로·작성자 이름·이메일·저장소 URL은 학습용 자리표시자다. 실제 이메일·토큰·개인 키를 넣지 않았다. 문서 작성 중 사용자 Git 설정, 저장소 초기화, 커밋, GitHub 업로드 또는 배포는 실행하지 않았다. 명령 예제는 실제 업로드 성공의 검수 근거가 아니다.

## 구현과 확인

- 비교표 6개, Git 4단계 흐름, 단계별 명령과 설명, 복습 질문 8개.
- 상단 목차·이력서의 5주차 링크·footer 돌아가기 링크 연결.
- 기존 문서 편집 기능 유지. CSS 출력 예제는 data-editor-readonly로 편집 저장 대상에서 제외.
- W3C HTML 오류·경고 0개, 주차 CSS 오류 0개·경고 27개(CSS 변수 정적 검사 제한).
- 내부 링크·중복 ID·파일 경로와 실제 7개 문서 구조를 사용한 모의 DOM 편집 동작 검사 통과.
- 실제 브라우저의 최종 화면·Tab 상태·저장·다운로드 완료는 직접 확인하지 못했다. 이전 캡처를 최신 5주차의 화면 검수로 주장하지 않는다.
