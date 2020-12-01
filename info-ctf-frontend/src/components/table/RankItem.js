import React from 'react';
import styled from 'styled-components';




const RankItem = ({ ranks, mydata, loading }) => {

    if (loading) {
        return <h1 style={{ fontFamily: 'Do Hyeon', color: 'white' }}>랭킹 로딩 중 입니다.</h1>
    }

    return (
        <>
            <h2 style={{ marginLeft: '0px' }}>Top 50 Users</h2>
            <table>
                <br />
                <RankRow ranks={ranks} />
            </table>


        </>
    );
};

// 검색결과로 리턴된 배열을 반복해서 보여주는 부분
const RankRow = ({ ranks }) => {

    // rank 값이 유효할 때 (렌더링 오류가 나지 않게 객체든 배열이든 꼭 이 유효성 검사를 해주어야 함)
    if (ranks === null) {
        return <h1 style={{ color: 'white', }}>랭킹이 존재하지 않습니다. <br /> 로그인해야 랭킹이 보입니다.</h1>
    }

    if (!ranks) {
        return null;
    }

    return (
        <>
            <thead>
                <tr>
                    <th>-rank-</th>
                    <th>-name-</th>
                    <th>-score-</th>
                </tr>
            </thead>
            {ranks.map(rank => {
                return (
                    <>
                        <RankList key={rank.rank} ranks={rank} />
                    </>
                )
            })}

        </>
    );
}

// 검색결과 리턴된 배열의 내용을 보여주는 부분
const RankList = ({ ranks }) => {
    const { name, score, rank } = ranks;
    return (
        <>

            <tbody>
                <tr>
                    <td>{rank}</td>
                    <td>{name}</td>
                    <td>{score}</td>
                </tr>
            </tbody>
        </>
    );
}

export default RankItem;