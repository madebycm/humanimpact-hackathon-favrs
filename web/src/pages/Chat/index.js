import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { ChatFeed, Message } from 'react-chat-ui'

import {Header, IconButton, Wrapper} from '../../components'

import './style.css'

class Chat extends PureComponent {
  state = {
    messages: [
      new Message({
        id: 1,
        senderName: 'Stine',
        message: 'Hi there Stine. Ready for a High Five',
      }), // Gray bubble
      new Message({
        id: 0,
        senderName: 'Daniel',
        message: 'Me too. Let\'s do it!'
      }), // Blue bubble
    ],
  }

  render() {
    const {history} = this.props

    return (
      <div className="Page Chat-page">
        <Header>
          <IconButton
            text='Back to list'
            onClick={() => history.push('/proximity')}
          />
        </Header>

        <Wrapper className='Chat-page__Instructions u-space-between u-mt--'>
          <div className='Chat-page__Instructions__item u-mili u-flex-2 u-flex-row u-center'>
            <div className='u-center u-mr--'>
              <span className='badge'>1</span>
            </div>
            <span>Use this Chat to arrange a HighFive</span>
          </div>
          <div className='Chat-page__Instructions__item u-mili u-flex-2 u-flex-row u-center u-ml--'>
            <div className='u-center u-mr--'>
              <span className='badge'>2</span>&nbsp;
            </div>
            <span>Take a picture when you do your High-Five!</span>
          </div>

          <div className='u-flex-1 u-ml--'>
            <label htmlFor="photoInput">Take a photo</label>
            <input id='photoInput' type="file" style={{display: 'none'}}/>
          </div>
      </Wrapper>

      <Wrapper className='u-mt'>
        <ChatFeed
          messages={this.state.messages}
          hasInputField={false}
          showSenderName
          bubblesCentered={false}
          bubbleStyles={{
            text: {
              fontSize: 30
            },
            userBubble: {
              borderRadius: 10,
              padding: 40
            },
            chatbubble: {
              borderRadius: 10,
              padding: 40
            }
          }}
        />
      </Wrapper>

      </div>
    )
  }
}

export default withRouter(Chat)