#!/bin/sh

TARGET_VERSION=$1 # patch or build

dart pub global activate cider
~/.pub-cache/bin/cider version

if [ "patch" == $TARGET_VERSION ] ; then
    ~/.pub-cache/bin/cider bump patch --keep-build
elif [ "build" == $TARGET_VERSION ] ; then
    ~/.pub-cache/bin/cider bump build
fi


"""
Or just script....

# Build
perl -i -pe 's/^(version:\s+\d+\.\d+\.\d+\+)(\d+)$/$1.($2+1)/e' pubspec.yaml

# Patch
perl -i -pe 's/^(version:\s+\d+\.\d+\.)(\d+)(\+\d+)$/$1.($2+1).$3/e' pubspec.yaml

# Minor
perl -i -pe 's/^(version:\s+\d+\.)(\d+)(\.\d+\+\d+)$/$1.($2+1).$3/e' pubspec.yaml

# Major
perl -i -pe 's/^(version:\s+)(\d+)(\.\d+\.\d+\+\d+)$/$1.($2+1).$3/e' pubspec.yaml
"""
