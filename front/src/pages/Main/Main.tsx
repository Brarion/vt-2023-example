import React from 'react'

import styles from './Main.module.scss'

const Main = () => {
  const [state, setState] = React.useState(0);

  const onClick = () => {
    setState(v => v + 1);
  }


  return <div className={styles.main} data-testid="main">
    <button type="button" onClick={onClick}>Кнопка</button>
    <p>{state}</p>
  </div>
}

export default Main;