FROM mcr.microsoft.com/devcontainers/base:jammy

RUN apt-get update \
    && apt-get install -y software-properties-common \
    && add-apt-repository --yes --update ppa:ansible/ansible \
    && apt-get install -y ansible \
    && apt-get install -y python3-pip \
    && pip3 install botocore boto3 awscli \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN wget "https://releases.hashicorp.com/terraform/1.9.8/terraform_1.9.8_linux_amd64.zip" \
    && unzip "terraform_1.9.8_linux_amd64.zip" \
    && mv terraform /usr/bin

RUN aws configure set aws_access_key_id "$AWS_ACCESS_KEY_ID" \
    && aws configure set aws_secret_access_key "$AWS_SECRET_ACCESS_KEY" \
    && aws configure set region "$AWS_REGION"