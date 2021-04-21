#!/usr/bin/env bash

docker up -d

docker run --link MySql:db -p 8080:8080 adminer
