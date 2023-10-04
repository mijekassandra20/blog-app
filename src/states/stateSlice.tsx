import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Blog = {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
};

const initialState: Blog[] = [
    {
        id: 1,
        title: "The Unspoken Art of Procrastination",
        description: `Ah, procrastination – the art of doing everything except what you're supposed to be doing. If there was an Olympic event for procrastination, we'd all be gold medalists. After all, why complete that important project when you can watch cat videos, organize your sock drawer, or rearrange your entire spice cabinet by alphabetical order? Priorities, right?

        So, dear reader, grab your favorite comfy chair and let's dive into the unspoken art of procrastination, because why do today what you can avoid altogether?`,
        author: "Mark Lee",
        date: "September 11, 2023",
    },
    {
        id: 2,
        title: "The Fine Art of Distraction",
        description: `Why start working when there are so many fascinating distractions at our fingertips? Social media, the latest Netflix series, and the never-ending YouTube rabbit hole are just a few clicks away. Pro tip: Leave your phone in another room, and your productivity might skyrocket to an astonishing 2%!`,
        author: "Lee Taeyong",
        date: "September 12, 2023",
    },
    {
        id: 3,
        title: `The Myth of "I Work Better Under Pressure`,
        description: `We all have that friend who claims they do their best work with a tight deadline looming. Spoiler alert: They're probably lying. Procrastination is the ultimate thrill ride, but it often leads to sleepless nights, caffeine binges, and an impressive collection of stress-induced gray hairs.`,
        author: "Ten Lee",
        date: "September 12, 2023",
    },
    {
        id: 4,
        title: "Just One More Episode",
        description: `Netflix: 1, Productivity: 0. It's a tale as old as time. That cliffhanger ending just begs you to click "Play Next Episode," and suddenly, it's 2 a.m., and you've binged an entire season of a show you barely remember. But hey, at least you're caught up on the latest drama in a fictional world!`,
        author: "Mark Lee",
        date: "September 12, 2023",
    },
    {
        id: 5,
        title: "The Art of Pseudo-Productivity",
        description: `Ever spent hours color-coding your bookshelf or alphabetizing your movie collection? Congratulations, you've mastered the art of pseudo-productivity! These tasks make you feel accomplished without actually accomplishing anything of significance. Bravo!`,
        author: "Lee Taeyong",
        date: "September 12, 2023",
    },
    {
        id: 6,
        title: `The Power of "I'll Do It Tomorrow"`,
        description: `Tomorrow, the magical land where all your tasks are magically completed, right? Wrong. Tomorrow quickly becomes today, and you find yourself back at square one. But hey, at least you're consistent!

        In conclusion, dear readers, procrastination is an art form that few truly appreciate. So, next time you find yourself procrastinating, remember that you're not avoiding work; you're simply indulging in the intricate dance of "productive" delay. After all, Rome wasn't built in a day, and neither is a master procrastinator. So, go forth and procrastinate with pride, for you are a true connoisseur of the art of getting absolutely nothing done!`,
        author: "Ten Lee",
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
