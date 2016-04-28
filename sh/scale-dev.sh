#!/bin/bash

docker-compose -p boilerplatedev -f docker-compose-dev.yml scale $@
