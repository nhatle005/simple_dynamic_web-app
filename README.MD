# Làm quen với ứng d  web động đơn giản

# Mục tiêu
- hiểu và sd kn cơ bản về ứng d web động
- sd HTML, css và javaScript để tạo một giao diện cơ bản cho ứng d web động.
- sd  `'Node.js'` và '`Express`' để tạo các server đơn giản xử lý các yêu cầu HTTP.
- Tích hợp form với logic xử lý phản hồi từ server, thực hiện thao tác gửi dl từ client lên server thông qua HTTP POST
- kiểm thử đơn giản với Postman để kiểm tra phản hồi từ server đối với các yêu cầu GET và POST, bao gồm cả trường hợp lệ và không hợp lệ.

## CÁC BƯỚC THỰC HIỆN

### B1: Khởi tạo dự án  Node.js
1. mỞ terminal và tạo thư mục dự án:
```bash
  mkdir simple_dynamic_web_app
  cd simple_dynamic_web_app
  code .
```
**Lưu ý:** Việc này chúng ta vừa làm bằng GUI thay vì CLI như trên
2. Khởi tạo dự án Node.js:
```bash
npm init -y
```
**lưu ý:** chúng ta cần phải cài node.js trước, các bạn có thể google để xem hướng dẫn cài đặt

### Bước2: cài đặt Express
- Cài đặt Express framework :
```bash 
npm install express --save
```

### Bước 3: Tạo file app.js để xây dựng server
1. Trong thư mục dự án, tạo file `app.js` với nội dung:
```javascript
// yêu cầu module Express
const express = require('express');

// Tạo một ứng dụng Express
const app = express

// Thiết lập cổng cho server, ở đây là cổng 3000
const port =3000;

// Middleware để phân tích dữ liệu từ request
app.use(express.urlencoded({ extended: true }));

// Middleware để phân tích dữ liệu JSON từ body của yêu cầu
// Điều này cho phép Express hiểu và xử lý dữ liêuh JSON từ request
app.use(express.json());

// Định nghĩa route chính để trả về trang chào mừng khi người dùng truy cập vào địa chỉ '/'
app.get('/', (req,res) => {
    res.send('Chào mừng bạn đến với ứng dụng web động!');
});

// Route POST nhận dữ liệu từ client và trả về phản hồi
// Khi client gửi dữ liệu đến địq chỉ '/submit' với phương thức POST, route này sẽ xử lý
 app.post('/submit',(req, res) => {
    //Lấy thuộc tính name từ body của request
    const { name} = req.body;
  
 // Nếu name tồn tại, trả về phản hồi chào mừng với tên đã đăng nhập
 if (name) {
    res.json({ message: 'Chào mừng ${name}!'});
 } else {
     // Nếu 'name' không tồn tại, trả về phản hồi lỗi 
     res.status(400).json({ message: 'Vui lòng cung cấp tên của bạn.'});
 }
});

// Server lắng nghe tại cổng 3000
// Khi server bắtd dầud chạy, nó sẽ lắng nghe các yêu cầu từ cổng đã chỉ
app.listen(port, () => {
    console.log('Ứng dụng đang chạy tại http://localhost:${port}');
});
```
2. Chạy server bằng lệnh:
```bash
node app.js
```
Xử lý lỗi, nếu có:
```
```





"# simple_dynamic_web-app" 
