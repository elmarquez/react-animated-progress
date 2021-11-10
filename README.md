# react-animated-progress

Progress bar is used to display the progress status for a task that takes a long time or consists of several steps.

> Cool and Interactive Progress bar built with react hooks

[![NPM](https://img.shields.io/npm/v/react-animated-progress.svg)](https://www.npmjs.com/package/react-animated-progress) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-animated-progress
```

## Basic Usage

First Import the react-animated-progress component and its default styles.
You can provide the value to the progress bar using the value prop.
The color of the progress bar can be set using the color prop.

```jsx
import React, { Component } from 'react'

import ProgressBar from 'react-animated-progress'
import 'react-animated-progress/dist/index.css'

const App = () => {
  return (
    <div>
      <ProgressBar value={20} color='blue' />
    </div>
  )
}
```

## Stripped Progress bar

```jsx
import React, { Component } from 'react'

import ProgressBar from 'react-animated-progress'
import 'react-animated-progress/dist/index.css'

const App = () => {
  return (
    <div>
      <ProgressBar value={20} color='blue' isStripped={true} />
    </div>
  )
}
```

## Indeterminate Progress bar

```jsx
import React, { Component } from 'react'

import ProgressBar from 'react-animated-progress'
import 'react-animated-progress/dist/index.css'

const App = () => {
  return (
    <div>
      <ProgressBar value={20} color='blue' isIndeterminate={true} />
    </div>
  )
}
```

## Demo

Check out working demo of progress bar <a style="color:#cc3a38" href="https://codesandbox.io/s/red-haze-fit1p?file=/src/App.js">here</a>.

## License

MIT © [ashwinKumar0505](https://github.com/ashwinKumar0505)
