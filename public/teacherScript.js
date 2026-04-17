// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page

const createTeacherForm = document.querySelector("form")

createTeacherForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const teacherData = new FormData(createTeacherForm)
    const reqBody = Object.fromEntries(teacherData)

    await fetch("/add/teacher", {
        method: "POST", 
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(reqBody)
    })

})=