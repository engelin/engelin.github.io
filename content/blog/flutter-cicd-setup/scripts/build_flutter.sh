#!/bin/sh

START_COLORING="\033["
STOP_COLORING="\033[0m"

ANSI_RED="0;31m"
ANSI_GREEN="0;32m"
ANSI_BLUE="0;34m"

############ LOG START ############
function INFO {
    local msg;
    msg=$1

    echo "${START_COLORING}${ANSI_BLUE}[INFO]${STOP_COLORING} $msg"
}

function ERROR {
    local msg;
    msg=$1

    echo "${START_COLORING}${ANSI_RED}[ERROR]${STOP_COLORING} $msg\t[line:`caller 0 | awk '{print$1}'`]"
}
############ LOG END ############

function printUsage {
    ERROR "Please check the below usage"
    echo "\nUsage: $0 -t { dev|test|prod } -p { android|ios }"
    echo "\t-t Types for building flutter mobile application"
    echo "\t-p Platforms; supported only Android and iOS"
    echo "\n e.g.) $0 -t dev -p android"

    exit 1
}

############ BUILD START ############
# [Android]
#  flutter build apk --debug -t lib/main_dev.dart
#  flutter build apk --release -t lib/main_prod.dart
#  flutter build appbundle --release -t lib/main_prod.dart
# [iOS]
#  flutter build ios --debug -t lib/main_dev.dart --no-codesign
#  flutter build ios --release -t lib/main_prod.dart
#  flutter build ipa --release -t lib/main_prod.dart

function buildAPP {
    INFO "flutter build $1 $2 -t $3 $4 $5 $6"
}

function buildDebug {
    local plat; plat=$1
    
    if [ "ios" == $plat ] ; then
        ext="ios"
        signingOpt="--no-codesign"
    elif [ "android" == $plat ] ; then
        ext="apk"
    else
        ERROR "Unknown platform"
        printUsage
    fi

    buildAPP $ext --debug lib/main_dev.dart $signingOpt
}

function buildTest {
    local plat; plat=$1
    
    if [ "ios" == $plat ] ; then
        ext="ios"
    elif [ "android" == $plat ] ; then
        ext="apk"
    else
        ERROR "Unknown platform"
        printUsage
    fi

    buildAPP $ext --release lib/main_prod.dart
}

function buildRelease {
    local plat; plat=$1
    
    if [ "ios" == $plat ] ; then
        ext="ipa"
    elif [ "android" == $plat ] ; then
        ext="appbundle"
    else
        ERROR "Unknown platform"
        printUsage
    fi

    buildAPP $ext --release lib/main_prod.dart --obfuscate --split-debug-info=/pyon/mappings/
}
############ BUILD END ############


while getopts "t:p:" opt
do
    case "$opt" in
        t ) paramType="$OPTARG" ;;
        p ) paramPlatform="$OPTARG" ;;
        ? ) printUsage ;;
    esac
done

if [ -z "$paramType" ] || [ -z "$paramPlatform" ]
then
    printUsage
fi

INFO "BUILD_TYPE = $paramType, BUILD_PLATFORM = $paramPlatform"

case "$paramType" in
    dev ) buildDebug $paramPlatform ;;
    test ) buildTest $paramPlatform ;;
    prod ) buildRelease $paramPlatform ;;
    ? ) ERROR "Unknown options"; printUsage ;;
esac
