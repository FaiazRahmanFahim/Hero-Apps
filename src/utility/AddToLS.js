import { toast } from "react-toastify";

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
    toast.error(`This App Already Installed!`);
    return false;
  } else {
    AppsDataFromLS.push(ID);
    const convertDataToStringify = JSON.stringify(AppsDataFromLS);
    localStorage.setItem("appsList", convertDataToStringify);
    return true;
  }
};

const removeAppFromLS = (ID) => {
  const AppsDataFromLS = checkDataFromLS();
  const updatedApps = AppsDataFromLS.filter((appId) => appId !== ID);
  const convertDataToStringify = JSON.stringify(updatedApps);
  localStorage.setItem("appsList", convertDataToStringify);
};

export { checkDataFromLS, getDataFromLS, removeAppFromLS };
