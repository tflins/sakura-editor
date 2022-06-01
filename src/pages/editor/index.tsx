import Header from '../../components/Header'
import ComponentPanel from '../../components/ComponentPanel'
import SakuraEditor from '../../core/SakuraEditor'

import style from './index.module.scss'

export default function Editor() {
  return (
    <div className={style.editor}>
      <Header />
      <section className={style.sectionLeft}>
        <ComponentPanel />
      </section>
      <main className={style.main}>
        <SakuraEditor />
      </main>
    </div>
  )
}
