// Candela Aviation Training Centre - Main JavaScript

// 1. Array of Objects storing course catalog data
const courses = [
    {
        id: "foo-01",
        name: "Flight Operations Officer Certification",
        category: "dispatch",
        duration: "6 Months",
        description: "Comprehensive dispatch training covering flight planning, meteorology, and radio telephony."
    },
    {
        id: "nav-02",
        name: "General Navigation & Flight Planning",
        category: "ground",
        duration: "3 Months",
        description: "Master chart reading, dead reckoning, radio navigation aids, and flight path calculations."
    },
    {
        id: "law-03",
        name: "Air Law & Operational Procedures",
        category: "ground",
        duration: "2 Months",
        description: "In-depth study of international civil aviation conventions, rules of the air, and air traffic services."
    },
    {
        id: "mb-04",
        name: "Mass and Balance Masterclass",
        category: "dispatch",
        duration: "1 Month",
        description: "Calculate aircraft loading limits, center of gravity, and fuel distribution profiles safely."
    }
];

// 2. Function using Template Literals to render courses into the DOM
function displayCourses(courseList) {
    const container = document.querySelector("#course-container");
    if (!container) return; // Exit if not on the courses page

    // Exclusively using template literals and array methods (.map and .join)
    container.innerHTML = courseList.map(course => `
        <article class="card">
            <h3>${course.name}</h3>
            <p><strong>Category:</strong> ${course.category.toUpperCase()}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p>${course.description}</p>
            <button class="cta-btn save-course-btn" data-id="${course.id}" style="margin-top: 1rem; padding: 0.5rem 1rem; font-size: 0.9rem;">Save Course</button>
        </article>
    `).join("");

    attachSaveListeners();
}

// 3. Function with Conditional Branching for Filtering Courses
function filterCourses(category) {
    if (category === "all") {
        displayCourses(courses);
    } else {
        const filtered = courses.filter(course => course.category === category);
        displayCourses(filtered);
    }
}

// 4. Function using localStorage and Event Handling
function attachSaveListeners() {
    const saveButtons = document.querySelectorAll(".save-course-btn");
    saveButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const courseId = event.target.getAttribute("data-id");
            const selectedCourse = courses.find(c => c.id === courseId);
            
            if (selectedCourse) {
                localStorage.setItem("savedPreferredCourse", JSON.stringify(selectedCourse));
                alert(`Successfully saved "${selectedCourse.name}" to your browser storage!`);
            }
        });
    });
}

// 5. Main Initialization Event Listener on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    displayCourses(courses);

    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            const filterValue = e.target.getAttribute("data-filter");
            filterCourses(filterValue);
        });
    });

    const saved = localStorage.getItem("savedPreferredCourse");
    if (saved) {
        const parsedCourse = JSON.parse(saved);
        console.log(`User's previously saved course preference: ${parsedCourse.name}`);
    }
});