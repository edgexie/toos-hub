export const digestAlgorithms = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"] as const;

export const bytesToHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
