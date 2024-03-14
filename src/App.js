import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, Heading, Image, View, Card } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';
import { I18n } from '@aws-amplify/core';
import './styles.css';

I18n.setLanguage('es');
I18n.putVocabularies({
  es: {
    'Sign In': 'Iniciar sesión',
    'Sign in': 'Iniciar sesión',
    'Sign Up': 'Registrarse',
    'Username': 'Nombre de usuario',
    'Password': 'Contraseña',
    'Create Account': 'Registrarse',
    'Confirm Password': 'Confirme contraseña',
    'Forgot your password?': '¿Olvidaste tu contraseña?',
    'Enter your Username': 'Ingrese su nombre de usuario',
    'Enter your Password': 'Ingrese su contraseña',
    'Please confirm your Password': 'Confirme su contraseña',
    'Enter your Email': 'Ingrese su correo electrónico',
    // Agrega aquí las demás cadenas de texto que quieras traducir
  }
});

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
