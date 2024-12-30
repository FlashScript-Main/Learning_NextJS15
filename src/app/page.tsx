// Root 👉🏻 "src" Folder 👉🏻 "app" Folder 👉🏻 page.tsx

import ClientComponent from "@/components/ClientComponent"
import ServerComponent from "@/components/ServerComponent"

const Home = () => {

    return (
        <div>
            <ServerComponent />
            <ClientComponent />
        </div>
    )

}

export default Home