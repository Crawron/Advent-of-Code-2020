import { getInput } from "../common/helpers.ts"

const passports = getInput(4)
	.trim()
	.replace(/\n(?!\n)/g, " ")
	.split("\n")
	.map((s) => s.trim())

const getYear = (s: string) => {
	const [, match] = /:(\d+)$/.exec(s) ?? []
	return parseInt(match ?? "NaN")
}
const isBetween = (n: number, min: number, max: number) => min <= n && n <= max
const getHeight = (s: string): { unit: "cm" | "in"; height: number } => {
	const [, height, unit] = /:(\d+)(cm|in)$/.exec(s) ?? []
	return { height: parseInt(height), unit: unit as "cm" | "in" }
}

const required: { [_: string]: (s: string) => boolean } = {
	byr: (s) => isBetween(getYear(s), 1920, 2002),
	iyr: (s) => isBetween(getYear(s), 2010, 2020),
	eyr: (s) => isBetween(getYear(s), 2020, 2030),
	hgt: (s) => {
		const { unit, height } = getHeight(s)
		return unit === "cm"
			? isBetween(height, 150, 193)
			: isBetween(height, 59, 76)
	},
	hcl: (s) => /:#[0-9a-f]{6}$/.test(s),
	ecl: (s) => /:(amb|blu|brn|gry|grn|hzl|oth)$/.test(s),
	pid: (s) => /:[0-9]{9}$/.test(s),
}

let validCount = 0
for (const passport of passports) {
	let valid = true

	for (const [label, verify] of Object.entries(required)) {
		const field = new RegExp(`${label}(:\\S+)`).exec(passport)

		if (!field) {
			valid = false
			//console.log({ passport, missing: label })
			break
		}

		const [, value] = field
		valid = verify(value)

		if (!valid) {
			// console.log({ passport, withInvalid: label })
			break
		}
	}

	if (valid) validCount += 1
}

console.log({ validCount })
