import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import { Suspense } from 'react';


export const Navigation = () => {
    return (
        <Suspense fallback={<span>loading</span>}>

            <BrowserRouter>
                <Routes>
                    {
                        routes.map(({ path, Component }) => (
                            <Route
                                key={path}
                                path={path}
                                element={<Component />}
                            />
                        ))
                    }
                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />

                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}