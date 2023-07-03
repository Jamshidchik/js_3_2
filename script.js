var n1 = +prompt("1-son krit");
var n2 = +prompt("2-son krit");
var n3 = +prompt("3-son krit");

if (n1 > n2 && n2 < n3 || n1 < n2 && n2 > n3 ){
  alert("O'rtacha qiymat " + n1)
} else if( n2 > n1 && n1 < n3 || n1 < n2 && n2 > n3) {
  alert("O'rtacha qiymat " + n2) 
} else if( n1 > n2 && n2 < n3){
  alert("O'rtacha qiymat " + n3)
}else {
  alert("Nimadur xato ketdi")
}


// 1-son katta 2-sondan va 2-son katta 3-sondan yoki 1-sondan katta 2-son va 2-son katta 3-sondan;
// 2-son katta 1-sondan va 1-son katta 3-sondan yoki 1-sondan katta 2-son va 2-son katta 3-sondan;
// 3-son katta 1-sondan va 1-son katta 2-sondan yoki 1-sondan katta 2-son va 2-son katta 3-sondan;
