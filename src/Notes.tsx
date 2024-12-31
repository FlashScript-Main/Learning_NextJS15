// 🔥 Simple Form (without "React-Hooks-Form" & "Zod") 🔥


/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🤍 The Code is within the "code" Folder, inside "1. Hamed Bahram" Folder 🤍

// npx create-next-app@latest ./


/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "app" Folder 👉🏻 layout.tsx 🔸

import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );

}


/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "app" Folder 👉🏻 page.tsx 🔸

import SimpleForm from "@/components/SimpleForm"

const Home = () => {

    return (
        <main className={`py-24 container mx-auto |  |  | `}>
            <h1 className={`mb-16 text-2xl font-medium |  |  | `}>
                Simple Form
            </h1>

            <SimpleForm />
        </main>
    )

}

export default Home


/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 SimpleForm.tsx 🔸

'use client'

import { FormEvent, useState } from 'react'

const SimpleForm = () => {

    const [data, setData] = useState()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData);

        const data = await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify(formDataObject)
        }).then(res => res.json())

        setData(data);
        form.reset();
    }

    return (
        <section className={` |  | flex gap-6 | `}>
            <form
                onSubmit={handleSubmit}
                className={`sm:w-1/2 |  | flex flex-1 flex-col gap-4 | `}
            >
                <input 
                    name='name' 
                    placeholder='name'
                    required 
                    className={`p-3 |  |  | rounded-lg`} 
                />

                <input
                    name='message'
                    placeholder='message'
                    required
                    className={`p-3 |  |  | rounded-lg`}
                />
                <button className={`py-2 | text-white bg-black |  | rounded-lg`}>
                    Submit
                </button>
            </form>

            <div className={`p-8 | text-white bg-cyan-600 | flex-1 | rounded-lg`}>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </section>
    )

}

export default SimpleForm


/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "app" Folder 👉🏻 "api" Folder 👉🏻 "form" Folder 👉🏻 route.ts 🔸

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const data = await request.json();

    return NextResponse.json(data);
}


/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "app" Folder 👉🏻 globals.css 🔸

@tailwind base;
@tailwind components;
@tailwind utilities;



































/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */

// 🔸 Root 👉🏻 "src" Folder 👉🏻 global.type.d.ts 🔸



/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "redux" Folder 👉🏻 "slices" Folder 👉🏻 posts-slice.ts 🔸



/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "redux" Folder 👉🏻 store.ts 🔸



/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "redux" Folder 👉🏻 ReduxProvider.tsx 🔸



/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "app" Folder 👉🏻 layout.tsx 🔸



/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "app" Folder 👉🏻 page.tsx 🔸

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 Posts.tsx 🔸

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 posts.module.css 🔸

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// 🔸 Root 👉🏻 "src" Folder 👉🏻 "app" Folder 👉🏻 globals.css 🔸

/*
    1️⃣ 👉🏻 Setup

    2️⃣ 👉🏻 "redux" Folder 👉🏻 store.ts

    3️⃣ 👉🏻 "redux" Folder 👉🏻 "features" Folder 👉🏻 "counter" Folder 👉🏻 counter-slice.ts

    4️⃣ 👉🏻 global.type.d.ts

    5️⃣ 👉🏻 "redux" Folder 👉🏻 "providers" Folder 👉🏻 auth-provider.tsx  

    6️⃣ 👉🏻 layout.tsx

    7️⃣ 👉🏻 page.tsx

    8️⃣ 👉🏻 "components" Folder 👉🏻 LogIn.tsx

    9️⃣ 👉🏻 globals.css
*/