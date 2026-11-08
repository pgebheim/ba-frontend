import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSourceService } from "@/services/source";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Keyboard, Mousewheel, Pagination, Scrollbar } from "swiper/modules";
import { SOURCES, SourceItem } from "@/constants/sources";

import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/modules/free-mode.css";
import "../../../node_modules/swiper/modules/pagination.css";

import ButtonStandby from "@/components/Button/ButtonStandby";
import LayoutHeightWrapper from "@/components/Wrapper/LayoutHeightWrapper";
import Page from "@/components/Page";

const Start = () => {
  const navigate = useNavigate();

  const { setSource } = useSourceService();
  const { source } = useSelector((state: any) => state.player);

  const onClickHandler = async (item: SourceItem) => {
    ["spotify", "shairportsync"].includes(item.alias) && (await setSource(item.alias));
    navigate(`/${item.alias}`);
  };

  return (
    <Page
      title="Source"
      rightComponent={
        <div className="flex h-[50px] items-center mr-4">
          <ButtonStandby />
        </div>
      }
    >
      <LayoutHeightWrapper>
        <div className="px-4 flex items-center h-full">
          <div className="w-full">
            <div className="lg:hidden">
              <Swiper
              modules={[FreeMode, Keyboard, Mousewheel, Pagination, Scrollbar]}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              resistance={false}
              touchReleaseOnEdges={true}
              grabCursor={true}
              direction={"horizontal"}
              mousewheel={true}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 6,
                },
                1280: {
                  slidesPerView: 6,
                },
              }}
              keyboard={{
                enabled: true,
              }}
            >
              {SOURCES.map((item) => (
                <SwiperSlide>
                  <button
                    key={item.alias}
                    disabled={item.disabled}
                    onClick={() => onClickHandler(item)}
                    className={`hover:dark:bg-black/40  touch-pan-x rounded-lg flex items-center justify-center aspect-square overflow-hidden w-full transition-all duration-200
                cursor-pointer ${item.disabled ? "opacity-30" : source.uri === item.alias ? "text-primary bg-selected" : ""}`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-2">{item.icon}</div>
                      <div className="flex">{item.name}</div>
                    </div>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

              <div className="custom-pagination flex gap-2 items-center justify-center mt-4"></div>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center h-full gap-2 opacity-60">
              <p className="text-lg font-light">Select a source from the sidebar</p>
            </div>
          </div>
        </div>
      </LayoutHeightWrapper>
    </Page>
  );
};

export default Start;
