#!/bin/bash

dayNum="12"
dir="day-${dayNum}"
file1="${dir}/${dir}-1.js"
file2="${dir}/${dir}-2.js"
file3="${dir}/${dir}-input.txt"
testFile1="test/test-${dir}-1.js"
testFile2="test/test-${dir}-2.js"

mkdir $dir

touch $file1
touch $file2
touch $file3

mv test/*.js test/old-tests/

touch $testFile1
touch $testFile2
