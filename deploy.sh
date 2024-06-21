#!/usr/bin/env bash

rsync -avz --exclude=node_modules --exclude=.git --exclude=.next ./ uhs:/home/ubuntu/college-proj
