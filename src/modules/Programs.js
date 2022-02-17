import { api } from "./network";

const Programs = {
  async index() {
    const { data } = await api.get(
      "https://content.viaplay.se/pc-se/serier/samtliga"
    );
    return data.programs;
  }
};

export default Programs;
