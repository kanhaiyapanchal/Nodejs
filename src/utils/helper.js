import fs from "fs/promises";

// copy file
export const copyFile = async (src, dest) => {
  await fs.copyFile(src, dest);
};

// delete file
export const deleteFile = async (filePath) => {
  await fs.unlink(filePath);
};
