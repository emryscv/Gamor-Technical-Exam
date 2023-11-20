import Nav from  "./nav.tsx";
import MainBoradSection from "./main-board-section.tsx";
import CategoriesSection from "./categories-section.tsx";
import ChangeThemeButton from "../../components/change-theme-button.tsx";

function Home(){
    return (
        <div className="m-0 font-sans">
            <Nav></Nav>
            <MainBoradSection></MainBoradSection>
            <CategoriesSection></CategoriesSection>
            <ChangeThemeButton></ChangeThemeButton>
        </div>
    )
}

export default Home;