"use client";
import { ThreeCircles } from "react-loader-spinner";

const LoadingIndicator = () => {
    return (
        <div className="loading-indicator">
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                innerCircleColor="#00B4FF"
                outerCircleColor="#28272C"
                middleCircleColor="#00B4FF"
            />
        </div>
    );
};


export default LoadingIndicator;