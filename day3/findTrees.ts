import { getInput } from "../common/helpers.ts"

const input = getInput(3).trim().replaceAll("\n", "")
// console.log(input)

const width = 31 // hardcoded ik
const slope = 3

let treeCount = 0
for (let location = 0; location < input.length; location += width + slope) {
	if (input.charAt(location) === "#") treeCount += 1
	if ((location % width) + slope >= width) location -= width
}

console.log({ treeCount })
