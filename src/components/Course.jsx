

const Course = ({ course }) =>
{

    console.log(course.parts[0].name);

    console.log(course.parts.map((courses) => courses))

    console.log(course);

    const initialValue = 0

    const courseExercises = course
        .parts
        .map(
            (c) => c.exercises)

    const sumOfExercises = courseExercises
        .reduce(
            (acumulador, initialValue) => acumulador + initialValue, initialValue)

    console.log(sumOfExercises);

    return (
        <div>

            <header>
                <h1>{course.name}</h1>
            </header>

            <main>
                <ul>
                    {
                        course.parts.map((courses) => (
                            <li key={courses.id}>

                                <p> {courses.name} {courses.exercises}   </p>

                            </li>
                        ))
                    }
                </ul>

                <p>total of {sumOfExercises} </p>

            </main>
        </div>
    )
}

export default Course