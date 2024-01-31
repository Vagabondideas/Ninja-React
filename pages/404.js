import { useEffect } from "react";
import { router, useRouter } from "next/router";

const NotFoud = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <div>
            <h1>Ouuupppss....</h1>
            <p>This Page is not accessible</p>
        </div>
    );
};

export default NotFoud;
