export const COLORS = [
  "black", "brown", "red", "orange",
  "yellow", "green", "blue", "violet",
  "grey", "white"
];

const colorCode = (color: string) =>
  COLORS.indexOf(color.toLowerCase());

export function decodedResistorValue(colors: string[]) {
  const value = (colorCode(colors[0]) * 10 + colorCode(colors[1])) *
                10 ** colorCode(colors[2]);

  return `${scaled(value)} ${unit(value)}`;
}

const scaled = (v: number) => {
  if (v < 1e3) return v;
  if (v < 1e6) return v / 1e3;
  if (v < 1e9) return v / 1e6;
  if (v < 1e12) return v / 1e9;
  return v;
};

const unit = (v: number) => {
  if (v < 1e3) return "ohms";
  if (v < 1e6) return "kiloohms";
  if (v < 1e9) return "megaohms";
  if (v < 1e12) return "gigaohms";
  return "ohms";
};

