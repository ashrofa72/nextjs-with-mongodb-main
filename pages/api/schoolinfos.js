import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("test");

        const schoolinfos = await db
            .collection("schoolinfos")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();

        res.json(schoolinfos);
    } catch (e) {
        console.error(e);
    }
}