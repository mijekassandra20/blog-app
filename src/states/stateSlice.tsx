import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Blog = {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
};

const initialState: Blog[] = [
    {
        id: 1,
        title: "Mad City",
        description: ` When I’m in the house, guess what happens
            At the end it always turns out
            To be empty and demolished (I killed it)`,
        author: "Mark Lee",
        date: "September 11, 2023",
    },
    {
        id: 2,
        title: "Shalala",
        description: `We got the bounce
            Wow, wow, wow, wow
            Bounce (We jumpin' around)
            We got the bounce
            Wow, wow, wow, wow
            Bounce (We jumpin' around, let's go)`,
        author: "Lee Taeyong",
        date: "September 12, 2023",
    },
    {
        id: 3,
        title: "Birthday",
        description: `Every second, every minute
        Make me wanna celebrate it
        Everythin' about you perfect
        Just the way your mama made it
        You're the best, you're my first, first place
        Sugar sweet in a million ways
        Baby, we don't need no reason
        Baby, we don't need to wait
        Let's make tonight your birthday`,
        author: "Ten Lee",
        date: "September 12, 2023",
    },
    {
        id: 4,
        title: "React with CSS only",
        description: `We got the bounce
            Wow, wow, wow, wow
            Bounce (We jumpin' around)
            We got the bounce
            Wow, wow, wow, wow
            Bounce (We jumpin' around, let's go)`,
        author: "Lee Taeyong",
        date: "September 12, 2023",
    },
    {
        id: 5,
        title: "React with CSS only",
        description: `We got the bounce
            Wow, wow, wow, wow
            Bounce (We jumpin' around)
            We got the bounce
            Wow, wow, wow, wow
            Bounce (We jumpin' around, let's go)`,
        author: "Lee Taeyong",
        date: "September 12, 2023",
    },
    {
        id: 6,
        title: "React with CSS only",
        description: `We got the bounce
            Wow, wow, wow, wow
            Bounce (We jumpin' around)
            We got the bounce
            Wow, wow, wow, wow
            Bounce (We jumpin' around, let's go)`,
        author: "Lee Taeyong",
        date: "September 12, 2023",
    },
];

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        addBlog: (state, action: PayloadAction<Blog>) => {
            state.push(action.payload);
        },
        removeBlog: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((blog) => blog.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { addBlog, removeBlog } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;
