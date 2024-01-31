import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Triplength | Home</title>
                <meta name="keywords" content="travel planning"></meta>
            </Head>
            <div className="">
                <h1>Home Page</h1>
                <br></br>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Qui voluptatum magni nostrum placeat recusandae totam beatae
                    in dolore, quibusdam harum praesentium fuga veritatis ipsam
                    pariatur? Pariatur quia incidunt ducimus maiores. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Delectus
                    rerum sequi ea odio dolorum nulla, blanditiis, corrupti
                    molestias totam pariatur deleniti possimus perspiciatis,
                    facere a facilis voluptatem quia cum adipisci?
                </p>
                <br></br>
                <Link href="ninjas" className="">
                    See Trip Length and Framework
                </Link>
            </div>
        </>
    );
}
