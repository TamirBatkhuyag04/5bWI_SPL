import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://cumrhwpyucgcbzxllyxw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1bXJod3B5dWNnY2J6eGxseXh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MDI3NDgsImV4cCI6MjA1MzQ3ODc0OH0.GED1qonh-meqlgw-JWAkSgW2_p03p9c8Ekx9CVNiTXo"
);

const HomeworkPage = () => {
    const [homeworks, setHomeworks] = useState<any[]>([]);
    const [newHomework, setNewHomework] = useState({
        subject: "",
        homework: "",
        dueTo: "",
    });

    useEffect(() => {
        getHomeworks();
    }, []);

    async function getHomeworks() {
        let { data: homework, error } = await supabase.from("Homework").select("*");
        setHomeworks(homework ?? []);
        console.log("error: ", error);
        return homeworks;
    }

    async function addHomework() {
        const { } = await supabase.from("Homework").insert([
            {
                subject: newHomework.subject,
                homework: newHomework.homework,
                dueTo: newHomework.dueTo,
            },
        ]);
        setNewHomework({ subject: "", homework: "", dueTo: "" });
        getHomeworks();
    }

    return (
        <div className="bg-black w-full min-h-screen">
            <div className="grid grid-cols-1 m-10">
                <input
                    type="text"
                    placeholder="Subject"
                    value={newHomework.subject}
                    onChange={(event) => setNewHomework({ ...newHomework, subject: event.target.value })}
                    className="p-2 rounded bg-white text-black mb-2 w-full h-11" />
                <input
                    type="text"
                    placeholder="Homework Description"
                    value={newHomework.homework}
                    onChange={(event) => setNewHomework({ ...newHomework, homework: event.target.value })}
                    className="p-2 rounded bg-white text-black mb-2 w-full h-11" />
                <input
                    type="date"
                    placeholder="Due To"
                    value={newHomework.dueTo}
                    onChange={(event) => setNewHomework({ ...newHomework, dueTo: event.target.value })}
                    className="p-2 rounded bg-white text-black mb-2 w-full h-11" />
                <button
                    onClick={addHomework}
                    className="mt-4 h-11 bg-black text-white rounded w-full border-2 border-white hover:text-black hover:bg-white">
                    Add Homework
                </button>
            </div>

            <ul className="w-full p-6 flex flex-wrap justify-center">
                {homeworks.map((homework: any) => (
                    <li
                        className="text-white flex items-center justify-between m-2 p-2 bg-black border-white border-2 rounded w-1/2 hover:bg-gray-800"
                        key={homework.id}>
                        <div>
                            <p className="font-bold">{homework.subject}</p>
                            <p>{homework.homework}</p>
                            <p>Due: {homework.dueTo}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomeworkPage;