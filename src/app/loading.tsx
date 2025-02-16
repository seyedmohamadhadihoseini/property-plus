"use client"
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};
export default function LoadingPage() {

    return <div>
        <ClipLoader
            color='#3b72f6'
            loading={true}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
        />
    </div>
}