#!/usr/bin/env bash

docker run --name MySql -p 3308:3306 -p 33060:33060 -e MYSQL_ROOT_HOST='%' -e MYSQL_ROOT_PASSWORD=senha@123 -d mysql/mysql-server:latest

docker pull adminer

docker run --link MySql:db -p 8080:8080 adminer
