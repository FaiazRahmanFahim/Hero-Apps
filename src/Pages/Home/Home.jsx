import React, { Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import HomeApps from "../../components/HomeApps/HomeApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const homeData = useLoaderData();
  //console.log(homeData);
  return (
    <>
      <Banner></Banner>
      <HomeApps homeData={homeData}></HomeApps>
    </>
  );
};

export default Home;
