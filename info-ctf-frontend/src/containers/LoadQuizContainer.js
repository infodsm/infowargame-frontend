import React, { useEffect, useState } from 'react';
import ShowQuizItem from '../components/Quiz/ShowQuizItem';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadquizPost, initialize } from '../modules/loadquiz';




const LoadQuizContainer = ({ match }) => {
    const [quiz, setQuiz] = useState(null);
    const dispatch = useDispatch();
    const { num } = match.params;
    const { loadquiz, error, loading } = useSelector(({ loadquiz, loading }) => ({
        loadquiz: loadquiz.loadquiz,
        error: loadquiz.error,
        loading: loading['loadquiz/LOAD_QUIZ'],
    }));

    // 페이지가 마운트(처음 보여질 때)될 때 마이페이지 api 요청
    useEffect(() => {
        console.log(num);
        dispatch(loadquizPost(num));

        return () => {
            dispatch(initialize());
        };
    }, [dispatch, num]);

    useEffect(() => {
        if (loadquiz) {
            console.log("요청성공");
            console.log(loadquiz);
        }
        if (error) {
            console.log(error);
            console.log("오류발생");
        }
    }, [loadquiz, error]);

    return <ShowQuizItem loadquiz={loadquiz} loading={loading} />;
};


export default withRouter(LoadQuizContainer);