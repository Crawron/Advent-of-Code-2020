import { getInput } from "../common/helpers.ts"

const input = getInput(3).trim().replaceAll("\n", "")
const width = 31 // hardcoded ik

function countTrees(slope: number, descent: number) {
	const step = width * descent + slope

	let treeCount = 0
	for (let location = 0; location < input.length; location += step) {
		if (input.charAt(location) === "#") treeCount += 1
		if ((location % width) + slope >= width) location -= width
	}

	return treeCount
}

const slopes: [number, number][] = [
	[1, 1],
	[3, 1],
	[5, 1],
	[7, 1],
	[1, 2],
]

let result = 1
for (const slope of slopes) {
	const count = countTrees(...slope)
	result = count * result
	console.log({ slope, count })
}

console.log({ product: result })
