import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from "react-helmet-async";

const ViewDetails = () => {
  const { id } = useParams();
  const viewDetails = useLoaderData();

  console.log();
  const viewDetail = viewDetails.find((viewDetail) => viewDetail._id == id);
  const {
    averageCost,
    countryName,
    imageUrl,
    location,
    spotName,
    seasonality,
    shortDescription,
    totalVisitorsPerYear,
    travelTime,
    userEmail,
    userName,
  } = viewDetail;

  return (
    <div className="container mx-auto mt-12 flex-col gap-10 rounded-3xl border-2 border-black p-10 lg:flex lg:flex-row ">
      <Helmet>
        <title>
          {spotName}, {countryName}
        </title>
      </Helmet>
      <div className="rounded-2xl ">
        <img className="rounded-2xl   lg:w-[650px] " src={imageUrl} alt="" />
      </div>
      <div className="flex-grow">
        <div className="gap-5 md:flex">
          <p className="flex items-center py-2 text-3xl font-semibold md:text-4xl md:font-bold ">
            {spotName}
          </p>
          <span className="m-2 flex items-center rounded-full border border-black px-4 py-3  text-3xl font-semibold md:text-4xl md:font-bold ">
            <CiLocationOn /> {countryName}
          </span>
        </div>

        <p className="my-1 text-xl font-bold ">
          Seasonality : <span className="font-medium ">{seasonality}</span>
        </p>

        <h3 className="text-xl font-bold ">
          Total Visitors Per Year :
          <span className="pl-1 text-xl font-medium ">
            {totalVisitorsPerYear}
          </span>
        </h3>
        <h2 className="text-xl font-bold ">
          Travel Time :
          <span className="pl-1  text-xl font-medium ">{travelTime}</span>
        </h2>
        <h2 className="text-xl font-bold ">
          location :
          <span className="pl-1  text-xl font-medium ">{location}</span>
        </h2>
        <div>
          <h2 className="flex text-xl font-bold ">
            Added By :
            <span className="pl-1  text-xl font-medium   md:flex ">
              {userName}
              <div className="pl-2 md:pl-0">({userEmail})</div>
            </span>
          </h2>
        </div>
        <h2 className="text-xl font-bold">Price: {averageCost} $</h2>
        <div className="gap-5   md:my-4 md:flex">
          <h2 className="text-xl font-bold ">
            Short Description :{" "}
            <span className="text-xl font-medium ">{shortDescription}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
