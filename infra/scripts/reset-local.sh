#!/bin/bash
docker-compose -f docker-compose.local.yml down -v
rm -rf infra/docker/postgres/data
rm -rf infra/docker/redis/data
docker-compose -f docker-compose.local.yml up -d
