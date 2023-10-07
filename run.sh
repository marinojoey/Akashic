#!/usr/bin/env bash

set -euo pipefail

# Constants for colored output
WHITE='\033[1;37m'
NC='\033[0m'

# Remove previous containers and volumes
echo -e "${WHITE}Shutting down previous environment...${NC}"
docker compose down -v

# Build images
echo -e "${WHITE}Building image containers...${NC}"
docker compose build

# Start Akashic and Nginx services
echo -e "${WHITE}Starting Akashic and Nginx services...${NC}"
docker compose up -d --remove-orphans app webserver

# Install dependencies for Akashic
echo -e "${WHITE}Installing Akashic's dependencies...${NC}"
docker compose exec app composer install

# Start the Personal Site
echo -e "${WHITE}Starting Personal...${NC}"
docker compose up -d --remove-orphans nextjs

# It built, friend
echo -e "${WHITE}DAAAANG, docker built!!! Nice.${NC}"
