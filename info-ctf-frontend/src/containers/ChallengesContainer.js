import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showquizlistPost } from '../modules/showquizlist';
import ChallengesItem from '../components/table/ChallengesItem';


const ChallengesContainer = () => {

    const dispatch = useDispatch();
    const { showquizlist, error, } = useSelector(({ showquizlist }) => ({
        showquizlist: showquizlist.showquizlist,
        error: showquizlist.error,
    }));


    // 페이지가 mount 될 때 문제목록 api 호출
    useEffect(() => {
        dispatch(showquizlistPost());
    }, [dispatch]);


    return <ChallengesItem data={showquizlist} />;
};

export default ChallengesContainer;