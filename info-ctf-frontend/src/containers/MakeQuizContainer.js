import React, { useEffect, useState, useCallback, } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initialize, changeField, makequizPost } from '../modules/makequiz';
import { deletefilePost } from '../modules/deletefile';
import MakeQuizItem from '../components/Quiz/MakeQuizItem';
import client from '../lib/api/client';
import { getCookie } from '../lib/cookie';

const MakeQuizContainer = ({ history }) => {
    const [uploadFileData, setUploadFileData] = useState(null);

    const dispatch = useDispatch();
    const { category, point, quizname, contents, makequiz, error, file, flag } = useSelector(({ makequiz, uploadfile, deletefile, }) => ({
        category: makequiz.category,
        point: makequiz.point,
        quizname: makequiz.quizname,
        flag: makequiz.flag,
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
        const token = getCookie("user");
        const formdata = new FormData();
        try {
            formdata.append("quizname", quizname);
            formdata.append("filetoadd", uploadFileData);
            await client.post(`/api/admin/file`, formdata, { headers: { "Authentication": token } })
        } catch (err) {
            alert("에러");
        }
    };

    // 파일 삭제 api 요청
    const fileDelete = e => {
        const users = localStorage.getItem("users") ? localStorage.getItem('user') : null;
        const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;
        const token = getCookie("user");
        if (admin) {
            dispatch(deletefilePost({ quizname, token }));
            setUploadFileData(null);
        }
        if (users) {
            alert("어드민만 사용 가능한 기능입니다.");
        }
    };

    // 문제 만들기 api 요청
    const onSubmit = e => {
        e.preventDefault();
        const users = localStorage.getItem("users") ? localStorage.getItem('user') : null;
        const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;
        const token = getCookie("user");
        if (admin) {
            dispatch(makequizPost({ category, contents, point, quizname, flag, token }));
            fileAdd(); // file 추가 api 요청
        }
        if (users) {
            alert("어드민만 사용 가능한 기능입니다.");
        }
    };

    // 문제 만들기 성공/실패 확인
    useEffect(() => {
        if (makequiz) {
            if (makequiz) {
                alert("문제 만들기 완료");
                history.push('/challenges');
            }
            if (error) {
                alert("문제 만들기 실패");
            }
        }
    }, [history, makequiz, error]);


    return (
        <MakeQuizItem
            onChangeField={onChange}
            ChangeFile={setUploadFileData}
            onSubmit={onSubmit}
            category={category}
            point={point}
            quizname={quizname}
            contents={contents}
            makequiz={makequiz}
            file={file}
            fileAdd={fileAdd}
            fileDelete={fileDelete}
            flag={flag}
        />
    );
};

export default withRouter(MakeQuizContainer);
