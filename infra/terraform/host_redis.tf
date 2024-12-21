module "redis_ec2_instance" {
    source        = "./modules/ec2"
    name          = var.redis_name
    ami           = var.ami
    instance_type = var.instance_type
    key_name      = aws_key_pair.key.key_name
}

resource "aws_security_group_rule" "allow_backend_connection" {
    security_group_id = module.redis_ec2_instance.sg_id
    cidr_blocks = ["0.0.0.0/0"]
    # source_security_group_id = module.backend_ec2_instance.sg_id
    # cidr_blocks = ["${module.backend_ec2_instance.private_ip}/32"]
    type = "ingress"
    protocol = "tcp"
    from_port = var.redis_from_port
    to_port = var.redis_to_port
}