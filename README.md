# Express.js Auto-Deploy Demo

## Mô tả
- Ứng dụng Express.js được deploy tự động lên EC2 khi push GitHub
- Dùng CodeBuild + SSH để zip, copy, unzip, cài npm và khởi chạy node app

## Điều kiện:
- EC2 cài nodejs, unzip
- Dán public key vào ~/.ssh/authorized_keys
- EC2 mở port 80
- Secrets Manager chứa EC2_PRIVATE_KEY đúng định dạng PEM

## Sau khi push:
- CodeBuild tự động run
- Kết nối EC2 qua SSH
- Deploy app tại /home/ec2-user/app và chạy node

## Truy cập:
http://<YOUR_EC2_PUBLIC_IP>
