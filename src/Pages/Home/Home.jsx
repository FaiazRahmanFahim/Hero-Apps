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
      <Suspense
        fallback={
          <div className="text-center">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        }
      >
        <HomeApps homeData={homeData}></HomeApps>
      </Suspense>
    </>
  );
};

export default Home;
