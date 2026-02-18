import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import App from "./App";




const router = createBrowserRouter(


    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <LandingPage />
                }
            ]
        
        },







    ]
)


export default router;