# 2주차 학습 정리 – 범위와 출처

주자료: 「[웹프로그래밍] Lec02. HTML5 문서 기본」 PDF의 실제 파일 페이지 2~44쪽(슬라이드 쪽수와 일치). 전체 PDF는 61쪽이며 요청 범위 43쪽을 텍스트 추출·렌더링으로 확인했다. 45쪽 이후는 정리하지 않았고 원본은 수정하지 않았다.

| PDF 쪽 | 페이지 내용 |
|---|---|
| 2~9 | 인터넷·웹·브라우저·W3C의 등장과 역사 자료의 시점 |
| 10~13 | 마크업, SGML·HTML·XML·XHTML·HTML5 흐름, 1주차 연표와 연결 |
| 14~18 | 의미 있는 구조·폼·멀티미디어·CSS·API·모바일 환경 |
| 19~24 | 클라이언트와 서버, TCP/IP·HTTP·IPv4/IPv6·DNS·URL |
| 25~29 | 브라우저 역할과 종류, 당시 시장 자료와 현재 지원성의 구분 |
| 30~32·35~36 | DOCTYPE·html·head·body·title·meta, 기본 문서 코드 |
| 33~34 | 요소·태그·속성·빈 요소·올바른 중첩 |
| 37 | 문자 참조, 숫자 코드, 주석 |
| 38~41 | 제목·문단·줄바꿈·주제 전환·형식 유지·인용 |
| 42~44 | em·strong·small·mark·sub·sup 의미와 출력 예시 |

## 현행 표준을 참고한 보완

- 역사 연도는 [1주차 출처 기록](week01_sources.md)과 같은 기준. HTML 2.0은 1995년, WHATWG 설립은 2004년. 당시 지도·회원 수·브라우저 점유율은 현재 데이터로 취급하지 않음.
- [WHATWG HTML 문법](https://html.spec.whatwg.org/multipage/syntax.html): 빈 요소와 중첩을 구분. p 안의 h2나 태그를 교차해 닫는 예제를 유효한 코드로 다시 작성.
- [WHATWG 문서 정보](https://html.spec.whatwg.org/multipage/semantics.html): 자료의 meta authors·keyword 예제를 name="author"·name="keywords"·content와 charset 구문으로 보완.
- [WHATWG 텍스트 의미](https://html.spec.whatwg.org/multipage/text-level-semantics.html): small은 부연 설명, em은 강조, strong은 중요성. b·i·u는 특정 의미를 가진 유효한 요소이므로 모두 폐기된 것으로 설명하지 않음.
- [WHATWG 오래된 기능](https://html.spec.whatwg.org/multipage/obsolete.html): font·center·blink와 Application Cache 등 역사적 기능을 새 예제에 사용하지 않음.
- 속성에 정상 따옴표를 사용하고 새 창·탭용 예약 값 _blank를 이름 blank와 구분. 외형은 외부 CSS로 작성.
- 자료의 브라우저 점유율·CSS/API 완전 지원 설명을 최신 상황으로 일반화하지 않음. 실제 이용 환경에서 확인하도록 설명.

5개 비교표, 3개 고정된 출력 예시, 6개 복습 질문을 추가했다. 설명·코드 텍스트는 기존 문서 편집기로 수정할 수 있고, 고정 출력 예시는 저장 시 의미 태그가 사라지지 않도록 편집 대상에서 제외했다. 코드 텍스트 변경이 출력 예시를 자동 실행·갱신하지는 않는다.

원본 PDF와 강의 이미지는 ZIP에 포함하지 않는다. 실제 수업 완료 여부나 배포 URL 검수를 대신한 것으로 기록하지 않는다.
