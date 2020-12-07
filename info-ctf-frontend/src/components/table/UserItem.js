import React from 'react';
import styled from 'styled-components';

const UserItemnBox = styled.div`
width: 100%;
margin-left: -10px;
height: 100%;
margin-bottom: -0px;
background: #00000;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

span {
    font-size: 50px;
    color: white;
    margin-top: 25px;
}
<<<<<<< HEAD

/* 브라우저 크기에 따라 가로 크기 변경 */
@media (max-width: 1024px) {
    width: 100%;
}
@media (max-width: 768px) {
    width: 100%;
}
=======
    /* 브라우저 크기에 따라 가로 크기 변경 */
    @media (max-width: 1024px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
>>>>>>> 1ccb9f9093abd7cf2e230053fadb25dc6ecb8a7e

font-family: 'Do Hyeon', sans-serif;
color: white;  
`;

const StyledTable = styled.div`
position: relative;
font-size: 2rem;
border: 2px solid #FFFFFF;
box-sizing: border-box;
width: 1110.5px;
height: 430px;
margin-left: 43px;
margin-top: 140px;
bottom: 20px;
background: #000000;
border-radius: 3px;
text-align: center;
color: white;

/* 브라우저 크기에 따라 가로 크기 변경 */
@media (max-width: 1024px) {
    width: 100%;
}
@media (max-width: 768px) {
    width: 100%;
}

table {
    width: 100%;
    font-size: 24px;
}

font-family: 'Do Hyeon', sans-serif;
color: white;
`;

const StyledSelect = styled.select`
    position: relative;
    font-size: 2rem;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    width: 340px;
    height: 50px;
    margin-right: 730px;
    top: 120px;
    background: #000000;
    border-radius: 3px;
    text-align: center;
    color: white;
`;

const StyledInput = styled.input`
    position: relative;
    font-size: 2rem;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    width: 250px;
    height: 50px;
    right: 345px;
    top: 69px;
    left: 330px;
    margin-bottom: -160px;
    background: #000000;
    border-radius: 3px;
    text-align: center;
    color: white;

`;

const StyledButton = styled.button`
position: relative;
font-size: 2rem;
border: 2px solid #FFFFFF;
box-sizing: border-box;
width: 109.5px;
height: 51px;
top: 106px;
left: 520px;
background: #000000;
border-radius: 3px;
text-align: center;
color: grey;
cursor: pointer;

`;


// 유저검색창
const UserItem = ({ onSubmit, onChangeField, property, search, information }) => {


    const onChange = e => {
        const { name } = e.target;
        onChangeField({ key: name, value: e.target.value });
    };

    const onChangeInput = e => {
        const { name } = e.target;
        onChangeField({ key: name, value: e.target.value });
    };


    return (
        <>
            <UserItemnBox>
                <StyledSelect name="property" onChange={onChange} value={property}>
                    <option value="id">ID</option>
                    <option value="name">NickName</option>
                    <option value="email">Email</option>
                    <option value="team">Team</option>
                </StyledSelect>
                <StyledInput name="search" type="text" value={search} onChange={onChangeInput} />
            &nbsp;
            <StyledButton style={{ marginTop: '50px' }} onClick={onSubmit}>search</StyledButton>
                <StyledTable>
                    <table>
                        <thead>
                            <tr>
                                <th>-name-</th>
                                <th>-team-</th>
                                <th>-score-</th>
                                <th>-rank-</th>
                            </tr>
                        </thead>
                        <UserRow information={information} />
                    </table>
                </StyledTable>
            </UserItemnBox>
        </>
    );
};

// 검색결과로 리턴된 배열을 반복해서 보여주는 부분
const UserRow = ({ information }) => {

    // information 값이 유효할 때 (렌더링 오류가 나지 않게 객체든 배열이든 꼭 이 유효성 검사를 해주어야 함)
    if (information === null) {
        return null;
    }

    if (!information) {
        return null;
    }

    return (
        <>
            {information.map(info =>
                (<UserList key={info.num} information={info} />
                ))}
        </>
    );
}

// 검색결과 리턴된 배열의 내용을 보여주는 부분
const UserList = ({ information }) => {
    const { name, team, score, rank } = information;

    return (
        <>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{team}</td>
                    <td>{score}</td>
                    <td>{rank}</td>
                </tr>
            </tbody>
        </>
    );
}

export default UserItem;






