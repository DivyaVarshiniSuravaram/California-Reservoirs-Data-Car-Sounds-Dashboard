import axios from "axios";

export const uploadAudio = async (file) => {
  const form = new FormData();
  form.append("file", file);
  const res = await axios.post("http://localhost:8000/api/predict", form);
  return res.data.result;
};

export const fetchReservoirs = async () => {
  const res = await axios.get("http://localhost:8000/api/reservoirs");
  return res.data;
};
