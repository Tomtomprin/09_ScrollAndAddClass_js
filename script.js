const E = document.querySelector('.classC');
console.log(E);



window.onscroll = function () {
    scroll_position = window.pageYOffset;
    // console.log(scroll_position);
    if (scroll_position > 700) {
        E.classList.add('classC_new');
    } else {
        E.classList.remove('classC_new');
    }
};

// 関数名をつけるなら以下の記述
// function AAA() {
//     scroll_position = window.pageYOffset;
//     console.log(scroll_position);
//     if (scroll_position > 700) {
//         E.classList.add('classC_new');
//     } else {
//         E.classList.remove('classC_new');
//     }
// };
// window.onscroll = AAA;


// アロー関数使った場合
// window.onscroll = () => {
//     scroll_position = window.pageYOffset;
//     console.log(scroll_position);


//     if (scroll_position > 700) {
//         E.classList.add('classC_new');
//     } else {
//         E.classList.remove('classC_new');
//     }
// };