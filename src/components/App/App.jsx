import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import user from "../../user.json";
import data from "../../data.json";
import { Container } from "./App.styled";

export default function App() {
    return <Container>
        <Profile
        кеу={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        />
        <Statistics
            title="Upload stats"
            stats={data} />
    </Container>;
}