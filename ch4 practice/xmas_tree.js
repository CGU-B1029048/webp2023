function tree(n) {
    treetop(n);
    treebuttom(n);
}
function treetop(n) {
    for (let i = 1; i <= n; i++) {
        console.log(repeatchar(n-i, ' ') + repeatchar(2*i-1, '*'));
    }
}
function treebuttom(n) {
    for (let i = 1; i < n; i++) {
        console.log(repeatchar(n-1, ' ') + '*');
    }
}
function repeatchar(n, arg_char) {
    var rpstr = '';
    for (let i = 0; i < n; i++) {
        rpstr += arg_char;
    }
    return rpstr;
}
