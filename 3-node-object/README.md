## 노드 내장 객체

### global

- 노드의 전역 객체
- 모든 파일에서 접근 가능
- window처럼 생략도 가능(console, require도 global의 속성)

### console

- 브라우저의 console 객체와 매우 유사
- console.time, console.timeEnd: 시간 로깅
- console.error: 에러 로깅
- console.log: 평범한 로그
- console.dir: 객체 로깅
- console.trace: 호출스택 로깅

### 타이머 메서드

- set 메서드에 clear 메서드가 대응됨
- setTimeout(콜백 함수, 밀리초): 주어진 밀리초(1000분의 1초) 이후에 콜백 함수를 실행
- setInterval(콜백 함수,밀리초): 주어진 밀리초마다 콜백 함수 반복 실행
- setImmediate(콜백 함수): 콜백 함수 즉시 실행
- clearTimeout(아이디): setTimeout을 취소
- clearInterval(아이디):
  setInterval을 취소
- clearImmediate(아이디): setImmediate을 취소

### process

- 현재 실행 중인 노드 프로세스에 대한 정보를 담고 있음.
- process.env
  - 시스템 환경 변수들이 들어 있는 객체
  - 비밀키를 보관하는 용도
- process.nextTick(콜백)
  - 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선적으로 처리
- process.exit(코드)
  - 현재의 프로세스 종료
