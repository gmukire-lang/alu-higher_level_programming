#!/usr/bin/bash

files=(*.sh)

for file in "${files[@]}"; do
    echo "=============================="
    echo "File: $file"
    echo "Type: Python"
    echo "=============================="
    echo ""

    task_num=$(echo "$file" | grep -oP '^\d+')
    if [ -z "$task_num" ]; then
        task_num="something"
    fi

    chmod +x "$file"
    
    git add "$file"

    git commit -m "completed task #$task_num"

done

echo "All files committed and pushed."
