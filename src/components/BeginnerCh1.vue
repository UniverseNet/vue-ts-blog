<template>
  <div>
    <h2>
      Chapter1. 프로젝트 설치
    </h2>
    <hr class="my-4">
    자 TypeScript + Vue.js 개발환경 구축을 해보자.<br>
    JetBrain WebStorm 실행 후 새로운 프로젝트를 생성하면 다음과 같은 팝업이 뜬다.<br>
    <b-img src="/images/new-project1.png" fluid></b-img>
    <br>
    Use the default project setup(Babel,eslint) 체크박스 버튼을 해제하고 생성한다.<br><br>

    Project 생성작업후 Vue-Cli 콘솔창에 프로젝트 개발 컴포넌트들을 선택하는 메세지가 생성된다.<br>
    <b-img src="/images/new-project2.png" fluid></b-img>
    <br>
    Maually select features를 선택하여 진행한다.<br><br>
    default를 선택할경우 babel, eslint 컴포넌트들만 설치되는 기본형 프로젝트가 생성되고<br>
    Maually select features를 선택하면 원하는 컴포넌트들을 선택해 설치할수 있다.<br><br>

    <b-img src="/images/new-project3.png" fluid></b-img>
    <br>
    Vue.js개발에 필요한 컴포넌트들인 TypeScript, Router, Vuex 컴포넌드들을 선택하고 다음으로 넘어간다.<br>
    Router와 Vuex의 경우 Vue.js개발의 핵심 코어 라이브러리로서 해당 기능들을 활용하면 좀더 원활한 개발이 가능하다.<br><br>

    <b-img src="/images/new-project4.png" fluid></b-img>
    <br><br>
    <b-button variant="dark">
      Use class-style component syntax?
      <b-badge variant="light">Yes</b-badge>
    </b-button>
    <br>
    Vue Components를 만들 때 Class 스타일로 만들 것인지 물어보는 것인데 TypeScript를 이용할 때는 Yes로 하는게 코드가 깔끔하다.<br><br>

    <b-button variant="dark">
      Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)?
      <b-badge variant="light">Yes</b-badge>
    </b-button>
    <br>
    Babel 설정을 할 것인지 물어보는 것인데 Yes로 한다.<br><br>

    <b-button variant="dark">
      Pick a linter / formatter config
      <b-badge variant="light">ESLint + Prettier</b-badge>
    </b-button>
    <br>
    ESLinter와 Prettier 설정을 자동으로 해준다.
    Airbnb 설정이나 기타 다른 설정은 추후에 추가해도 상관없다.<br><br>

    <b-button variant="dark">
      Pick additional lint features
      <b-badge variant="light">Lint on save</b-badge>
    </b-button>
    <br>
    Lint 사용시 제공되는 기능 중 어떤 기능을 사용할지 선택하는 옵션이다.
    이건 개인의 취향에 따라 다르다.<br>
    Lint on save 옵션은 저장시 Lint 검사만 하는 것이고
    Lint and fix on commit 옵션은 저장시 자동으로 Fix가 가능한 것은 Fix까지 해주는 것이다.<br><br>

    <b-button variant="dark">
      Where do you prefer placing config for Babel, ESLint, etc.?
      <b-badge variant="light">In dedicated config files</b-badge>
    </b-button>
    <br>
    Babel, ESLint, Prettier 등등 여러 설정을 별도의 설정 파일로 분리할 것인지, package.json 에서 할 것인지 선택하는 것이다.<br>
    별도의 설정으로 분리하는게 더 편리하다.<br><br>

    <b-button variant="dark">
      Save this as a preset for future projects?
      <b-badge variant="light">No</b-badge>
    </b-button>
    <br>
    해당 설정을 별도로 저장할 것인지 물어보는 건데, 굳이 필요 없다.
    설정이 완료되면 npm 으로 필요한 패키지를 알아서 다운로드 후 설치가 완료된다.<br>
    설치가 완료 된 디렉토리명은 정확한 구분을 위해 client 로 변경해준다.<br><br>

    <b-img src="/images/new-project5.png" fluid></b-img>
    <br><br>
    해당 옵션들을 설정하고 프로젝트 생성이 완료되면 다음과 같은 폴더구조를 가진 프로젝트가 생성된다.<br><br>
    Chapter2에서 Vue Router 를 이용한 페이지 렌더링 방법을 알아 보도록 하자.

  </div>
</template>
<script>


</script>
<style scoped>
div {
  padding: 1rem;
}
</style>