import Header from '../../components/Header'
import ComponentPanel from '../../components/ComponentPanel'

import style from './index.module.scss'

export default function Editor() {
  return (
    <div className={style.editor}>
      <Header />
      <section className={style.sectionLeft}>
        <ComponentPanel />
      </section>
    </div>
  )
}
