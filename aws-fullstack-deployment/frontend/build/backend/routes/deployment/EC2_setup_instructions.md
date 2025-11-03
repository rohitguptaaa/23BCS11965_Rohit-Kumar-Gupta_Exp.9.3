# 🧱 EC2 Setup Instructions

## 1️⃣ Launch EC2 Instances
- Go to **AWS Console → EC2 → Launch Instance**
- Choose Amazon Linux 2 AMI
- Instance type: `t2.micro`
- Allow inbound ports: `22`, `80`, `5000`
- Create key pair and download `.pem` file

## 2️⃣ Install Dependencies
SSH into your EC2 instance:
```bash
sudo yum update -y
sudo yum install -y nodejs git nginx
