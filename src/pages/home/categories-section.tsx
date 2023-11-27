import CatergoryCard from "./category-card";

function CategoriesSection() {
  return (
    <section>
      <h2 className="font-bold text-[4.77vw] my-[3.18vw] sm:text-[1.5vw] sm:my-[1vw]">Trending Categories</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[3.18vw] sm:gap-[1vw] mb-[6.8%]">
        <CatergoryCard
          data={{ index: "01", color: "#5f2812", title: "Action Games" }}
        ></CatergoryCard>
        <CatergoryCard
          data={{ index: "02", color: "#3b5391", title: "Sports Games" }}
        ></CatergoryCard>
        <CatergoryCard
          data={{ index: "03", color: "#5b0f2d", title: "Adventures Games" }}
        ></CatergoryCard>
        <CatergoryCard
          data={{ index: "04", color: "#625a1b", title: "Arcade Games" }}
        ></CatergoryCard>
        <CatergoryCard
          data={{ index: "05", color: "#430c9b", title: "Fantasy Games" }}
        ></CatergoryCard>
        <CatergoryCard
          data={{ index: "06", color: "#1b492e", title: "Strategy Games" }}
        ></CatergoryCard>
        <CatergoryCard
          data={{ index: "07", color: "#fff0", title: "Shooter Games" , background: true}}
        ></CatergoryCard>
        <CatergoryCard
          data={{ index: "VIEW ALL", color: "#fff0", title: "All Categories" }}
        ></CatergoryCard>
      </div>
    </section>
  );
}
export default CategoriesSection;
