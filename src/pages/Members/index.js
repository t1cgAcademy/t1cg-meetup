import React, { Component } from 'react';

//components
import Wrapper from '../../components/Wrapper';
import MemberCard from '../../components/MemberCard';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Col from '../../components/Col';

import members from '../../assets/data/members.json';

export default class Members extends Component {
  state = {
    members
  };

  render() {
    return (
      <Wrapper>
        <Container fluid={true}>
          <Row>
            {this.state.members.map(member => (
              <Col size={'md-4'}>
                <MemberCard
                  id={member.id}
                  key={member.id}
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
      </Wrapper>
    );
  }
}
