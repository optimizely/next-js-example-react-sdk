let datafile;

const SDK_KEY = process.env.NEXT_PUBLIC_SDK_KEY;

const fetchDatafile = async () => {
  const res = await fetch(
    `https://cdn.optimizely.com/datafiles/${SDK_KEY}.json`,
    { method: "get" }
  );

  if (res.ok) {
    datafile = await res.json();

    console.log("Downloaded datafile", datafile.revision);
  }

  if (!datafile) {
    return {};
  }

  return datafile;
};

export const getDatafile = async () => {
  if (datafile) {
    return datafile;
  }

  return fetchDatafile();
};
