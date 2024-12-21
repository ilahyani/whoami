variable "name" {
  type = string
}

variable "ingress_rules" {
  type = list(object({
    from_port = number
    to_port = number
    cidr_blocks = list(string)
  }))
}