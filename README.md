# React Project Setup

Yarn berry + React v18 환경구성을 정리한 문서입니다

### 기술스택 선정

| Skill      | Version |
| :--------- | :------ |
| React      | 18.0.0  |
| Typescript | 4.6.4   |
| Yarn Berry | 3.2.0   |
| Webpack    | 5.7.2   |
| Express    | 4.18.1  |

### 상태관리

Recoil or Redux

상태관리 라이브러리 후보

1. React Query
2. SWR
3. Redux ToolKit
4. Apollo(REST 지원안함)

### 테스트 도구

| Type                     | Tool                  |
| :----------------------- | :-------------------- |
| 통합 테스트(Integration) |                       |
| 단위 테스트(Unit)        | Jest                  |
| 기능 테스트(E2E)         | testing-library/react |

## Set up

1. Node는 현재 기준 LTS인 16.15.0를 사용합니다

```
nvm use 16.15.0
(npm v8.5.5)
```

2. Package Manager는 yarn(berry)를 기본으로 사용합니다

```
yarn set version berry
```

## Getting Started

```
yarn run start
```

## Referance

- [compression 미들웨어 추가](https://kimcoder.tistory.com/329)
- [상태관리 라이브러리 비교](https://react-query.tanstack.com/comparison)
- [차세대 빌드 도구 비교](https://ui.toast.com/weekly-pick/ko_20220127)
- [카카오 : 컴포넌트를 모노레포로 개발하여 얻은 것들](https://tech.kakao.com/2020/12/03/frontend-growth-03/)
- [Yarn berry 세팅부터 Github CI/CD](https://haranglog.tistory.com/28)
- [배포 속도를 올려보자](https://velog.io/@lingodingo/%EB%B9%8C%EB%93%9C-%EC%86%8D%EB%8F%84%EB%A5%BC-%EC%98%AC%EB%A0%A4%EB%B3%B4%EC%9E%90feat.-esbuild)
