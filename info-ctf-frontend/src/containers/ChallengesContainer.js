import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showquizlistPost } from '../modules/showquizlist';
import ChallengesItem from '../components/table/ChallengesItem';


const ChallengesContainer = () => {

    const dispatch = useDispatch();
    const { showquizlist, error, loading } = useSelector(({ showquizlist, loading }) => ({
        showquizlist: showquizlist.showquizlist,
        error: showquizlist.error,
        loading: loading['showquizlist/SHOW_QUIZLIST'],
    }));


    // 페이지가 mount 될 때 문제목록 api 호출
    useEffect(() => {
        dispatch(showquizlistPost());
    }, [dispatch]);


    return <ChallengesItem data={showquizlist} loading={loading} />;
};

export default ChallengesContainer;