import { getInput } from "../common/helpers.ts"
import { Range } from "./Range.ts"

const input = getInput(5).trim().split("\n")

const seatList = new Map<number, [row: number, column: number]>()

for (const pass of input) {
	const row = new Range(0, 127)
	const column = new Range(0, 7)

	for (const char of pass) {
		switch (char) {
			case "F":
				row.splitSide("low")
				break
			case "B":
				row.splitSide("high")
				break
			case "L":
				column.splitSide("low")
				break
			case "R":
				column.splitSide("high")
				break
		}
	}

	if (row.size !== 1 || column.size !== 1) {
		throw { row, column }
	} // just in case, lol

	const id = row.min * 8 + column.min
	seatList.set(id, [row.min, column.min])
}

const sortedIds = [...seatList]
	.filter(([, [row]]) => row > 0 && row < 127)
	.sort(([idA], [idB]) => idA - idB)
	.map(([id]) => id)

// console.log(sortedIds.join(" "))
let prevId = sortedIds[0]
for (const id of sortedIds) {
	if (id - prevId > 1) {
		console.log({ prevId, nextId: id, yourIdMaybe: id - 1 })
		break
	}
	prevId = id
}
