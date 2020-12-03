export function getInput(day: number, filename = "input") {
	return Deno.readTextFileSync(`./day${day}/${filename}`)
}

export async function fetchInput(day: number) {
	const url = `https://adventofcode.com/2020/day/${day}/input`

	const response = await fetch(url)
}
