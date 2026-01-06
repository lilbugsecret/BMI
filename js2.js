let day = +prompt("Vui lòng nhập tháng từ 1-12");
let message = "";
switch (day) {
  case 2:
    message = " có 28 ngày";
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    message = " có 31 ngày";
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    message = " có 30 ngày";
    break;
  default:
    message = "Vui lòng thử lại";
    break;
}

if (day > 1 && day < 12) {
  alert("Tháng " + day + message);
} else alert(message);
