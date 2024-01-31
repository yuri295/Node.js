## CommonJS 모듈

- 파일 끝에 module.exports로 모듈로 만들 값을 지정
- 다른 파일에서 require(파일 경로)로 그 모듈의 내용 가져올 수 있음.

### exports

- 두 가지 이상을 불러올 때는 exports를 많이 쓰고, module.export와 함께 쓸 수 없음.

### this

- 최상위 스코프의 this는 module.exports를 가리킴.
- 함수 선언문 내부의 this는 global(전역) 객체를 가리킴.

### require

- require.cache에 한 번 require한 모듈에 대한 캐슁 정보가 들어 있음.
- require.main은 노드 실행 시 첫 모듈을 가리킴.

### 순환 참조

- 두 개의 모듈이 서로를 require하는 상황

## ECMAScript 모듈

- import, export, export default
- mjs 확장자
- dynamic import: if문 안에서 모듈을 불러올 경우, promise로 불러오기 때문에 top level await 또는 then을 사용

## node 내장 모듈

- os
  - 운영체제의 정보를 담고 있음.
  - require로 가져옴.
- path
  - 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
