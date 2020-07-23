let data = {
    headers: [{
        text: "Mã Tỉnh",
        value: "code",
      },
      {
        text: "Tên Tỉnh",
        value: "name",
      },
      {
        text: "Năm thành lập",
        value: "founded",
      },
    ],
    data: [{
        code: "PROVINCE_1",
        name: "Tỉnh 1",
        founded: "1990",
      },
      {
        code: "PROVINCE_2",
        name: "Tỉnh 2",
        founded: "1992",
      },
      {
        code: "PROVINCE_3",
        name: "Tỉnh 3",
        founded: "1985",
      },
      {
        name: "Tỉnh 4",
        code: "PROVINCE_4",
        founded: "1975",
      },
      {
        name: "Tỉnh 5",
        code: "PROVINCE_5",
        founded: "1999",
      },
    ],
}

var y = data.headers     //(soos cot)
var z = document.getElementById('a')  //lay ra hang dau tien <tr>
var z1 = document.getElementById('table') //lay ra table


let j = 0   
while (j < y.length) {
    var k = document.createElement("th")
    var t = document.createTextNode(y[j].text)
    k.appendChild(t)
    z.appendChild(k)
    j++
}

var y1 = data.data
for (let i = 0; i < y1.length; i++) {
    var k1 = document.createElement("tr")
    z1.appendChild(k1)
    // var k3 = Object.keys(y1[i])
    // console.log(k3);
    for (let index = 0; index < y.length; index++) {
        var k2 = document.createElement("td")
        var t1 = document.createTextNode(y1[i][y[index].value]) // value trùng vs tên của propety trong phần data
        k2.appendChild(t1)
        z1.appendChild(k2)
    }
}



