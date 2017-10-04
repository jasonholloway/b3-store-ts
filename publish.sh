#!/bin/bash

function main {
    clean
    build    
    bumpVersion
    echo New version: $newVersion
}

function clean {
    rm -rf ./dist
}

function build {
    tsc -p ./ --outDir dist/
    cp -R ./src/protocol ./dist/src/protocol
}

function bumpVersion {   
    oldVersion=`cat package.json | grep -oP '(?<="version": ")(.*)(?=")'`
    newVersion=`semver bump patch $oldVersion`
    sed -i -e "s/\"version\": \".*\"/\"version\": \"$newVersion\"/" package.json
}

main
