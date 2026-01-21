import React from 'react';
import './SystemRequirements.css';

const SystemRequirements = () => {
    const data = [
        { category: 'Operating System', req: 'Windows 10/11 | Linux | macOS', notes: 'Any OS with Terminal' },
        { category: 'Python Version', req: 'Python 3.8+', notes: 'Essential' },
        { category: 'Disk Space', req: '1 GB (Minimum)', notes: 'For signature DB' },
    ];

    return (
        <section className="falcon-req-section">
            <h2 className="falcon-req-title">SYSTEM REQUIREMENTS</h2>
            
            <div className="falcon-req-card">
                <table className="falcon-req-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Requirement</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="falcon-category-cell">{item.category}</td>
                                <td>{item.req}</td>
                                <td className="falcon-notes-cell">{item.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default SystemRequirements;