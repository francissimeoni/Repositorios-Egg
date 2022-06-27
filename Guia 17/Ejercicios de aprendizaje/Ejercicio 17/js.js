document.getElementById("btnLoad").onclick = () => {

    var arr1 = new Array(6);
    var arr2 = new Array(6);

    arr1[0] = document.getElementById("1f").value;
    arr1[1] = document.getElementById("2f").value;
    arr1[2] = document.getElementById("3f").value;
    arr1[3] = document.getElementById("4f").value;
    arr1[4] = document.getElementById("5f").value;
    arr1[5] = document.getElementById("6f").value;


    for (let i = 0; i < 6; i++) {

        if (i < 4) {
            arr2[i] = arr1[i];
        } else {
            arr2[i] = "";
        }

    }


    document.getElementById("1d").value = arr2[0]
    document.getElementById("2d").value = arr2[1]
    document.getElementById("3d").value = arr2[2]
    document.getElementById("4d").value = arr2[3]
    document.getElementById("5d").value = arr2[4]
    document.getElementById("6d").value = arr2[5]


}