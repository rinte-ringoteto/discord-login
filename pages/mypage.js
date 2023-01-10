import { Button } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../Auth';

const mypage = () => {
    const { currentUser, loading } = useContext(AuthContext);

    return !loading && (
        <div>
            {currentUser
                ? < img src={`https://cdn.discordapp.com/avatars/${currentUser.discordId}/${currentUser.avatar}.png`} alt="" />
                : null
            }
            <div></div>
            <Button
                target="_blank"
                href="http://localhost:5000/api/auth/discord"
                className="blackButton"
            >
                SignIn
            </Button>
            <div></div>
            <Button
                target="_blank"
                // 環境に応じて"sample"を書き換えてください
                href="https://sample.herokuapp.com/api/auth/discord"
                className="blackButton"
            >
                SignIn(heroku)
            </Button>
            <div></div>
            <Button
                variant='text'
                href="http://localhost:5000/api/auth/signout"
                className="blackButton"
            >
                SignOut
            </Button>
            <div></div>
            <Button
                variant='text'
                // 環境に応じて"sample"を書き換えてください
                href="https://sample.herokuapp.com/api/auth/signout"
                className="blackButton"
            >
                SignOut(heroku)
            </Button>
        </div>
    );
}

export default mypage;