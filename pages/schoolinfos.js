import clientPromise from "../lib/mongodb";
import styles from '../styles/top.module.css'

export default function schoolinfos({ schoolinfos }) {
    return (
        <div className={styles.schoollist}>
            <h1>Top 20 schoolinfos of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>
            <ul>
                {schoolinfos.map((schoolinfo) => (
                    <li>
                        <h2>{schoolinfo.title}</h2>
                        <h3>{schoolinfo.teachername}</h3>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps(context) {
    try {
        const client = await clientPromise;

        const db = client.db("test");

        const schoolinfos = await db
            .collection("schoolinfos")
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();

        return {
            props: { schoolinfos: JSON.parse(JSON.stringify(schoolinfos)) },
        };
    } catch (e) {
        console.error(e);
    }
}
