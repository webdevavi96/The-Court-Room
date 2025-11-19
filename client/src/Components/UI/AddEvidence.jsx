import React from "react";
import Card from "./Card";
import Button from "./Button";

function AddEvidence() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        const payload = {
            title: data.get("title"),
            category: data.get("category"),
            description: data.get("description"),
        };

        console.log("Evidence Submitted:", payload);
        alert("Evidence saved!");
    };

    return (
        <div className="w-full text-white">

            {/* HEADER */}
            <h1 className="text-3xl text-amber-400 font-bold tracking-widest mt-4">
                ADD EVIDENCE
            </h1>
            <p className="text-neutral-400 text-sm mt-1">
                Add textual evidence or notes related to the case.
            </p>

            <div className="mt-8">
                <Card title="Evidence Details">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* TITLE */}
                        <div>
                            <label className="text-sm text-neutral-300">Evidence Title</label>
                            <input
                                name="title"
                                required
                                type="text"
                                placeholder="e.g. Suspicious activity report"
                                className="mt-2 w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 
                text-white focus:ring-2 focus:ring-amber-400 outline-none"
                            />
                        </div>

                        {/* CATEGORY */}
                        <div>
                            <label className="text-sm text-neutral-300">Category</label>
                            <select
                                name="category"
                                required
                                className="mt-2 w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 
                text-white focus:ring-2 focus:ring-amber-400 outline-none"
                            >
                                <option value="statement">Witness Statement</option>
                                <option value="analysis">AI Analysis</option>
                                <option value="log">Log Entry</option>
                                <option value="summary">Summarized Evidence</option>
                            </select>
                        </div>

                        {/* DESCRIPTION */}
                        <div>
                            <label className="text-sm text-neutral-300">Description</label>
                            <textarea
                                name="description"
                                required
                                className="mt-2 w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 
                text-white focus:ring-2 focus:ring-amber-400 outline-none h-32"
                                placeholder="Write the text evidence here..."
                            ></textarea>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex justify-end gap-3 pt-4">
                            <Button
                            onClick={() => window.history.back()}
                            variant="secondary" type="button">Cancel</Button>
                            <Button variant="primary" type="submit">Save Evidence</Button>
                        </div>

                    </form>
                </Card>
            </div>
        </div>
    );
}

export default AddEvidence;
