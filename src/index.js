// const,letの変数宣言
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "変数を上書き";
// console.log(val1);

// // var変数は際宣言可能
// var val1 = "var祭宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2)

// // letは際宣言不可
// // let val2 = "let変数数再宣言"
// // console.log(val2)

// const val3 = "const変数"
// console.log(val3)

// const変数は上書き不可
// val3 = "const変数を上書き"

// const val3 = "const変数を際宣言"

// オブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "新井",
//   age: 28,
// }
// val4.name = "前田"
// val4.addres = "広島"
// console.log(val4)

// const val5 = ["dog", "cat"];
// console.log(val5);

// val5[0] = "bird";
// val5.push("monkey");

// テンプレート文字列

// const name = "じゃけえ"
// const age = 28
// // 「私の名前はじゃけえです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。" + "年齢は" + age + "です。" ;
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2)

// アロー関数

// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

// 分割代入
// const myplofile = {
//   name: "じゃけえ",
//   age: 28
// };

// const message1 = `私の名前は${myplofile.name}です。年齢は${myplofile.age}です。`
// console.log(message1)

// const { name , age } = myplofile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2)

// const myplofile = ['じゃけえ',28];

// const message3 = `名前は${myplofile[0]}です。年齢は${myplofile[1]}です。`
// console.log(message3)

// const [name, age] = myplofile;
// const message4 = `名前は${name}です。年齢は${age}です。`
// console.log(message4)

// デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`)
// sayHello("じゃけえ")

// スプリット構文

// 配列の展開
// const arr1 = [1,2];
// console.log(arr1)
// console.log(...arr1)

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1)

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、統合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6)
// console.log(arr4)

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);

// mapやfilltterを使った配列の処理

// const nameArr = ["田中","山田","じゃけえ"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index+1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2)

// nameArr.map((name ,index)=>console.log(`${index+1}番目は${name}です。`))

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })

// console.log(newNumArr)

// const newNameArr = nameArr.map((name) => {
//   if (name == "じゃけえ"){
//     return name;
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr)
