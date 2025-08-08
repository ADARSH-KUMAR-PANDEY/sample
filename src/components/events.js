import react, { useState } from "react";
export default function Events() {
    const [activeTab, setActiveTab] = useState('Upcoming');
    const eventsData = {
        'Upcoming': ["Sttp6", "Sttp7", "Sttp8", "Sttp9", "Sttp10"],
        'Completed': ["Sttp1", "Sttp2", "Sttp3", "Sttp4", "Sttp5", "Sttp6", "Sttp7"]
    }
    return (
        <div style={{ padding: "10px" }}>
            <div style={{
                display: "flex",
                gap: "5px",
                flexWrap: "wrap"
            }}>
                <button
                    onClick={() => {
                        setActiveTab('Completed');
                    }}
                    style={{
                        flex: "1",
                        padding: "10px",
                        fontSize: "16px",
                        backgroundColor: activeTab === 'Completed' ? "#87CEFA" : "#f0f0f0",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    Completed</button>
                <button onClick={() => {
                    setActiveTab('Upcoming');
                }}
                    style={{
                        flex: "1",
                        padding: "10px",
                        fontSize: "16px",
                        backgroundColor: activeTab === 'Upcoming' ? "#87CEFA" : "#f0f0f0",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    Upcoming</button>
            </div>
            <div style={{ marginTop: '4px' }}>
                {activeTab === 'Upcoming' && (
                    <>
                        <h3>These are the list of {activeTab} events</h3>
                        <div>
                            <ul>
                                {eventsData[activeTab].map(eventName => (
                                    <li key={eventName}>{eventName}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
                {activeTab === 'Completed' && (
                    <>
                        <h3>These are the list of {activeTab} events</h3>
                        <div>
                            <ul>
                                {eventsData[activeTab].map(eventName => (
                                    <li key={eventName}>{eventName}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
            <div style={{ marginTop: "20px" }}>
                {activeTab === "Completed" && <p>✅ Completed these many amazing events.</p>}
                {activeTab === "Upcoming" && <p>📅 Dont miss Upcoming Events, Set Your Calender.</p>}
            </div>
        </div>
    );
}