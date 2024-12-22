import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-[60px]">
      <div className="md:flex-[376_1_0%] max-md:w-full max-md:h-[412px] relative">
        <div className="w-full md:pb-[123.4%] max-md:h-full relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full md:max-h-[464px] relative">
              <LoadingSkeleton {...{ classes: "!rounded-20" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex-[724_1_0%] max-md:w-full flex flex-col gap-10 md:gap-[60px]">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex flex-col gap-4 sm:gap-6">
            <LoadingSkeleton {...{ width: "40%", height: "32px" }} />

            <LoadingSkeleton {...{ height: "20px", count: 4 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
