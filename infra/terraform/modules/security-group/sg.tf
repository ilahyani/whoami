# resource "aws_security_group" "sg_module" {
#     name = var.name
#     egress {
#         from_port = 0
#         to_port = 0
#         protocol = "-1"
#         cidr_blocks = ["0.0.0.0/0"]
#     }
#     ingress {
#         from_port = 22
#         to_port = 22
#         protocol = "tcp"
#         cidr_blocks = ["0.0.0.0/0"]
#     }
#     dynamic "ingress" {
#         for_each = var.ingress_rules
#         content {
#             protocol = "tcp"
#             from_port = ingress.value.from_port
#             to_port = ingress.value.to_port
#             cidr_blocks = ingress.value.cidr_blocks
#         }
#     }
# }

# output "sg_id" {
#     value = aws_security_group.sg_module.id
# }