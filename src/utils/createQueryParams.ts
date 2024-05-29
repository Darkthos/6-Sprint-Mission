const createQueryParams = (params: Record<string, string[]>): string => {
  const searchParams = new URLSearchParams();
  const entParams = Object.entries(params);

  entParams.forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => searchParams.append(key, item));
    } else if (value) {
      searchParams.append(key, value);
    }
  });

  return searchParams.toString();
};

export default createQueryParams;
