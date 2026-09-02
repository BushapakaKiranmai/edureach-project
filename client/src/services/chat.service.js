import { api } from "./api.js";

export const sendMessage = async (message) => {
  const res = await api.post("/chat/message", { message });
  return {
    message: res.message ?? res.data?.message,
  };
};
