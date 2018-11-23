# Docker-Nginx-Node
Deploy **production ready** Nginx/React Application and NodeJS backend.

### Dependencies
- Docker installed.

### Get Started
1) `git clone git@github.com:philliprognerud/Docker-Nginx-Node.git`
2) `docker-compose up -d`

### Notes
This pre-configured deployment spins up an Nginx and NodeJS service (container) on your host machine. From your React application you will be able to make HTTP requests to `localhost/api/*`. The React app is publicly accessible, and can make GET/POST requests to the NodeJS service that it is linked to. Trying to navigate to the backend via `localhost:port/api/*` will not work. The NodeJS is directly linked to the Nginx container, and they can communicate within their isolated network.

