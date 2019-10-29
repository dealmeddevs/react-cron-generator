# react-cron-generator

Simple react component to generate cron expression (Material-UI)

## Getting Started

Package helps to build linux scheduler cron expression.
This project uses material-ui

```
data = '* * * * * * *'
```
```
npm i --save @dealmeddevs/react-cron-generator

```
## demo
[Live demo](https://dealmeddevs.github.io/react-cron-generator/)

![alt text](https://raw.githubusercontent.com/dealmeddevs/react-cron-generator/master/public/images/rcg_daily.JPG)

![alt text](https://raw.githubusercontent.com/dealmeddevs/react-cron-generator/master/public/images/rcg_weekly.JPG)


```
import React, { useState } from 'react'
import Cron from 'react-cron-generator'

const App = (props) => {
    const [value, setValue] = useState()

    return (
      <div>
        <Cron
          onChange={(e)=> {setValue(e)); console.log(e)}}
          value={value}
          showResultText={true}
          showResultCron={true}
        />                      
      </div>
    )
 
}

export default App

```
## props

| Prop | Description | Default
| --- | --- | -- |
| value | cron expression  |  |
| onChange |  |  |
| showResultText | show in readable text format | false |
| showResultCron | show cron expression | false | 
