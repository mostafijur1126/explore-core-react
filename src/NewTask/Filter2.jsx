import React, { useState } from 'react';
import Filter from './Filter';

const Filter2 = () => {

    const students = [
        { id: 1, name: "Rahim", class: "Six", roll: 101 },
        { id: 2, name: "Karim", class: "Seven", roll: 102 },
        { id: 3, name: "Fatema", class: "Six", roll: 103 },
        { id: 4, name: "Ayesha", class: "Eight", roll: 104 },
    ];
    const [search, setSearch] = useState('');
    const [selectedClass, setSelectedClass] = useState("all");
    const classes = ['all'];
    for (let i = 0; i < students.length; i++) {
        const studentClass = students[i].class;
        if (!classes.includes(selectedClass)) {
            classes.push(studentClass);
        }

    }
    const FilteredStudents = students.filter(student => {
        const matchName = student.name.toLowerCase().includes(search.toLowerCase());
        const matchClass = selectedClass === "all" || student.class === selectedClass;
        return matchName && matchClass;
    })
    // console.log(findStudent);

    return (
        <div>
            <h1>student list</h1>
            <div>
                <h1>find student</h1>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder='find student'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div>
                {classes.map(cls => (
                    <button
                        key={cls}
                        onClick={() => setSelectedClass(cls)}
                        className={`px-4 py-2 rounded-2xl ${selectedClass === cls ? 'bg-purple-600 text-white'
                            : 'bg-gray-200'
                            }`}
                    >
                        {cls}
                    </button>
                ))}
            </div>
            {
                FilteredStudents.map(student => (
                    <div key={student.id} className="bg-white shadow p-4 mb-3 rounded-lg">
                        <h3 className="font-bold text-lg">{student.name}</h3>
                        <p>ক্লাস: {student.class}</p>
                        <p>রোল: {student.roll}</p>
                    </div>
                ))
            }
            <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                <p className="text-center">
                    {FilteredStudents.length} জন ছাত্র পাওয়া গেছে
                </p>
                {search && (
                    <p className="text-sm text-center">
                        আপনি খুঁজছেন: "{search}"
                    </p>
                )}
            </div>
        </div>
    );
};

export default Filter2;