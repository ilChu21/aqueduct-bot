export const numFor: Intl.NumberFormat = Intl.NumberFormat('en-US');

export function abbreviateAddress(address: string) {
  const prefixLength: number = 5;
  const suffixLength: number = 4;
  const abbreviation: string = `${address.slice(
    0,
    prefixLength
  )}...${address.slice(-suffixLength)}`;
  return abbreviation;
}
