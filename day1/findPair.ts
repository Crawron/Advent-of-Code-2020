import { getInput } from "../common/helpers.ts"

const nums = getInput(1)
	.trim()
	.split("\n")
	.map((a) => parseInt(a))

let result: number | undefined = undefined
for (let i = 0; i < nums.length && !result; i++) {
	for (let j = i + 1; j < nums.length && !result; j++) {
		const a = nums[i]
		const b = nums[j]

		const match = a + b === 2020
		if (match) {
			result = a * b
			console.log({ result, a, b })
		}
	}
}
