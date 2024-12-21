module "frontend_ec2_instance" {
    source = "./modules/ec2"
    name = var.frontend_name
    ami = var.ami
    instance_type = var.instance_type
    key_name = aws_key_pair.key.key_name
}

resource "aws_security_group_rule" "allow_connection_from_internet" {
    security_group_id = module.frontend_ec2_instance.sg_id
    cidr_blocks = ["0.0.0.0/0"]
    type = "ingress"
    protocol = "tcp"
    from_port = var.frontend_from_port
    to_port = var.frontend_to_port
}