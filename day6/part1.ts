import { getInput } from "../common/helpers.ts"

const groups = getInput(6)
	.trim()
	.split("\n\n")
	.map((a) => a.split("\n"))

let answerCount = 0
for (const group of groups) {
	const answerSet = new Set<string>()

	for (const answers of group)
		for (const answer of answers) answerSet.add(answer)

	answerCount += answerSet.size
}

console.log({ answerCount })
