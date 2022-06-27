document.getElementById("btnFill").onclick = () => {

    var arr1 = new Array(5);
    var arr2 = new Array(5);


    for (let i = 0; i < 5; i++) {
        arr1[i] = Math.round(Math.random() * 10);
        arr2[i] = Math.round(Math.random() * 10);
    }

    console.log(arr1);
    console.log(arr2);
}