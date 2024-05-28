import createQueryParams from "@/utils/createQueryParams";
import axiosInstance from "../axiosInstance";

const getCharts = async (option = {}) => {
  const defaultOption: Record<string, string | number> = {
    gender: "female",
    cursor: "",
    pageSize: 10,
  };
  const chartOption = { ...defaultOption, ...option };
  const chartsParams = createQueryParams(chartOption);

  try {
    const response = await axiosInstance.get(
      `/charts/{gender}?${chartsParams}`
    );
    return response.data;
  } catch (error) {
    throw new Error("response failed");
  }
};

export default getCharts;
