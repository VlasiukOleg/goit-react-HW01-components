import { Container } from './App.styled';
import { Profile } from './Profile/Profile';
import { Statistics } from './Stattistics/Statistics';
import user from '../user.json';
import data from '../data.json';

console.log(data);

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
    </Container>
  );
};
