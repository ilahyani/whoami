terraform {
    required_providers {
        aws = {
            source: "hashicorp/aws",
            version = "~> 4.16"
        }
    }
    backend "s3" {
        bucket = "my-tf-state-backend"
        key = "terraform.tfstate"
        region = "us-east-1"
        dynamodb_table = "ft-state"
    }
}