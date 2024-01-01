import CourseHeader from "./CourseHeader"
import Content from "./Content"

const Course = ({ course }) => {
    return (
        <>
            <CourseHeader course={course.name} />
            <Content parts={course.parts} />
        </>
    )
}

export default Course
