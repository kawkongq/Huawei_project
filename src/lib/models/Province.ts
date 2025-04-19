// lib/models/province.ts
import mongoose, { Schema, model, models } from 'mongoose';


interface Spot {
  name: string;
  address: string;
  tel: string;
  imgUrl: string;
}

interface ProvinceDoc extends mongoose.Document {
  name: string;
  spots: Spot[];
}

const SpotSchema = new Schema<Spot>({
  name:    { type: String, required: true },
  address: { type: String, required: true },
  tel:     { type: String, required: true },
  imgUrl:  { type: String, required: true },
});

const ProvinceSchema = new Schema<ProvinceDoc>({
  name:  { type: String, required: true },
  spots: { type: [SpotSchema], default: [] },
});

const Province = models.Province || model<ProvinceDoc>('Province', ProvinceSchema);
export default Province;
