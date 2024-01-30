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

## ECMAScript 모듈
