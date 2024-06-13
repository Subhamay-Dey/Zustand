import { create } from "zustand";

import {devtools, persist} from "zustand/middleware"

const courseStore = (set) => ({
    course: [],
    addCourse: (course) => {
        set((state) => ({
            course: [course, ...state.course],
        }))
    },
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.course.filter((c) => c.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.course.map((course) => course.id == completed ? {...course, completed: !course.completed} : course)
        }))
    },
})

const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "courses",
        })
    )
)

export default useCourseStore;