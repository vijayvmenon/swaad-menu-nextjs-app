import mongoose, { Schema } from "mongoose";

const menuSchema = new Schema(
  {
    _id: {
      // $oid: {
      type: Schema.ObjectId,
      auto: true,
      // },
    },
    malayalam_text: {
      type: "String",
    },
    english_text: {
      type: "String",
    },
    price_array: {
      type: ["Mixed"],
    },
    additional_notes: {
      type: "String",
    },
    category: {
      type: ["String"],
    },
    image_url: {
      type: "String",
    },
  },
  { collection: "menu" }
);

const Menu =
  mongoose.models.SwaadMenu || mongoose.model("SwaadMenu", menuSchema);
export default Menu;
