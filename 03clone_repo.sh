#!/usr/bin/env bash

IFS="@"

REPO="https://github.com/hbstarjason2021/jd-scripts-docker@https://github.com/KingRan/KR"
REPO_ARR=($REPO)

for repolist  in ${REPO_ARR[@]}
do 
  git clone repo 
done 
