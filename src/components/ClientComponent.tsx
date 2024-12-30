// Root 👉🏻 "src" Folder 👉🏻 "components" Folder 👉🏻 ClientComponent.tsx

"use client";

import { useState } from "react";

const ClientComponent = () => {

    const [counter, setCounter] = useState(0);

    console.log(`Counter: ${counter}`);

    return (
        <div>
            <button onClick={() => setCounter((c) => c + 1)}>
                Click
            </button>
        </div>
    )

}

export default ClientComponent