#!/bin/bash

sed -i 's/''Local''/'${NODE_ENV}'/' /app/index.html
