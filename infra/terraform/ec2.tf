resource "aws_instance" "frontend" {
  ami = "ami-005fc0f236362e99f"
  instance_type = "t2.micro"
  vpc_security_group_ids = [aws_security_group.front-sg.id]
  key_name = aws_key_pair.front_key.key_name
  tags = {
    Name = "frontend"
  }
  depends_on = [local_file.save_key]
}

resource "aws_security_group" "front-sg" {
    ingress {
        from_port = 22
        to_port = 22
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    
    ingress {
        from_port = 5173
        to_port = 5173
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
}

resource "local_file" "ansible_inventory" {
  filename = "${path.module}/../ansible/inventory"
  content = <<EOT
[frontend]
${aws_instance.frontend.public_ip}  ansible_ssh_user=ubuntu ansible_ssh_private_key_file="{{ playbook_dir }}/../pkey.pem"
EOT
}