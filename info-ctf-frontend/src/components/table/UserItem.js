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
top: 80px;
background: #000000;
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
    font-size: 24px;
}
`;

const StyledSelect = styled.select`
font-size: 2rem;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    position: absolute;
    width: 340px;
    height: 50px;
    left: 12.4rem;
    top: 170px;
    margin-top: 50px;
    background: #000000;
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
`;

const StyledInput = styled.input`
    position: absolute;
    font-size: 2rem;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    width: 250px;
    height: 50px;
    right: 345px;
    top: 224px;
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
left: 1045px;
top: 47px;
background: #000000;
border-radius: 3px;
text-align: center;
color: grey;
cursor: pointer;

/* 브라우저 크기에 따라 가로 크기 변경 */
@media (max-width: 1024px) {
    width: 768px;
}
@media (max-width: 768px) {
    width: 100%;
}
`;


// 유저검색창
const UserItem = ({ onSubmit, onChangeField, srch, column, information }) => {


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
            <p id="text1">Search Field</p>
            <StyledSelect name="column" onChange={onChange} value={column}>
                <option value="id">ID</option>
                <option value="name">NickName</option>
                <option value="email">Email</option>
                <option value="team">Team</option>
            </StyledSelect>
            <StyledInput name="srch" type="text" value={srch} onChange={onChangeInput} />
            <StyledButton onClick={onSubmit}>search</StyledButton>
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
        </>
    );
};

// 검색결과로 리턴된 배열을 반복해서 보여주는 부분
const UserRow = ({ information }) => {

    // information 값이 유효할 때 (렌더링 오류가 나지 않게 객체든 배열이든 꼭 이 유효성 검사를 해주어야 함)
    if (information === null) {
        return <StyledTable><h1 style={{ textDecoration: 'none', color: 'white' }}>존재하지 않는 계정정보입니다</h1></StyledTable>
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






