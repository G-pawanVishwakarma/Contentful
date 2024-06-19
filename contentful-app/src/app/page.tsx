import React from "react";

const url = `${process.env.BASE_URL}/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&&`;

// console.log(url);

const page = async () => {
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-screen undefined relative min-w-0 flex-grow px-4 md:px-[40px] lg:mx-10 lg:max-w-[1100px] lg:px-0">
          <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2 lg:grid-cols-3">
            {data.items.map((item: any, index: any) => {
              const image = data.includes.Asset.find(
                (asset: any) => asset.sys.id === item.fields.headerImage.sys.id
              );
              // console.log(item.fields.price);
              return (
                <div
                  className="relative flex min-h-[386px] items-end rounded-md bg-cover bg-center bg-no-repeat p-4 shadow-lg md:min-h-[500px]"
                  style={{ backgroundImage: `url(${image.fields.file.url})` }}
                  key={index}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full rounded-md"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
                      opacity: 1,
                    }}
                  ></div>

                  <div className="relative z-10 w-full">
                    <div className="mb-2">
                      <a href="#">
                        <h2 className="mb-2 text-2xl font-medium text-white">
                          {item.fields.giftType}
                        </h2>
                      </a>
                    </div>
                    <div className="flex items-center justify-between gap-2 border-t-2 border-[yellow] pt-3">
                      <p className="text-base font-normal text-white">
                        From
                        <span className="text-xl font-medium md:text-2xl">
                          £{item.fields.suggestedGiftAmount1}
                        </span>
                        /PM
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <a className="text-sm font-medium text-white" href="">
                          Learn more
                        </a>
                        <button className="rounded-md bg-[yellow] px-6 py-3 text-sm font-medium text-white">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
