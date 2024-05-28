import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            {/* # 템플릿 리터럴 (Template Literal)
                    - ES6에서 도입된 JavaScript의 새로운 문자열 리터럴 형식
                    - 백틱(`) 사용 : tab 키 위에 존재
                    - 주요 기능
                        1) 변수 값 삽입
                        2) 여러 줄 문자열
                        3) 표현식 평가

                # 리터럴 (Literal)
                    - 숫자 리터럴
                    - 문자열 리터럴
                    - 불리언 리터럴
                    - 배열 리터럴
                    - 객체 리터럴
                    - null 리터럴
                    - undefined 리터럴
                    ★ 템플릿 리터럴은 문자열 리터럴의 특별한 형태로, 여러 줄 문자열, 문자열 보간, 표현식 평가 등을 지원합니다. 백틱(`)으로 감싸서 사용합니다.
            */}
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
        </div>
    );
}

export default Book;