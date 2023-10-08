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

duration=20
step=1

echo -ne 'Progress: [>                   ] (0%)'

echo -ne "\rWaiting for DB to establish? Idk. This makes it work! \n"
for (( i=0; i<$duration; i+=$step )); do
  sleep $step
  pct=$(( ($i * 100) / $duration ))
  barLen=$(( ($pct * 20) / 100 ))
  bar=$(printf "%0.s#" $(seq 1 $barLen))
  emptyBar=$(printf "%0.s " $(seq 1 $((20 - $barLen)) ))
  echo -ne "\rProgress: [$bar$emptyBar] ($pct%)"
done

echo -e "\rDone: [####################] (100%)"

echo -e "${WHITE}Running migrations...${NC}"
docker compose exec app php artisan migrate

echo -e "${WHITE}Running seeders...${NC}"
docker compose exec app php artisan db:seed

# It built, friend
echo -e "${WHITE}DAAAANG, docker built!!! Nice.${NC}"
