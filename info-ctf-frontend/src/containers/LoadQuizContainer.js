import React, { useEffect } from 'react';
import ShowQuizItem from '../components/Quiz/ShowQuizItem';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadquizPost, initialize } from '../modules/loadquiz';
import { deletequizPost, quizinitialize } from '../modules/deletequiz';
import { deletefilePost } from '../modules/deletefile';
import { downloadfilePost, downloadinitialize } from '../modules/downloadfile';
// import { saveAs } from 'file-saver';




const LoadQuizContainer = ({ match, history }) => {
    const dispatch = useDispatch();
    const { num } = match.params;
    var quiz_num = { num }.num;
    // const fileSaver = require('file-saver');
    const { loadquiz, deletequiz, deletequizerror, downloadfile, downloadfileerror, error, loading } = useSelector(({ loadquiz, deletequiz, deletefile, downloadfile, loading }) => ({
        loadquiz: loadquiz.loadquiz,
        error: loadquiz.error,
        deletequiz: deletequiz.deletequiz,
        deletequizerror: deletequiz.error,
        downloadfile: downloadfile.downloadfile,
        downloadfileerror: downloadfile.error,
        loading: loading['loadquiz/LOAD_QUIZ'],
    }));

    // 페이지가 마운트(처음 보여질 때)될 때 퀴즈목록 api 요청
    useEffect(() => {
        dispatch(downloadinitialize());
        dispatch(loadquizPost(num));

        return () => {
            dispatch(downloadinitialize());
            dispatch(initialize());
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

    const onDownload = e => {
        const users = localStorage.getItem("users") ? localStorage.getItem('user') : null;
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
        if (downloadfile) {
            console.log("요청성공");
            const url = window.URL.createObjectURL(new Blob([downloadfile]));
            const link = document.createElement("a");
            link.href = url;
            console.log(link);
            link.setAttribute("download", "file.zip");
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url);
            alert("파일이 다운로드되었습니다!");
        }
        if (downloadfileerror) {
            console.log(downloadfileerror);
            console.log("오류발생");
        }
    }, [downloadfile, downloadfileerror]);

    return <ShowQuizItem loadquiz={loadquiz} loading={loading} onSubmit={onSubmit} onDownload={onDownload} />;
};


export default withRouter(LoadQuizContainer);