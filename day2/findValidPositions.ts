import { getInput } from "../common/helpers.ts"

const input = getInput(2).trim().split("\n")
const regex = /(\d+)-(\d+) ([a-z]): ([a-z]+)/

let validCount = 0
for (const line of input) {
	const [, pos1S, pos2S, letter, pass] = regex.exec(line) ?? []
	const pos1 = parseInt(pos1S)
	const pos2 = parseInt(pos2S)

	const pos1valid = pass.charAt(pos1 - 1) === letter
	const pos2valid = pass.charAt(pos2 - 1) === letter

	const valid = pos1valid !== pos2valid

	// console.log({ pos1valid, pos2valid, valid })

	if (valid) validCount += 1
}

console.log({ valid: validCount })
