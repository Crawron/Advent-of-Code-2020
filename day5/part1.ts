import { getInput } from "../common/helpers.ts"
import { Range } from "./Range.ts"

const input = getInput(5).trim().split("\n")
let highestId = -1

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

	const seatId = row.min * 8 + column.min
	if (highestId < seatId) highestId = seatId

	// console.log({ row: row.min, column: column.min, seatId })
}

console.log({ highestId })
