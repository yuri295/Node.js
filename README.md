# 노드란?

- Node.js는 크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임
- 런타임: 특정 언어로 만든 프로그램을 실행할 수 있게 해주는 가상 머신
- 노드는 자바스크립트로 만든 프로그램들을 실행할 수 있게 해줌.

# 노드의 특성

1. 이벤트 기반

   - 이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식

2. 논블로킹 I/O

   - 논블로킹: 오래 걸리는 함수를 백그라운드로 보내서 다음 코드가 먼저 실행되게 하고, 나중에 오래 걸리는 함수를 실행

3. 싱글 스레드
   - 노드 프로세스는 멀티 스레드이지만 직접 다룰 수 있는 스레드는 하나이기 때문에 싱글 스레드라고 표현
   - 싱글 스레드이기 때문에 주어진 일을 하나밖에 처리하지 못함
   - 대신 논 블로킹 모델을 채택하여 일부 코드(I/O)를 백그라운드(다른 프로세스)에서 실행 가능

# 노드의 역할

1. 노드 서버의 장단점

   # ![Alt text](image-1.png)

2. 서버 외의 노드
   - 웹,모바일,데스크탑 애플리케이션에도 사용
     - 웹 프레임 워크: Angular,React,Meteor 등
     - 모바일 앱 프레임워크: React Native
     - 데스크탑 개발 도구: Electron(Atom,Slack, VSCode,Discord 등 제작)
