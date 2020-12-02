import { getInput } from "../common/helpers.ts"

const input = getInput(2).trim().split("\n")
const regex = /(\d+)-(\d+) ([a-z]): ([a-z]+)/

let validCount = 0
for (const line of input) {
	const [, minS, maxS, letter, pass] = regex.exec(line) ?? []
	const min = parseInt(minS)
	const max = parseInt(maxS)

	const count = [...pass].filter((p) => p === letter)?.length
	const valid = count <= max && count >= min

	//console.log({ min, max, letter, count, valid, pass })

	if (valid) validCount += 1
}

console.log({ valid: validCount })
