const checkDataFromLS = () => {
  const getData = localStorage.getItem("appsList");

  if (getData) {
    const storedAppsData = JSON.parse(getData);
    return storedAppsData;
  } else {
    return [];
  }
};

const getDataFromLS = (ID) => {
  const AppsDataFromLS = checkDataFromLS();

  if (AppsDataFromLS.includes(ID)) {
    alert(`This App Already Installed!`);
  } else {
    AppsDataFromLS.push(ID);
    const convertDataToStringify = JSON.stringify(AppsDataFromLS);
    localStorage.setItem("appsList", convertDataToStringify);
  }
};

export { checkDataFromLS, getDataFromLS };
