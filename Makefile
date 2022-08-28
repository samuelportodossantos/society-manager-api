init:
	cp .env.example .env
	docker-compose up -d
up:
	docker-compose up -d
restart:
	docker-compose restart
down:
	docker-compose down
reboot:
	docker-compose down; docker-compose up -d
build:
	docker-compose up -d --build
logs:
	docker logs -f api
bash:
	docker exec -it api sh