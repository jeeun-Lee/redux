import React from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

function Todo({text,onBtnClick,id}) {
  return (
    <Link to={`/${id}`}>
      <li>{text} <button onClick={onBtnClick}>del</button></li>
    </Link>
  )
}

function mapDispatchToProps(dispatch,ownProps){
    return{
       onBtnClick : () => dispatch(actionCreators.deleteTodo(ownProps.id))
    }
 }
export default connect(null,mapDispatchToProps) (Todo);