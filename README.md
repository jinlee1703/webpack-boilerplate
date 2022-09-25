# webpack-boilerplate

## 1. 소개

### 1.1. 웹팩이란?

- 최신 프론트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러
    - 모듈 번들러 : 웹 애플리케이션을 구성하는 자원(HTML, CSS, JavaScrip, Imaages 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구

### 1.2. 프로젝트 소개

 본 프로젝트는 작성자가 강의 및 reference를 참고하여 webpack 환경을 구축한 후, 다른 프로젝트에서도 사용할 수 있도록 github 저장소에 boilerplate 구조로 오픈소스로 올린 일종의 템플릿 코드임

### 1.3. 디렉터리 구조

```
webpack-boilerplate
│
│  .gitignore
│  babel.config.json
│  out.txt
│  package-lock.json
│  package.json
│  README.md
│  webpack.config.js
│  webpack.config.prod.js
│  
├─dist
│  │  about.html
│  │  index.html
│  │  
│  └─js
│          about_bundle.js
│          about_bundle.js.map
│          index_bundle.js
│          index_bundle.js.map
│          
└─src
    │  about.html
    │  index.html
    │  
    ├─css
    │      style.css
    │      
    └─js
            about.js
            hello.js
            index.js
            world.js
```

### 1.4. 특징

- webpack 구성
- webpack DevServer 적용
- babel 연동
- source-map 연동
- 각 리소스의 역할에 따른 디렉터리 분리
- boilerplate 구조로 작성하여 다음 프로젝트에서 사용할 수 있도록 함

### 1.5. 번들링 지원 파일

- 자바스크립트 파일 : .js
- 스타일시트 파일 : .css
- 이미지 파일 : .png, .jpeg, jpg, .gif

## 2. 개발환경

### 2.1. 사전 설치 항목

- Node.js
- Visual Studio Code (혹은 기타 IDE)

### 2.2. node_modules 설치

```
(npm init)
npm install
```

---

### Reference

- webpack : https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html
- source - 생활코딩 : https://opentutorials.org/module/4566
- Babel : https://mine-it-record.tistory.com/503
- Devtool : https://webpack.js.org/configuration/devtool/#devtool
- SourceMap : https://joshua1988.github.io/webpack-guide/devtools/source-map.html