import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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


/* 브라우저 크기에 따라 가로 크기 변경 */
@media (max-width: 1024px) {
    width: 768px;
}
@media (max-width: 768px) {
    width: 100%;
}

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
    height: 80px;
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
`;

const categoryArr = ["Forensics", "Pwnable", "Cryptography", "ReverseEngineering", "Webhacking", "MISC", "Networking"]

const ChallengesItem = ({ data }) => {
    const filterArray = (category) => {
        return data.filter(element => element.category === category);
    }

    return (
        <>
            <StyledList>
                {categoryArr.map(category => <ChallengeRow data={filterArray(category)} />)}
                {/* <ChallengeRow data={filterArray("Forensics")} />
                <ChallengeRow data={filterArray("Pwnable")} />
                <ChallengeRow data={filterArray("ReverseEngineering")} />
                <ChallengeRow data={filterArray("Cryptography")} />
                <ChallengeRow data={filterArray("Webhacking")} />
                <ChallengeRow data={filterArray("MISC")} />
                <ChallengeRow data={filterArray("Networking")} /> */}
            </StyledList>
        </>
    );
};

const ChallengeRow = ({ data }) => {

    return (
        <div>
            <p>{data[0].category}</p>
            <ul>
                {
                    data.map(d => {
                        return <li><ChallengesDiv><p>{d.name} {d.point}</p></ChallengesDiv><br /></li>
                    })
                }
            </ul>
            <br />
        </div>
    );
}

export default ChallengesItem;