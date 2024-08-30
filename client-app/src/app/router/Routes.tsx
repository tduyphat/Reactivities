import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../featutres/home/home";
import ActivityDashboard from "../../featutres/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../featutres/activities/form/ActivityForm";
import ActivityDetails from "../../featutres/activities/details/ActivityDetails";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard/>},
            {path: 'activities/:id', element: <ActivityDetails/>},
            {path: 'createActivity', element: <ActivityForm key='create'/>},
            {path: 'manage/:id', element: <ActivityForm key='manage'/>}
        ]
    }
]

export const router = createBrowserRouter(routes)