import React from "react";
import Comment from "./Comment";

const comments = [
    {
        id: 1, // 리스트를 렌더링할 때는 각 자식 요소에 고유한 'key' prop을 지정해야 함
        name: "이인제",
        comment: "안녕하세요, 소플입니다."
    },
    {
        id: 2,
        name: "유재석",
        comment: "리액트 재미있어요~!"
    },
    {
        id: 3,
        name: "강민경",
        comment: "저도 리액트 배워보고 싶어요!!"
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment key={comment.id} name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;