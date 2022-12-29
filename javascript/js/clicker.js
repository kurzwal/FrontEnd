var lv = 0;

const lvplus = () => {
    lv++;
}

const change_lv = () => {
    // alert(typeof(document.querySelector('#lv')));
    var lev = document.querySelector('#lv');
    lev.innerHTML = lv;
}

const lvup = () => {
    lvplus();
    change_lv();
}