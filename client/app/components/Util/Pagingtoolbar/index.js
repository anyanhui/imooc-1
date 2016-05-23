import React,{PropTypes,Component} from 'react';
import styles from './style.css';
//春render的组件可以以这种形式写直接返回一个函数，参数就是要props
const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    >
        {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo