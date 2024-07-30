import { xRay } from "../../../models/xRay";

const postXRay = async (data: xRay) => {
  try {
    const response = await axios.post(
      `${process.env.FEEGOW_BASE_API_URL}/your-endpoint`,
      data,
      {
        headers: { Authorization: process.env.FEEGOW_TOKEN },
      }
    );
  } catch (error) {
    console.error(error);
  }
};
