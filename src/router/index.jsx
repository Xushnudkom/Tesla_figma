import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom"
import App from "../App"
import { ModelS, Model3, ModelX, ModelY, SolarPanels, SolarRoof } from "@pages";
const Index = ()=>{
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<ModelS />} />
                <Route path="model3" element={<Model3 />} />
                <Route path="modelx" element={<ModelX />}/>
                <Route path="modely" element={<ModelY />}/>
                <Route path="solarPanels" element={<SolarPanels />}/>
                <Route path="solarRoof" element={<SolarRoof />}/>
            </Route>
        )
    );
    return <RouterProvider router={router} />
}
export default Index
