let A = new Array(50);
for (let i = 0; i < A.length; i++) {
    A[i] = (Math.random() * 10).toFixed(2);
}

console.log(A);

A = A.sort();


let B = new Array(20);

for (let i = 0; i < 20; i++) {
    if (i < 10) {
        B[i] = A[i];
    } else {
        B[i] = 0.5
    }

}

console.log(B);