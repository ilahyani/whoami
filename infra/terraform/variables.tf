variable "ami" {
    type = string
}

variable "instance_type" {
    type = string
}

variable "frontend_name" {
    type = string
}

variable "frontend_to_port" {
  type = number
}

variable "frontend_from_port" {
  type = number
}

variable "frontend_cidr_blocks" {
  type = string
}

variable "backend_to_port" {
  type = number
}

variable "backend_from_port" {
  type = number
}

variable "backend_name" {
  type = string
}

variable "redis_to_port" {
  type = number
}

variable "redis_from_port" {
  type = number
}

variable "redis_name" {
  type = string
}