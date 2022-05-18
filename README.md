# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

5주차 개념 과제
-클래스형 컴포넌트 vs  함수형 컴포넌트 
react 컴포넌트 선언하는 두가지 방식 중 하나이다.
클래스형은 먼저 state, lifeCycle 관련 기능사용 가능하다.
또한 메모리 자원을 함수형 컴포넌트보다 조금 더 사용하며
임의 메서드를 정의할 수 있다.

함수형 컴포넌트는 state, lifeCycle 관련 기능사용 불가능하다.[Hook을 통해 해결 됨]
메모리 자원을 함수형 컴포넌트보다 덜 사용한다.
또한 컴포넌트 선언이 편하다.

-함수형 컴포넌트를 사용하는 이유 (장점)
 리랜더링 될 때의 값을 유지한다. 
 함수형 컴포넌트는 props에 따른 랜더링 결과를 보장받는다.
 매개변수로 받는 props의 destructuring을 활용해 가독성을 보장받을 수 있다.
 결국 함수이기에 함수의 모든 장점을 이용할 수 있다. 
 함수형 컴포넌트를 사용했을 때 코드가 간결해지고 가독성도 좋다!

 -렌더링이란
 렌더링이란 HTML,CSS, 자바스크립트 등 개발자가 작성한 문서가 브라우저에서 출력되는 과정을 말한다.

브라우저 마다 다르지만, 브라우저는 렌더링을 수행하는 렌더링 엔진을 가지고 있습니다. 크롬은 블링크(Blink), 사파리는 웹킷(Webkit) 그리고 파이어폭스는 게코(Gecko)라는 렌더링 엔진을 사용한다.
-마운팅이란 
리액트가 최초로 컴포넌트를 렌더링할 때. 앞선 지시사항들로부터 첫 DOM을 실제로 빌드하는 것이다.

-과정
React가 렌더링을 실행하는 과정
React 컴포넌트가 렌더링을 수행하는 시점은 다음과 같다.

1)Props가 변경되었을 때
2)State가 변경되었을 때
3)forceUpdate() 를 실행하였을 때
4)부모 컴포넌트가 렌더링되었을 때
