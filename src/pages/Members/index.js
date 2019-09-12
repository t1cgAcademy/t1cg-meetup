import React from 'react';

//components
import MemberCard from '../../components/MemberCard';
import { Container, Row, Col } from '../../components/Grid';

//edit this file in order to see changes on /members
import members from '../../assets/data/members.json';

export default function Members() {
    return (
        <Container fluid={true}>
            <Row justifyContent={'center'}>
                {members.map(member => (
                    <Col size={'lg-4'} key={member.id} classNames="my-2">
                        <MemberCard
                            id={member.id}
                            Name={member.Name}
                            imgURL={member.imgURL}
                            Occupation={member.Occupation}
                            Bio={member.Bio}
                            socialMedia={member.socialMedia}
                            Twitter={member.Twitter}
                            Facebook={member.Facebook}
                            LinkedIn={member.LinkedIn}
                            Github={member.Github}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
