import React, { useEffect, useCallback } from 'react';
import ShowQuizItem from '../components/Quiz/ShowQuizItem';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadquizPost, initialize } from '../modules/loadquiz';
import { deletequizPost, quizinitialize } from '../modules/deletequiz';
import { deletefilePost } from '../modules/deletefile';
import { changeField, checkanswerinitialize, checkanswerPost } from '../modules/checkanswer';
// import { downloadfilePost, downloadinitialize } from '../modules/downloadfile';
// import { saveAs } from 'file-saver';




const LoadQuizContainer = ({ match, history }) => {
    const dispatch = useDispatch();
    const { num } = match.params;
    var quiz_num = { num }.num;
    // const fileSaver = require('file-saver');
    const { loadquiz, deletequiz, deletequizerror, checkanswer, checkanswererror, flag, error, loading } = useSelector(({ loadquiz, deletequiz, deletefile, downloadfile, loading, checkanswer }) => ({
        loadquiz: loadquiz.loadquiz,
        error: loadquiz.error,
        deletequiz: deletequiz.deletequiz,
        deletequizerror: deletequiz.error,
        downloadfile: downloadfile.downloadfile,
        downloadfileerror: downloadfile.error,
        checkanswer: checkanswer.checkanswer,
        checkanswererror: checkanswer.error,
        flag: checkanswer.flag,
        loading: loading['loadquiz/LOAD_QUIZ'],
    }));

    // 인풋 값 업데이트
    const onChange = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    // 페이지가 마운트(처음 보여질 때)될 때 퀴즈목록 api 요청
    useEffect(() => {
        dispatch(loadquizPost(num));

        return () => {
            dispatch(initialize());
            dispatch(checkanswerinitialize());
        };
    }, [dispatch, num]);

    // 문제 삭제 api 요청
    const onSubmit = e => {
        e.preventDefault();
        const users = localStorage.getItem("users") ? localStorage.getItem('user') : null;
        const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;
        const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
        if (admin) {
            console.log(quiz_num);
            dispatch(deletefilePost({ quiz_num, token }));
            dispatch(deletequizPost({ quiz_num, token }));
        }
        if (users) {
            alert("어드민만 사용 가능한 기능입니다.");
        }
    };

    const onDownload = quiz_code => {
        let url = `http://121.152.10.41:4000/api/challenge/download/${quiz_code}`
        return fetch(url, {
            method: 'GET',
            responseType: 'blob',
        })
            .then(response => response.blob())
            .then(blob => {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.setAttribute('download', 'download.zip');
                // a.download = "filename.zip";
                // document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
                a.click();
                a.remove();  //afterwards we remove the element again
            })
        // 리덕스코드로 파일다운로드 처리가 잘 되지 않아 fetch로 수정, 다운로드가 되므로 리덕스 코드 주석 처리
        /*const users = localStorage.getItem("users") ? localStorage.getItem('user') : null;
        const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;
        if (users) {
            dispatch(downloadfilePost(num));
        }
        if (admin) {
            dispatch(downloadfilePost(num));
        }
        else {
            alert("로그인이 필요합니다.");
        }
        */
    };

    // 문제 정답 체크
    const onCheckAnswer = (quiz_code) => {
        const users = localStorage.getItem("users") ? localStorage.getItem('user') : null;
        const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;
        const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
        if (admin) {
            dispatch(checkanswerPost({ quiz_code, flag, token }));
        }
        if (users) {
            dispatch(checkanswerPost({ quiz_code, flag, token }));
        }
    };

    useEffect(() => {
        if (loadquiz) {
        }
        if (error) {
            console.log(error);
        }
    }, [loadquiz, error]);

    useEffect(() => {
        if (deletequiz) {
            quizinitialize();
            alert("문제 삭제 완료");
            history.push('/challenges')
        }
        if (deletequizerror) {
            console.log(deletequizerror);
        }
    }, [deletequiz, deletequizerror, history]);

    useEffect(() => {
        if (checkanswer) {
            alert("정답입니다!");
            history.push("/challenges");
        }
        if (checkanswererror) {
            alert("오답입니다.");
            window.location.reload();
        }
    }, [checkanswer, checkanswererror, history]);

    // 리덕스코드로 파일다운로드 처리가 잘 되지 않아 fetch로 수정, 다운로드가 되므로 리덕스 코드 주석 처리
    /*useEffect(() => {
        if (downloadfile) {
            console.log("요청성공");
            const url = window.URL.createObjectURL(new Blob([downloadfile]));
            const link = document.createElement("a");
            link.href = url;
            console.log(link);
            link.setAttribute("download", 'file.zip');
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url);
        }
        if (downloadfileerror) {
            console.log(downloadfileerror);
            console.log("오류발생");
        }
    }, [downloadfile, downloadfileerror]);*/

    return <ShowQuizItem loadquiz={loadquiz} loading={loading} flag={flag} onChangeField={onChange} onSubmit={onSubmit} onDownload={onDownload} quiz_code={quiz_num} onCheckAnswer={onCheckAnswer} />;
};


export default withRouter(LoadQuizContainer);