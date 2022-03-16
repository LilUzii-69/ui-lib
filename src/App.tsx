import { FluentThemeProvider } from '@azure/communication-react';
import { Stack } from '@fluentui/react';
import React from 'react';
import { CallingComponents } from './Component/CallComponent';
import { ChatComponents } from './Component/ChatComponent';
import Header from './Component/common/header';
import Sidebar from './Component/common/sidebar';
import './Component/calls/calls.css'

function CompletedComponentsApp(): JSX.Element {
  const stackStyle = {
    root: {
      width: '100%'
    }
  };
  return (
    <FluentThemeProvider>
      <div className="calls-container">
          <Header />
          <div className="calls-body">
              <div className="calls-sidebar">
                  <Sidebar />
              </div>
              <div className="calls-leftFold">
                  <ChatComponents />
              </div>
              <div className="calls-rightFold">
                  <CallingComponents />
              </div>
          </div>
      </div>
      </FluentThemeProvider>
  );
}

export default CompletedComponentsApp;