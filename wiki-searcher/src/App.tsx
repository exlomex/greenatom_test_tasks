import { Header } from "./components/Header";
import {MainLayout} from "@/components/MainLayout";
import {ImgContainer} from "@/components/ImgContainer";
import {SearchContainer} from "@/components/SearchContainer";

export const App = () => {
    return (
        <div className={'wrapper'}>
          <Header/>
            <MainLayout rightSideProp={<ImgContainer/>} leftSideProp={<SearchContainer/>}/>
        </div>
    )
};
