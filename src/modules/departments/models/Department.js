
import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema(
  {
    module: {
      type: String,
      required: true,
    },

    actions: {
      type: [String],
      default: [],
    },
  },
  { _id: false }
);

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      enum: ["Admin", "Manager", "Supervisor", "Employee"],
    },

    description: {
      type: String,
      trim: true,
    },

    permissions: {
      type: [permissionSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Role =
  mongoose.models.Role ||
  mongoose.model("Role", roleSchema);

export default Role;
