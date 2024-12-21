module "backend_ec2_instance" {
    source = "./modules/ec2"
    name = var.backend_name
    ami = var.ami
    instance_type = var.instance_type
    key_name = aws_key_pair.key.key_name
}

resource "aws_security_group_rule" "allow_frontend_connection" {
    security_group_id = module.backend_ec2_instance.sg_id
    cidr_blocks = ["0.0.0.0/0"]
    # cidr_blocks = ["${module.frontend_ec2_instance.private_ip}/32"]
    # source_security_group_id = module.frontend_ec2_instance.sg_id
    type = "ingress"
    protocol = "tcp"
    from_port = var.backend_from_port
    to_port = var.backend_to_port
}

# resource "aws_security_group_rule" "allow_redis_connection" {
#     security_group_id = module.backend_ec2_instance.sg_id
#     cidr_blocks = ["0.0.0.0/0"]
#     # source_security_group_id = module.redis_ec2_instance.sg_id
#     type = "ingress"
#     protocol = "tcp"
#     from_port = var.redis_from_port
#     to_port = var.redis_to_port
# }