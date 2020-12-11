import { getInput } from "../common/helpers.ts"

const groups = getInput(6)
	.trim()
	.split("\n\n")
	.map((a) => a.split("\n"))

let answerCount = 0
for (const group of groups) {
	const answerSet = new Map<string, number>()
	for (const answers of group) {
		for (const answer of answers)
			answerSet.set(answer, (answerSet.get(answer) ?? 0) + 1)

		for (const [answer, count] of answerSet.entries()) {
			if (count === group.length) answerCount += 1
		}
	}
	// console.log({ answerSet, length: group.length })
}
console.log({ answerCount })
