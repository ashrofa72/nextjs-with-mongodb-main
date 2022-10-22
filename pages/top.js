import clientPromise from "../lib/mongodb";
import styles from '../styles/top.module.css'

export default function Top({ schoolinfos }) {
  return (
    <div className={styles.schoollist}>
      <h1>Top 1000 schoolinfos of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {schoolinfos.map((schoolinfo) => (
          <li>
            <h2>Title: {schoolinfo.title}</h2>
            <h3>TeacherName: {schoolinfo.teachername}</h3>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;

    const db = client.db("test");

    const schoolinfos = await db
      .collection("schoolinfos")
      .find({})
      .sort({ metacritic: -1 })
      .limit(1000)
      .toArray();

    return {
      props: { schoolinfos: JSON.parse(JSON.stringify(schoolinfos)) },
    };
  } catch (e) {
    console.error(e);
  }
}
