#!/bin/bash
protoVersion=v100
protoFile=../store/store/src/main/resources/${protoVersion}.proto

node_modules/.bin/pbjs -t static-module -w commonjs -o protocol/${protoVersion}.js ${protoFile}
node_modules/.bin/pbts -o protocol/${protoVersion}.d.ts protocol/${protoVersion}.js
