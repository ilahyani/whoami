resource "tls_private_key" "ssh_key_pair" {
  algorithm = "RSA"
  rsa_bits = 4096
}

resource "aws_key_pair" "key" {
  key_name = "key"
  public_key = tls_private_key.ssh_key_pair.public_key_openssh
}

resource "local_file" "save_key" {
  filename = "${path.module}/../pkey.pem"
  file_permission = "0600"
  content = tls_private_key.ssh_key_pair.private_key_pem
}