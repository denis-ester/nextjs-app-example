import { MouseEvent } from 'react';

import { Wrapper, LogIn, SignUp } from './styledComponents';

import ProfileList from './ProfileList';

import { useAuth0 } from '../../../../react-auth0-wrapper';

interface IProfileMenuProps {
  onClick?: (event: MouseEvent<any>) => any;
}

const ProfileMenu = ({ onClick: handleClick }: IProfileMenuProps) => {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();

  return (
    <Wrapper>
      {!isAuthenticated && (
        <>
          <LogIn
            title="Log In"
            variant="inline"
            size="auto"
            onClick={() => loginWithRedirect({ initialScreen: 'login' })}
          />
          <SignUp
            title="Sign Up"
            size="auto"
            onClick={() => loginWithRedirect({ initialScreen: 'signUp' })}
          />
        </>
      )}

      {isAuthenticated && !loading && <ProfileList onClick={handleClick} />}
    </Wrapper>
  );
};

export default ProfileMenu;
