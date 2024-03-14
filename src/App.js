import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, Heading, Image, View, Card } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';

function App() {
  return (
    <View>
      <Heading>Hello from AWS Amplify</Heading>
      <Image source={logo} />
      <Card>
        <p>Salir</p>
        <Button onClick={signOut}>Sign Out</Button>
      </Card>
    </View>
  );
}

export default withAuthenticator(App);
