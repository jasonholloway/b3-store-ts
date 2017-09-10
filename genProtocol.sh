#!/bin/bash
set -x

protoVersion=v100
protoFile=../store/store/src/main/protobuf/${protoVersion}.proto
targetDir=./src/protocol

tempFile=temp.proto~

function main {
    rm -f $tempFile

    cat ${protoFile} \
        | egrep -v '^package .*$' \
        > $tempFile

    pbjs -t static-module -r b3 -w es6 -o ${targetDir}/${protoVersion}.js $tempFile
    rm -f $tempFile

    pbts -o ${targetDir}/${protoVersion}.d.ts ${targetDir}/${protoVersion}.js
}

function pbjs {
    node_modules/.bin/pbjs $@
}

function pbts {
    node_modules/.bin/pbts $@
}

main
