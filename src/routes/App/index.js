import React from 'react';
import { connect } from 'dva'
import styles from './styles.css'

const App = ({count, dispatch}) => (
	<div>
    <h2 className={styles.timer}>{ count }</h2>
    <button key="add" onClick={() => { dispatch({type: 'count/add'})}}>+</button>
    <button key="minus" onClick={() => { dispatch({type: 'count/minus'})}}>-</button>
  </div>
)

export default connect(({ count }) => ({
	count
}))(App)