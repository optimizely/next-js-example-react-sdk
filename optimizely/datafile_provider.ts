let datafile: object;

const SDK_KEY = process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY;

const fetchDatafile = async () => {
  return await fetch(`https://cdn.optimizely.com/datafiles/${SDK_KEY}.json`, {
    method: "get",
  });
};

export const getDatafile = async () => {
  if (datafile) {
    return datafile;
  }

  const resp = await fetchDatafile();
  if (resp.ok) {
    datafile = await resp.json();
  }

  if (!datafile) {
    return {};
  }
  return datafile;
};
