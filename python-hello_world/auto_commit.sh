#!/bin/bash

for file in ./*; do
    echo "$file"
    git add "$file"
    git commit "$file completed being worked on"
done

git push

