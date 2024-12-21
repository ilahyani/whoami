resource "aws_security_group" "sg" {
    name = "${var.name}_sg"
    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
    ingress {
        from_port = 22
        to_port = 22
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
}

resource "aws_instance" "ec2_module" {
    tags = {
        Name = var.name
    }
    ami = var.ami
    instance_type = var.instance_type
    vpc_security_group_ids = [aws_security_group.sg.id]
    key_name = var.key_name
}

resource "local_file" "ansible_hosts_inventory" {
  filename = "${path.module}/../../../ansible/inventories/${var.name}_host"
  content = <<EOT
[${var.name}]
${aws_instance.ec2_module.public_ip} ansible_ssh_user=ubuntu ansible_ssh_private_key_file="{{ playbook_dir }}/../../pkey.pem" ansible_ssh_common_args='-o StrictHostKeyChecking=no'
EOT
}

output "sg_id" {
  value = aws_security_group.sg.id
}