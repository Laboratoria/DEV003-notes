import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css"
import Image from "next/image";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

export default function Login() {
    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-2">
                <div className="title ">
                    <h1 className=" text-pink-700 text-4xl font-bold py-4">Login</h1>
                    <p>Las notas son divertidas y necesarias</p>
                </div>
                {/* form */}
                <form className="flex flex-col gap-4">
                    <div className={styles.input_group}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={styles.input_text}
                        />
                        
                    </div>
                    <div className={styles.input_group}>
                        <input
                            type="pasword"
                            name="pasword"
                            placeholder="Pasword"
                            className={styles.input_text}
                        />
                        <Image src={'./assets/at.svg'}  width={20} height={20} ></Image>
                    </div>
                    {/* login button */}
                    <div className="input-button ">
                        <button
                            className={styles.button}
                            type="submit">Login</button>

                    </div>
                    <div className="input-button ">
                        <button className={styles.button_custom} type="button">
                            Sign in with Google<Image src={'./assets/google.svg'} width="20" height="20"></Image>
                        </button>
                    </div>
                    <div className="input-button ">
                        <button className={styles.button_custom} type="button">
                            Sign in with Github<Image src={'./assets/github.svg'} width="25" height="25"></Image>
                        </button>
                    </div>


                </form>
                {/* bottom */}
                <p className="text-center text-gray-600">
                    don't have an account yet? <Link legacyBehavior href={'/register'}><a className="text-pink-700">Sign Up</a></Link>
                </p>
            </section>
        </Layout>

    )
}