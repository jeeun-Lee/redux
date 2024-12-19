import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function Detail() {
    const { id } = useParams(); // URL 매개변수 가져오기
    const todo = useSelector(state => state.find(todo => todo.id === parseInt(id)));
    console.log(todo)
    return (
        <>
            <h1>{todo?.text}</h1>
            <h2>{todo?.id}</h2>
        </>
    );
}

export default Detail;