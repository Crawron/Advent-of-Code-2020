import { getInput } from "../common/helpers.ts"

const passports = getInput(4)
	.trim()
	.replace(/\n(?!\n)/g, "")
	.split("\n")

const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid" /*, "cid"*/]

let validCount = 0
for (const passport of passports) {
	let valid = true

	for (const field of required)
		if (!passport.includes(field)) {
			valid = false
			break
		}

	if (valid) validCount += 1
}

console.log({ validCount })
