import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/FriendList/FriendList";
import user from "../../data/user.json";
import data from "../../data/data.json";
import friends from "../../data/friends.json";
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
        
        <FriendList friends={friends}/>
    </Container>;
}