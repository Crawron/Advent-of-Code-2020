export class Range {
	constructor(public min = 0, public max = 1) {}

	get size() {
		return Math.abs(this.max + 1 - this.min)
	}

	/** Mutates! */
	splitSide(side: "high" | "low") {
		const { size } = this

		if (side === "high") this.min += size / 2
		else this.max -= size / 2
	}
}
