import { MouseEvent } from 'react';
import NextLink from 'next/link';

import { Link, Image, Text } from './styledComponents';

import { useAuth0 } from '../../../../../react-auth0-wrapper';

interface IProfileListProps {
  onClick?: (event: MouseEvent<any>) => any;
}

const ProfileList = ({ onClick: handleClick }: IProfileListProps) => {
  const { user } = useAuth0();

  return (
    <NextLink href="/profile" passHref>
      <Link to="/profile" onClick={handleClick}>
        <Image src={user.picture} />
        <Text>My List</Text>
      </Link>
    </NextLink>
  );
};

export default ProfileList;
