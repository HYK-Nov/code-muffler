# 1주차: 비동기 프로그래밍 학습

**1주차** 디렉토리는 비동기 프로그래밍의 다양한 개념과 패턴을 학습하기 위한 TypeScript 예제 파일들로 구성되어 있습니다. 각 파일은 특정 비동기 처리 방법을 다루고 있으며, 자세한 내용은 아래와 같습니다.

## 파일 구성

- `asyncAwait.ts`: async와 await 키워드를 활용한 비동기 함수 작성 및 처리 방법을 다룹니다.
- `callback.ts`: 콜백 함수를 이용한 비동기 처리 패턴을 설명합니다.
- `microTask.ts`: 마이크로태스크 큐와 이벤트 루프에 대한 개념을 소개합니다.
- `promise.ts`: Promise 객체를 활용한 비동기 처리 방법을 다룹니다.
- `promiseAll.ts`: Promise.all 메서드를 사용하여 여러 비동기 작업을 병렬로 처리하는 방법을 설명합니다.
- `promiseAllSettled.ts`: Promise.allSettled 메서드를 활용하여 모든 비동기 작업의 완료 여부를 확인하는 방법을 다룹니다.
- `promiseAny.ts`: Promise.any 메서드를 사용하여 여러 비동기 작업 중 가장 먼저 완료된 작업의 결과를 얻는 방법을 설명합니다.
- `promiseRace.ts`: Promise.race 메서드를 활용하여 여러 비동기 작업 중 가장 먼저 완료된 작업의 결과를 처리하는 방법을 다룹니다.
- `setTimeout.ts`: setTimeout 함수를 이용한 타이머 기반의 비동기 처리 방법을 설명합니다.

## 학습 목표

이 디렉토리의 예제들을 통해 다음과 같은 비동기 프로그래밍 개념을 학습할 수 있습니다:

- 콜백 함수와 콜백 지옥(callback hell) 문제 이해
- `Promise` 객체의 생성과 활용 방법
- `async/await` 키워드를 통한 비동기 코드의 동기적 표현
- 이벤트 루프와 마이크로태스크 큐의 동작 방식
- 다양한 `Promise` 메서드(`all`, `allSettled`, `any`, `race`)의 사용 사례