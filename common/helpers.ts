export function getInput(day: number) {
	return Deno.readTextFileSync(`./day${day}/input`)
}

export async function fetchInput(day: number) {
	const url = `https://adventofcode.com/2020/day/${day}/input`

	const response = await fetch(url)
}
