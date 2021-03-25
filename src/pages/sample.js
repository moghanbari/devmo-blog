import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout/global.layout'
import globalStyle from '../components/layout/global.style'

const PageStyle = createGlobalStyle`
	h1 {
		font-family: ${globalStyle.fonts.main};
	}
`
const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`
const Excerpt = styled.p`
  margin: 0;
`
const MyOwnParagraph = styled.p`
  color: red;
  display: block;
  width: 100%;
  margin-bottom: 20px;
`

const User = (props) => (
  <UserWrapper>
    <Avatar src={props.avatar} alt='' />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

const Sample = () => (
  <Layout>
    <Container>
      <PageStyle />
      <h1>Sample</h1>

      <MyOwnParagraph>slsdjflskjdlk sdjlfsj</MyOwnParagraph>

      <User
        username='Jane Doe'
        avatar='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username='Bob Smith'
        avatar='https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg'
        excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  </Layout>
)

export default Sample
