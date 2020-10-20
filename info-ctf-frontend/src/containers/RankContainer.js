import React, { useEffect, useState } from 'react';
import RankItem from '../components/table/RankItem';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { rankGet } from '../modules/rank';
import { getCookie } from '../lib/cookie';


const RankContainer = ({ history }) => {
    const dispatch = useDispatch();
    const [mydata, setMydata] = useState(null);
    const [rank, setRank] = useState(null);
    const { ranks, error, loading } = useSelector(({ rank, loading }) => ({
        ranks: rank.ranks,
        error: rank.error,
        loading: loading['rank/RANK'],
    }));

    // 페이지가 마운트(처음 보여질 때)될 때 순위 api 요청
    useEffect(() => {
        const token = getCookie("user");
        const users = localStorage.getItem("users") ? localStorage.getItem('users') : null;
        const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;
        if (users) {
            dispatch(rankGet({ token }));
        }
        if (admin) {
            dispatch(rankGet({ token }));
        }
    }, [dispatch, history]);

    useEffect(() => {
        if (ranks) {
            if (ranks) {
                setMydata(ranks.mydata);
                setRank(ranks.contents);
            }
            if (error) {
                console.log(error);
            }
        }
    }, [ranks, rank, mydata, error]);

    return <RankItem mydata={mydata} ranks={rank} loading={loading} />;
};


export default withRouter(RankContainer);