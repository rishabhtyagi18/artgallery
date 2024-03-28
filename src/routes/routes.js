import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import("../components/home/Home"));
const Artists = lazy(() => import("../components/artists/Artists"));
const ArtistsDetail = lazy(() => import("../components/artists/ArtistsDetail"));
const Gallery = lazy(() => import("../components/gallery/Gallery"));
const About = lazy(() => import("../components/about/About"));
const Privacy = lazy(() => import("../components/privacy/Privacy"));
const Terms = lazy(() => import("../components/terms/Terms"));
const ShippingReturns = lazy(() => import("../components/shipping/ShippingReturns"));
const Faq = lazy(() => import("../components/faq/Faq"));
const Store = lazy(() => import("../components/store/Store"));
const StoreView = lazy(() => import("../components/store/StoreView"));
const StoreDetail = lazy(() => import("../components/store/StoreDetail"));
const Cart = lazy(() => import("../components/cart/Cart"));
const NotFound = lazy(() => import("../components/notFound/NotFound"));
const ArtAdvisory = lazy(() => import("../components/artAdvisory/ArtAdvisory"));

// const storeName = ["Abstract", "All", "Figurative", "Landscape", "Seascape", "Semi Abstract", "Shahshikant Dhotre"];

const RoutingComponent = (props) => {

    return(
        <Suspense fallback={<div>Loading... </div>}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/artists" element={ <Artists /> } />
                <Route path={`/artists/:artistName`} element={ <ArtistsDetail /> } />
                <Route path="/gallery" element={ <Gallery /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/privacy-policy" element={ <Privacy /> } />
                <Route path="/terms-of-use" element={ <Terms /> } />
                <Route path="/shipping-returns" element={ <ShippingReturns /> } />
                <Route path="/faq" element={ <Faq /> } />
                <Route path="/store" element={ <Store /> } />
                <Route path={`/store/:subStoreName`} element={ <StoreView /> } />
                <Route path={`/stores/:skuCode`} element={ <StoreDetail/> } />
                <Route path="/art-advisory" element={<ArtAdvisory /> } />
                {/* <Route path="cart" element={ <Cart /> } /> */}
                <Route path="/error-page" element={ <NotFound /> } />
                <Route
                    path="*"
                    element={ <Navigate to="/error-page" /> }
                />
            </Routes>
        </BrowserRouter>
        </Suspense>
    );
};

export default RoutingComponent;