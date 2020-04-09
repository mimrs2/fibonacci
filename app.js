'use strict';
// 配列を作る
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
// もし Map が、n をキーとした答えを持っていればその値をそのまま関数の値として返し、 
// そうでない場合は、再帰関数を計算して値を求め、それを Map に格納した後に返すという実装です。
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
// ４０のフィボナッチ数を求める
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}