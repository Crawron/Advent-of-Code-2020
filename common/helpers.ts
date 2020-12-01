export function getInput(day: number) {
	return Deno.readTextFileSync(`./day${day}/input`)
}
