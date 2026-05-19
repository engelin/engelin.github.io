---
title: React MVVM pattern with DDD
date: '2023-07-27T13:11:36.121Z'
tags:
  - React
  - Architecture
  - DDD
---

# React MVVM pattern with DDD

## Introduction

This article is about how to implement MVVM pattern with DDD in React.

## MVVM

MVVM is a pattern that separates the data model and business logic from the UI. It is a variation of MVC pattern.
The difference between MVC and MVVM is that MVVM has a ViewModel layer that connects the Model and the View. But MVC does not have a ViewModel layer, so the Controller layer connects the Model and the View.
The key of MVVM is the data binding between the View and the ViewModel.

### Model

Model is a representation of data. It is a layer that contains business logic and data.

### View : React Component

View is a layer that represents the UI. It is a layer that contains UI logic.

### ViewModel : React Hook to manage state

ViewModel is a layer that connects the Model and the View. It is a layer that contains UI logic and data.
Also, ViewModel tracks the changes of the Model and updates the View using React Hook.

## DDD pattern (Domain Driven Design pattern)

DDD is a pattern that separates the domain logic from the application logic. It is a pattern that separates the domain logic from the application logic.

### Domain

Domain is a layer that contains the business logic. It is a layer that contains the business logic.

### Application

Application is a layer that contains the application logic. It is a layer that contains the application logic.

## Implementation

### Model

```javascript
// src/model/counter.js
import { observable, action } from 'mobx'

export class Counter {
  @observable count = 0

  @action
  increment() {
    this.count++
  }

  @action
  decrement() {
    this.count--
  }
}
```

### ViewModel

```javascript
// src/viewModel/counter.js
import { observable, action } from 'mobx'
import { Counter } from '../model/counter'

export class CounterViewModel {
  @observable counter = new Counter()

  @action
  increment() {
    this.counter.increment()
  }

  @action
  decrement() {
    this.counter.decrement()
  }
}
```

### View

```javascript
// src/view/counter.js
import React from 'react'
import { observer } from 'mobx-react'
import { CounterViewModel } from '../viewModel/counter'

const CounterView = observer(({ viewModel }) => {
  return (
    <div>
      <button onClick={() => viewModel.increment()}>+</button>
      <span>{viewModel.counter.count}</span>
      <button onClick={() => viewModel.decrement()}>-</button>
    </div>
  )
})

export default CounterView
```

### Application

```javascript
// src/application/counter.js
import { CounterViewModel } from '../viewModel/counter'

export class CounterApplication {
  constructor() {
    this.viewModel = new CounterViewModel()
  }
}
```

### Domain

```javascript
// src/domain/counter.js
import { CounterApplication } from '../application/counter'

export class CounterDomain {
  constructor() {
    this.application = new CounterApplication()
  }
}
```

### Main

```javascript
// src/main.js
import React from 'react'
import ReactDOM from 'react-dom'
import { CounterDomain } from './domain/counter'
import CounterView from './view/counter'

const counterDomain = new CounterDomain()

ReactDOM.render(
  <CounterView viewModel={counterDomain.application.viewModel} />,
  document.getElementById('root')
)
```

## Conclusion

This article is about how to implement MVVM pattern with DDD in React.

## References

- [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)
- [DDD](https://en.wikipedia.org/wiki/Domain-driven_design)
- [React](https://reactjs.org/)
