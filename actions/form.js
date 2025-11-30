"use server";
import fs from "fs/promises";

export const submitAction = async (e) => {
  console.log(e.get("name"), e.get("address"));
  let a = await fs.writeFile("data.txt", "Hey I am good");
  console.log(a);
};
