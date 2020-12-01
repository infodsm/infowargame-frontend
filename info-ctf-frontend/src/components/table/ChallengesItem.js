import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledList = styled.div`
position: relative;
font-size: 2rem;
background: #000000;
box-sizing: border-box;
width: 100%;
height: 100%;
left: 0px;
border: none;
border-radius: 3px;
text-align: center;
color: white;
left: -15px;
margin-top: -0px;



ul {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}

ul li{
    list-style-type: none;
    margin-left: 20px;
}

p {
    font-size: 21px;
    text-align: center;
    color: white;
    font-family: 'Black Han Sans', sans-serif;
}

#subject {
    margin-bottom:  5px;
    font-size: 20px;
    margin-right: 990px;
    font-family: 'Black Han Sans', sans-serif;
    color: white;
}

`;


const ChallengesDiv = styled.div`
    width: 140px;
    height: 100px;
    padding: 13px;
    box-sizing: border-box;
    background: #F0F8FF;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: #C1FF8F;
    }
    p {
        color: black;

    }
    font-family: 'Do Hyeon', sans-serif;
    color: white;
    
    background-color: ${props => props.color || "#F0F8FF"};
`;


const ChallengesItem = ({ data, quiz, loading }) => {

    if (loading) {
        return <StyledList><h3 style={{ textDecoration: 'none', color: 'white' }}>문제목록 로딩 중 입니다.</h3></StyledList>
    }

    if (data === null) {
        return <StyledList><h1 style={{ textDecoration: 'none', color: 'white' }}>문제목록 로딩실패</h1></StyledList>
    }

    if (!data) {
        console.log("error");
        return null;
    }

    const filterArray = (category) => {
        return data.filter(data => data.category === category);
    }


    return (

        <>
            <StyledList>
                <p style={{ fontSize: '18px', color: 'white' }}>*유의사항* : 한번 푼 문제는 다시 풀 수 없습니다. </p>
                <p>Cryptography</p><ChallengeRow key={filterArray(1).num} data={filterArray(1)}></ChallengeRow>
                <br />
                <p>Forensics</p><ChallengeRow data={filterArray(2)}></ChallengeRow>
                <br />
                <p>MISC </p><ChallengeRow data={filterArray(3)}></ChallengeRow>
                <br />
                <p>Networking </p><ChallengeRow data={filterArray(4)}></ChallengeRow>
                <br />
                <p>Pwnable</p><ChallengeRow data={filterArray(5)}></ChallengeRow>
                <br />
                <p>Reverse Engineering</p><ChallengeRow data={filterArray(6)}></ChallengeRow>
                <br />
                <p>Webhacking</p><ChallengeRow data={filterArray(7)}></ChallengeRow>
            </StyledList>
        </>
    );
};

const ChallengeRow = ({ data }) => {

    return (
        <>
            <div>
                <ul style={{ listStyle: 'none', float: 'left' }}>
                    {
                        data.map(d => {
                            if (d.correct === 1)
                                return (
                                    <>
                                        <li><ChallengesDiv color="#C1FF8F"><Link to={`/quiz/${d.category}/${d.num}`}><p style={{ fontSize: '18px' }}>{d.name}<br />{d.point}<br />문제 번호: {d.num}</p></Link></ChallengesDiv><br /></li>
                                    </>

                                )
                            else
                                return (
                                    <>
                                        <li><ChallengesDiv><Link to={`/quiz/${d.category}/${d.num}`}><p style={{ fontSize: '18px' }}>{d.name}<br />{d.point}<br />문제 번호: {d.num}</p></Link></ChallengesDiv><br /></li>
                                    </>

                                )
                        })
                    }
                </ul>
                <br />
                <br />
                <br />
            </div>
        </>
    );
}


export default ChallengesItem;