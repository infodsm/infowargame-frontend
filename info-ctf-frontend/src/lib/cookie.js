import { variance } from "../../../../../../../AppData/Local/Microsoft/TypeScript/4.0/node_modules/@babel/types/lib/index";

// 쿠키 저장하기
var setCookie = function (name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

// 사용법 : // setCookie(변수이름, 변수값, 기간);


// 쿠키 가져오기
var getCookie = function (name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};
// 사용법 :  getCookie(변수이름)
// var is_expend = getCookie("expend");
// console.log("쿠키 is_expend변수에 저장된 값: "+is_expend); (테스트용 코드)


// 쿠키 삭제하기
var deleteCookie = function (name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

// 사용법 : deleteCookie('변수이름') ex) deleteCookie('name');

export { setCookie, getCookie, deleteCookie };


// 출처: https://thereclub.tistory.com/59 [강남부자]


