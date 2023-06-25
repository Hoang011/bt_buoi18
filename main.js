// them so
var danhSach = [];
function themSo() {
  var number = document.getElementById("number").value * 1;
  //tap hop cac so dc them vao danh sach

  danhSach.push(number);
  console.log(danhSach);

  // in danh sach ra man hinh
  var result = "Các số đã thêm: ";
  for (var i = 0; i < danhSach.length; i++) {
    result += danhSach[i] + ", ";
  }
  document.getElementById("listNumber").innerHTML = result;
}

//tính tổng các số dương trong mảng
function tongDuong() {
  tong = 0;
  for (var i = 0; i < danhSach.length; i++) {
    if (danhSach[i] > 0) {
      tong += danhSach[i];
    }
  }
  document.getElementById("lbTongDuong").innerHTML = tong;
}
// Đếm số dương
function demDuong() {
  dem = 0;
  for (var i = 0; i < danhSach.length; i++) {
    if (danhSach[i] > 0) {
      dem++;
    }
  }
  document.getElementById("lbDemDuong").innerHTML = dem;
}
// Số nhỏ nhất
function soNhoNhat() {
  min = danhSach[0];
  for (var i = 1; i < danhSach.length; i++) {
    if (danhSach[i] < min) {
      min = danhSach[i];
    }
  }
  document.getElementById("lbSoNhoNhat").innerHTML = min;
}
// Số dương nhỏ nhất
function duongMin() {
  danhSachDuong = [];
  for (var i = 0; i < danhSach.length; i++) {
    if (danhSach[i] > 0) {
      danhSachDuong.push(danhSach[i]);
    }
  }
  min = danhSachDuong[0];
  for (var i = 1; i < danhSachDuong.length; i++) {
    if (danhSachDuong[i] < min) {
      min = danhSachDuong[i];
    }
  }
  console.log(danhSachDuong);
  document.getElementById("lbDuongMin").innerHTML = min;
}
// Số chẵn cuối cùng
function soChanCuoi() {
  var chanCuoi = 0;
  for (var i = 1; i < danhSach.length; i++) {
    if (danhSach[i] % 2 === 0) {
      chanCuoi = danhSach[i];
    }
  }
  document.getElementById("lbSoChanCuoi").innerHTML = chanCuoi;
}
// đổi chỗ
function doiCho() {
  var vitri1 = document.getElementById("vitri1").value * 1;
  var vitri2 = document.getElementById("vitri2").value * 1;
  // danhSach[0] = vitri1;

  for (var i = 0; i <= danhSach.length; i++) {
    if (danhSach[i] == vitri1) {
      for (var j = 0; j <= danhSach.length; j++) {
        if (danhSach[j] == vitri2) {
          var temp;
          temp = vitri1;
          vitri2 = temp;
          danhSach[i] = vitri1;
          danhSach[j] = vitri2;
        }
      }
    }
    document.getElementById("lbDoiCho").innerHTML = danhSach;
  }
}
// sắp xếp tăng
document.querySelector("#btnSapXepTang").onclick = function () {
  for (var i = 0; i <= danhSach.length; i++) {
    for (var j = i + 1; j <= danhSach.length; j++) {
      if (danhSach[i] > danhSach[j]) {
        var temp = danhSach[i];
        danhSach[i] = danhSach[j];
        danhSach[j] = temp;
      }
    }
  }
  document.getElementById("lbSapXepTang").innerHTML = danhSach;
  console.log(danhSach);
};
// tìm số nguyên tố đầu tiên trong mảng

document.querySelector("#btnNguyenToDau").onclick = function () {
  var nguyenToDau = 0;
  var flag = false;
  for (var i = 0; i < danhSach.length; i++) {
    if (danhSach[i] < 2) {
      return false;
    } else
      for (var j = 2; j < danhSach[i] - 1; j++) {
        if (danhSach[i] % j == 0) {
          flag = false;
          nguyenToDau = danhSach[i];
          break;
        }
      }
  }
  console.log(nguyenToDau);
  document.getElementById("lbNguyenToDau").innerHTML = nguyenToDau;
};
function soSanh() {
  var demDuong = 0;
  var demAm = 0;
  content = "";
  for (var i = 0; i < danhSach.length; i++) {
    if (danhSach[i] > 0) {
      demDuong++;
    } else {
      demAm++;
    }
  }
  if (demDuong > demAm) {
    content = "Số dương nhiều hơn số dương";
  } else if(demDuong<demAm) {
    content = "Số âm nhiều hơn số dương";
  } else{
    content="Số âm bằng số dương";
  }
  console.log(content);
  document.getElementById("lbSoSanhAmDuong").innerHTML = content;

}