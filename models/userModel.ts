import mongoose from "mongoose";
import userSchema from "@/schemas/user";
import { encrypt } from "@/utils/crypto";

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await encrypt(this.password);
});

export default mongoose.models.User || mongoose.model("User", userSchema);
