# WHOAMI CHAT

Welcome to WHOAMI, a simple real-time web chat application built with NodeJS, ReactJS and the Socket.io library with Redis as a primary database.

## Project Structure

├── frontend/        # Application Frontend (ReactJS)
├── backend/         # Application Backend (Node.js, Socket.io)
├── infra/           
│   ├── terraform/   # AWS infrastructure Setup (Terraform)
│   └── ansible/     # AWS infrastructure Configuration (Ansible)

## Screenshots
  <img src="https://github.com/ilahyani/whoami/blob/main/Screenshots/Screenshot1.jpg" width="100%" />
  <img src="https://github.com/ilahyani/whoami/blob/main/Screenshots/Screenshot2.jpg" width="100%" />

## Functionality

- **Single Global Channel:** Connect with other users in a single global channel for seamless communication.
- **Nickname-based Login:** Join the chat app by simply choosing a nickname, and a random avatar will be generated for you.
- **Connected User List:** See a list of all the users currently connected to the chat.