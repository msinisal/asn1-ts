import { BERElement } from "../../ber";

export default
function decodeSequence (value: Uint8Array): BERElement[] {
    if (value.length === 0) {
        return [];
    }
    const encodedElements: BERElement[] = [];
    let i: number = 0;
    while (i < value.length) {
        const next: BERElement = new BERElement();
        i += next.fromBytes(value.slice(i));
        encodedElements.push(next);
    }
    return encodedElements;
}
