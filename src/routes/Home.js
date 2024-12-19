import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import Todo from '../components/Todo';

function Home({todos,addTodo}) {
    const [text,setText ] = useState("");
    function onChage(e){
        setText(e.target.value)
    }
    function onSubmit(e){
        e.preventDefault();
      
        addTodo(text)
        setText("")
    }
  return (
    <>
        <h1>Todo</h1>
        <form action="" onSubmit={onSubmit}>
            <input type="text" name="" id="" value={text} onChange={onChage} />
            <button>Add</button>
        </form>
        <ul>
          {todos.map(todo => <Todo {...todo} key={todo.id} />)}
        </ul>
    </>
  )

 
}
function mapStateToProps(state){
    return {todos:state}
}
function mapDispatchToProps(dispatch){
   return{
        addTodo : text => dispatch(actionCreators.addTodo(text))
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);