import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
position: relative;
font-size: 2rem;
border: 2px solid #FFFFFF;
box-sizing: border-box;
width: 1105.5px;
height: 442px;
left: 50px;
top: 50px;
background: #000000;
border: none;
border-radius: 3px;
text-align: center;
color: white;

/* 브라우저 크기에 따라 가로 크기 변경 */
@media (max-width: 1024px) {
    width: 768px;
}
@media (max-width: 768px) {
    width: 100%;
}

table {
    width: 100%;
    font-size: 14.2px;
}
`;



const RankItem = ({ ranks, mydata, loading }) => {

    if (loading) {
        return <StyledTable><h3 style={{ textDecoration: 'none', color: 'white' }}>랭킹 로딩 중 입니다.</h3></StyledTable>
    }

    return (
        <>
            <p style={{ marginLeft: '500px' }}>
                Top 50 Users
            </p>
            <StyledTable>
                <table>
                    <br />
                    <RankRow ranks={ranks} />
                </table>
            </StyledTable>

        </>
    );
};

// 검색결과로 리턴된 배열을 반복해서 보여주는 부분
const RankRow = ({ ranks }) => {

    // rank 값이 유효할 때 (렌더링 오류가 나지 않게 객체든 배열이든 꼭 이 유효성 검사를 해주어야 함)
    if (ranks === null) {
        return <StyledTable><h3 style={{ textDecoration: 'none', color: 'white', marginRight: '110px' }}>랭킹이 존재하지 않습니다. <br /> 로그인해야 랭킹이 보입니다.</h3></StyledTable>
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
            {ranks.map(rank =>
                (<RankList key={rank.rank} ranks={rank} />
                ))}
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