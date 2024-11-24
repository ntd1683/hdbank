---
sidebar_position: 2
---

# Serverless – Kiến trúc không máy chủ

## Định Nghĩa

**Serverless** là một mô hình điện toán đám mây cho phép các nhà phát triển xây dựng và triển khai ứng dụng mà không cần phải quản lý hoặc duy trì máy chủ. Mặc dù tên gọi có thể gây hiểu lầm, nhưng thực tế là vẫn có máy chủ, chỉ là người dùng không cần phải quan tâm đến việc quản lý chúng.

Ví dụ : AWS, Google, ...

AWS sẽ tính phí dựa trên số lượng lần gọi hàm và thời gian thực thi của hàm.

## Ưu điểm của AWS

- Tăng tốc độ phát triển phần mềm
- Tích hợp và kết nối
- Khả năng mở rộng (Scalability)
- Tối ưu chi phí
- Thúc đẩy đổi mới
- Hỗ trợ phát triển ứng dụng đa nền tảng

## AWS Lambda
**AWS Lambda** là một dịch vụ tính phí của AWS, cho phép bạn chạy mã mà không cần phải quản lý máy chủ. Bạn chỉ cần tải lên mã của mình và AWS sẽ chạy mã đó cho bạn.

**Triển khai AWS lambda** : khi triển khai lambda thì sẽ tách thành từng chức năng , mỗi chức năng sẽ là 1 api. Nó sẽ giúp tăng tốc độ và đỡ xung đột code.Cũng như dễ triển khai cho các team khác nhau.
