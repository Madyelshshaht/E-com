import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
const MainLayouts = lazy(() => import("@layouts/MainLayout/MainLayouts"));
const ProfileLayouts = lazy(
    () => import("@layouts/ProfileLayout/ProfileLayout")
);

// Suspence Page
import { SuspensePage } from "@components/feedback";

// Pages
const Home = lazy(() => import("@pages/Home"));
const Categories = lazy(() => import("@pages/Categories"));
const Products = lazy(() => import("@pages/Products"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const ProfileAccount = lazy(() => import("@pages/ProfileAccount"));
const Orders = lazy(() => import("@pages/Orders"));

// not need lazy they must show directly when error do
import Error from "@pages/Error";
import ProtectedRoute from "@components/Auth/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense
                fallback={
                    <div
                        style={{ height: "100vh" }}
                        className="d-flex flex-column align-items-center justify-content-center"
                    >
                        <h4>Loading Please Wait...</h4>
                    </div>
                }
            >
                <MainLayouts />
            </Suspense>
        ),
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: (
                    <SuspensePage>
                        <Home />
                    </SuspensePage>
                ),
            },
            {
                path: "/cart",
                element: (
                    <SuspensePage>
                        <Cart />
                    </SuspensePage>
                ),
            },
            {
                path: "/wishlist",
                element: (
                    <ProtectedRoute>
                        <SuspensePage>
                            <Wishlist />
                        </SuspensePage>
                    </ProtectedRoute>
                ),
            },
            {
                path: "categories",
                element: (
                    <SuspensePage>
                        <Categories />
                    </SuspensePage>
                ),
            },
            {
                path: "categories/products/:prefix",
                element: (
                    <SuspensePage>
                        <Products />
                    </SuspensePage>
                ),
                loader: ({ params }) => {
                    if (
                        // Gurd == protect == Check ... like this
                        typeof params.prefix !== "string" ||
                        !/^[a-z]+$/i.test(params.prefix)
                    ) {
                        throw new Response("Bad Request", {
                            statusText: "Products Category Not Found",
                            status: 400,
                        });
                    }
                    return true; // = return page  || Show Page //
                },
            },
            {
                path: "about-us",
                element: (
                    <SuspensePage>
                        <AboutUs />
                    </SuspensePage>
                ),
            },
            {
                path: "login",
                element: (
                    <SuspensePage>
                        <Login />
                    </SuspensePage>
                ),
            },
            {
                path: "register",
                element: (
                    <SuspensePage>
                        <Register />
                    </SuspensePage>
                ),
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <SuspensePage>
                            <ProfileLayouts />
                        </SuspensePage>
                    </ProtectedRoute>
                ),
                children: [
                    {
                        index: true,
                        element: (
                            // Dont need to Protect because the parent is protected
                            <SuspensePage>
                                <ProfileAccount />
                            </SuspensePage>
                        ),
                    },
                    {
                        path: "orders",
                        element: (
                            <SuspensePage>
                                <Orders />
                            </SuspensePage>
                        ),
                    },
                ],
            },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} basename="/E-com/" />;
};

export default AppRouter;
