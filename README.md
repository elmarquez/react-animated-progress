# react-progress-bar

Progress bar is used to display the progress status for a task that takes a long time or consists of several steps.

> Cool and Interactive Progress bar built with react hooks

[![NPM](https://img.shields.io/npm/v/react-progress-bar.svg)](https://www.npmjs.com/package/react-progress-bar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-progress-bar
```

## Basic Usage

First Import the react-progress-bar component and its default styles.
You can provide the value to the progress bar using the value prop.
The color of the progress bar can be set using the color prop.

```jsx
import React, { Component } from 'react'

import ProgressBar from 'react-progress-bar'
import 'react-progress-bar/dist/index.css'

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

import ProgressBar from 'react-progress-bar'
import 'react-progress-bar/dist/index.css'

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

import ProgressBar from 'react-progress-bar'
import 'react-progress-bar/dist/index.css'

const App = () => {
  return (
    <div>
      <ProgressBar value={20} color='blue' isIndeterminate={true} />
    </div>
  )
}
```

## License

MIT © [ashwinKumar0505](https://github.com/ashwinKumar0505)
