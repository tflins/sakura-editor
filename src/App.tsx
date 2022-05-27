import { useState } from 'react'
import Header from './components/Header'
import ComponentPanel from './components/ComponentPanel'

import style from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={style.app}>
      <Header />
      <section className={style.sectionLeft}>
        <ComponentPanel />
      </section>
    </div>
  )
}

export default App
