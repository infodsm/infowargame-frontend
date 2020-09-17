import React, { useEffect, useState, useCallback, } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, uploadfilePost } from '../modules/uploadfile';
import { initialize, changeField, makequizPost } from '../modules/makequiz';
import MakeQuizItem from '../components/Quiz/MakeQuizItem';
import client from '../lib/api/client';

const MakeQuizContainer = ({ history }) => {
    const [uploadFileData, setUploadFileData] = useState(null);

    const dispatch = useDispatch();
    const { category, id, point, quizname, contents, makequiz, error, file } = useSelector(({ makequiz, uploadfile }) => ({
        category: makequiz.category,
        id: makequiz.id,
        point: makequiz.point,
        quizname: makequiz.quizname,
        contents: makequiz.contents,
        makequiz: makequiz.makequiz,
        error: makequiz.error,
        file: uploadfile.file,
    }));

    // 인풋 값 업데이트
    const onChange = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    // 컴포넌트가 맨 처음 렌더링 될 때 인풋 초기화
    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    // 컴포넌트가 언마운트될 때 인풋 초기화
    useEffect(() => {
        return () => {
            dispatch(initialize());
        }
    }, [dispatch]);

    // 파일 추가 API 요청
    const fileAdd = async e => {
        if (!uploadFileData) return;
        const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
        const formdata = new FormData();
        try {
            formdata.append("quizname", quizname);
            formdata.append("filetoadd", uploadFileData);
            await client.post(`/api/admin/fileadd`, formdata, { headers: { 'token': token } })
        } catch (err) {
            alert("에러");
        }
    };

    // 문제 만들기 api 요청
    const onSubmit = e => {
        e.preventDefault();
        const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
        dispatch(makequizPost({ category, id, point, quizname, contents, token }));
        fileAdd(); // file 추가 api 요청
    };

    // 문제 만들기 성공/실패 확인
    useEffect(() => {
        if (makequiz) {
            if (makequiz.check === true) {
                alert("문제 만들기 완료");
                history.push('/challenges');
            }
            if (makequiz.check === false) {
                alert("문제 만들기 실패");
            }
        }
        if (error) {
            alert("오류발생");
            console.log(error);
        }
    }, [history, makequiz, error]);


    return (
        <MakeQuizItem
            onChangeField={onChange}
            ChangeFile={setUploadFileData}
            onSubmit={onSubmit}
            category={category}
            id={id}
            point={point}
            quizname={quizname}
            contents={contents}
            makequiz={makequiz}
            file={file}
            fileAdd={fileAdd}
        />
    );
};

export default withRouter(MakeQuizContainer);
